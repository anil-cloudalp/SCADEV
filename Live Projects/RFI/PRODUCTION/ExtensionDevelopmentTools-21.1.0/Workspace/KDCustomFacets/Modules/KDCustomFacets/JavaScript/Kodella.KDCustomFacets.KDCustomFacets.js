define("Kodella.KDCustomFacets.KDCustomFacets", [
  "Kodella.KDCustomFacets.KDCustomFacets.View",
  "kodella_facets_news.tpl",
  "underscore",
  "Backbone.CollectionView",
  "Facets.Browse.CategoryHeading.View",
  "kodella_category_heading.tpl",
  "Handlebars",
  "Facets.FacetedNavigation.View",
  "kodella_facets_faceted_dropdown.tpl",
  "Facets.Model",
  "kodella_case_studies_plp.tpl",
  "Utils",
  "Facets.ItemCell.View",
], function (
  KDCustomFacetsView,
  KodellaFacetsNew,
  _,
  BackboneCollection,
  CategoryHeading,
  KodellaCategoryHeading,
  Handlebars,
  Facets,
  KodellaFacetsFiltersCustom,
  FacetModel,
  CaseStudiesPLP,
  Utils,
  ItemCell
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // http's://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var PLP = container.getComponent("PLP");
      if (PLP) {
        var TotalItems = [];
        var WindowSize = $(window).width();
        var NextJson = "";
        var CurrentPage = 0;
        var LimitPages = 0;
        var LastClicked = 0;
        var hasNext = false;

        function ParseDescription(text) {
          var dataHTML = jQuery.parseHTML(text);
          var string = "";
          _.each(dataHTML, function (node) {
            if (node.textContent) {
              string += node.textContent;
            }
          });

          if (string.length >= 220) {
            var truncated = string.trim().substring(0, 220).split(" ").slice(0, -1).join(" ") + "…";
            return truncated;
          } else {
            return string.trim();
          }
        }

        function configurableParseDescription(length, text) {
          var dataHTML = jQuery.parseHTML(text);
          var string = "";
          _.each(dataHTML, function (node) {
            if (node.textContent) {
              string += node.textContent;
            }
          });
          if (string.length >= length) {
            var truncated = string.trim().substring(0, length).split(" ").slice(0, -1).join(" ") + "…";
            return truncated;
          } else {
            return string.trim();
          }
        }

        PLP.on("beforeShowContent", function () {
          var urlPages = window.location.href;
          if (urlPages.includes("news-release")) {
            //IMPORTANT TO PREVENT THE INFINITE REDIRECT
            if (PLP.getPageSize().id !== "10") {
              PLP.setPageSize({ pageSize: "10" });
            }

            var sorting = PLP.getSorting();
            if (sorting.id === "relevance:desc") {
              PLP.setSorting({ sorting: "custitem_kd_new_date:desc" });
            }
          }

          var Filters = PLP.getFilters();
          if (urlPages.includes("keywords")) {
            if (Filters.length === 0) {
              PLP.setFilters({ filters: { custitem_kd_isnew_type: false, custitem_kd_is_case_study: false } });

              setTimeout(function () {
                document.title = "RFI Technology Solutions Search Results";
              }, 1000);
            }
          }
          ItemCell.prototype.getContext = _.wrap(ItemCell.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var DisplayName = self.model.attributes.displayname;
            context.DisplayName = DisplayName;
            return context;
          });

          BackboneCollection.prototype.getContext = _.wrap(BackboneCollection.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var url = window.location.href;
            if (self.placeholderData.view === "Facets.Items") {
              LimitPages = self.parentView.totalPages;
              if (self.parentView.model.attributes.links.length > 0) {
                NextJson = self.parentView.model.attributes.links[CurrentPage].href;
                hasNext = true;
              }
            }

            if (url.includes("news-release")) {
              self.template = KodellaFacetsNew;
              Handlebars.registerHelper("decodeDescription", function (text) {
                var string = ParseDescription(text);
                return new Handlebars.SafeString(string);
              });
            } else if (url.includes("case-studies")) {
              self.template = CaseStudiesPLP;

              if (context.collection.models) {
                var caseStudiesArr = [];
                var domain = SC.ENVIRONMENT.shoppingDomain;
                context.collection.models.forEach(function (item) {
                  item.attributes.custitem_kd_case_study_intro = ParseDescription(
                    item.attributes.custitem_kd_case_study_intro
                  );
                  item.attributes.custitem_kd_case_study_tags = configurableParseDescription(
                    60,
                    item.attributes.custitem_kd_case_study_tags
                  );
                  item.attributes.facebookurl =
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    domain +
                    "/" +
                    encodeURIComponent(item.attributes.urlcomponent);
                  item.attributes.twitterurl =
                    "https://twitter.com/intent/tweet?text=" +
                    domain +
                    "/" +
                    encodeURIComponent(item.attributes.urlcomponent);
                  item.attributes.custitem_kd_case_study_header_txt = configurableParseDescription(
                    100,
                    item.attributes.custitem_kd_case_study_header_txt
                  );
                  caseStudiesArr.push(item);
                });

                context.collection.models = caseStudiesArr;
                context.pagebanner = self.parentView.model.attributes.category.attributes.pagebannerurl;
              }
            } else {
              self.template = self.template;
            }

            return context;
          });

          CategoryHeading.prototype.getContext = _.wrap(CategoryHeading.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var url = window.location.href;
            if (url.includes("news-release")) {
              this.template = KodellaCategoryHeading;
            } else {
              this.template = this.template;
            }
            return context;
          });

          Facets.prototype.getContext = _.wrap(Facets.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));

            var url = window.location.href;
            var self = this;
            var AllFacets = self.options.facets;
            var YearNews = [];
            var CategoryNews = [];
            var Filters = PLP.getAllFilters();

            _.each(Filters, function (Facet, index, list) {
              if (Facet.id === "custitem_kd_year_news") {
                var FacetID = Facet.id;
                var Values = Facet.values;
                _.each(Values, function (InnerFacet, index, list) {
                  YearNews.push({ value: InnerFacet.url, label: InnerFacet.label });
                });
              } else if (Facet.id === "custitem_kd_category_news") {
                var FacetID = Facet.id;
                var Values = Facet.values;
                _.each(Values, function (InnerFacet, index, list) {
                  CategoryNews.push({ value: InnerFacet.url, label: InnerFacet.label });
                });
              }
            });

            context.CategoryNews = CategoryNews;
            context.YearFacets = YearNews;
            if (url.includes("news-release")) {
              this.template = KodellaFacetsFiltersCustom;
            } else {
              this.template = this.template;
            }
            return context;
          });
        });
        PLP.on("afterShowContent", function () {
          var url = window.location.href;
          var filters = PLP.getFilters();
          if (filters.length === 0 && url.includes("search")) {
            $(".facets-facet-browse-results").css("display", "none");
          } else {
            $(".facets-facet-browse-results").css("display", "block");
            if (url.includes("keywords")) {
              setTimeout(function () {
                document.title = "RFI Technology Solutions Search Results";
              }, 1000);
            }
          }

          if (url.includes("news-release")) {
            var YearsArray = [];
            var YearOptions = $("#FacetYear option").each(function () {
              YearsArray.push(this.value);
            });

            $("#FacetYear option").remove();

            YearsArray.sort(function (x, y) {
              return y - x;
            });

            var select = document.getElementById("FacetYear");
            console.log(select);
            var optionDefault = document.createElement("Option");
            optionDefault.value = "";
            optionDefault.innerHTML = "Year";
            select.appendChild(optionDefault);
            YearsArray.forEach(function (element, index) {
              console.log(element);
              var option = document.createElement("option");
              option.value = element;
              option.innerHTML = element;
              if (option.innerHTML === "") {
                this.remove();
              }
              select.appendChild(option);
            });

            console.log(YearsArray);
          }
        });

        BackboneCollection.prototype.getContext = _.wrap(BackboneCollection.prototype.getContext, function (fn) {
          var url = window.location.href;

          var LimitPages = 0;
          var LastClicked = 0;
          var self = this;
          LimitPages = self.parentView.totalPages;

          if (LimitPages <= 1) {
            hasNext = false;
          }

          if (url.includes("news-release")) {
            this.template = KodellaFacetsNew;
          } else {
            this.template = this.template;
          }

          var context = fn.apply(this, _.toArray(arguments).slice(1));

          PLP.on("afterShowContent", function () {
            var url = window.location.href;
            var filters = PLP.getFilters();

            if (filters.length < 3 && !url.includes("news-release")) {
              // $('.facets-facet-browse-narrowedby').hide();
              // $('.facets-faceted-navigation-title').hide();
              // $('.facets-faceted-navigation-facets-clear').hide();
            }

            $('[data-facet-id="false"]').css("display", "none");

            if (hasNext) {
              $("#CTAContainer").html('<button id="CTALoadMore">LOAD MORE </button>');
            }

            if (url.includes("news-release")) {
              var LastPlace = Backbone.history.getFragment();
              var CurrentFilters = PLP.getFilters();
              if (WindowSize < 768) {
                var Append = $(".facets-item-list-sort-selector").appendTo("#ContainerFacets");
              }

              //change the relevance text to Sort By
              $(".relevance-desc").text("Sort by");
              $("#TriggerSearch").click(function () {
                var Value = $("#SearchValue").val();
                var URL = "search?keywords=" + Value + "&custitem_kd_isnew_type=true";
                alert(URL);
                Backbone.history.navigate(URL, { trigger: true });
              });

              $(".facets-facet-browse-facets").appendTo("#ContainerFacets");
              $(".facets-facet-browse-facets").removeAttr("data-action");
              $(".facets-facet-browse-facets").removeClass("facets-facet-browse-facets");

              if (WindowSize > 768) {
                $(".facets-item-list-sort-selector").appendTo("#ContainerSort");
              }
              $("#FacetCategory").change(function () {
                var FacetedValue = $(this).val();
                if (CurrentFilters.length > 0) {
                  var CurrentFilterID = CurrentFilters[0].id;
                  var CurrentFilterValue = CurrentFilters[0].value;
                  PLP.setFilters({
                    filters: { [CurrentFilterID]: CurrentFilterValue, custitem_kd_category_news: FacetedValue },
                  });
                } else {
                  PLP.setFilters({ filters: { custitem_kd_category_news: FacetedValue } });
                }
              });

              $("#FacetYear").change(function () {
                var FacetedValue = $(this).val();
                if (CurrentFilters.length > 0) {
                  var CurrentFilterID = CurrentFilters[0].id;
                  var CurrentFilterValue = CurrentFilters[0].value;
                  PLP.setFilters({
                    filters: { [CurrentFilterID]: CurrentFilterValue, custitem_kd_year_news: FacetedValue },
                  });
                } else {
                  PLP.setFilters({ filters: { custitem_kd_year_news: FacetedValue } });
                }
              });

              var CTAtriggered = false;

              if (!CTAtriggered) {
                if (WindowSize < 768) {
                  $("#ContainerItems").children().css("display", "flex");
                } else {
                }

                LastClicked = LastClicked + 1;
              }

              $("#CTALoadMore").click(function () {
                $.get(NextJson, function (data) {
                  var IMGItem = "";
                  var IMGAlt = "";
                  _.each(data.items, function (item) {
                    var ItemImage = item.itemimages_detail;
                    var ItemDescription = ParseDescription(item.custitem_kd_new_content);
                    var FirstElement = ItemImage[Object.keys(ItemImage)[0]];
                    var DisplayName = item.displayname;
                    if (FirstElement) {
                      IMGItem = FirstElement.url;
                      IMGAlt = FirstElement.altimagetext;
                    } else {
                      IMGItem = "";
                      IMGAlt = "";
                    }

                    var ItemHTML = '<div class="container-to-news"><div class="container-description">';
                    ItemHTML +=
                      '<div class="initial-info-new"><p class="date-facet">' + item.custitem_kd_new_date + "</p>";
                    ItemHTML +=
                      '<a href="' +
                      item.urlcomponent +
                      '" data-touchpoint="home"><p class="p-news name-facet">' +
                      item.displayname +
                      "</p></a>";
                    ItemHTML += '</div><div class="img-news"><img src="' + IMGItem + '" alt="' + IMGAlt + '" /></div>';
                    ItemHTML +=
                      '<p class="description-facet description-p-' +
                      item.internalid +
                      '">' +
                      ItemDescription +
                      "</p></div></div>";
                    $("#CtaResults").append(ItemHTML);
                  });

                  if (LastClicked < LimitPages) {
                    NextJson = data.links[1].href;
                  }
                });

                CTAtriggered = true;
                if (WindowSize < 768) {
                  $("#ContainerItems").children().css("display", "flex");
                }

                if ($("#ShowContent")) {
                  $("#ShowContent").remove();
                }

                LastClicked = LastClicked + 1;
                if (LastClicked === LimitPages) {
                  this.disabled = "true";
                  this.innerText = "No more news to load";
                  this.style.backgroundColor = "#d5d5d5";
                  this.style.color = "#777";
                }
              });
            }
          });

          return context;
        });
      }
    },
  };
});
