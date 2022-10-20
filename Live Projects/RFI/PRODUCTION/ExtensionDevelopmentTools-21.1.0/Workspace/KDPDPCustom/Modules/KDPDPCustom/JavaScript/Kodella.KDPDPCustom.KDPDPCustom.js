define("Kodella.KDPDPCustom.KDPDPCustom", [
  "Kodella.KDPDPCustom.KDPDPCustom.View",
  "ProductDetails.Full.View",
  "kodella_news_pdp.tpl",
  "kodella_case_studies_pdp.tpl",
  "Handlebars",
  "underscore",
  "Profile.Model",
], function (
  KDPDPCustomView,
  PDPFull,
  PDPCustomNews,
  PDPCaseStudies,
  Handlebars,
  _,
  ProfileModel
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var PDP = container.getComponent("PDP");

      if (PDP) {
        Handlebars.registerHelper("pdfsplit", function (name) {
          name.substr(0, name.indexOf(" "));
          var test = name.substr(name.indexOf(" ") + 1);

          return test;
        });
        PDP.on("beforeShowContent", function () {
          PDPFull.prototype.getContext = _.wrap(
            PDPFull.prototype.getContext,
            function (fn) {
              var context = fn.apply(this, _.toArray(arguments).slice(1));
              var ItemInfo = PDP.getItemInfo();
              var isNew = ItemInfo.item.custitem_kd_isnew_type;
              var isCaseStudy = ItemInfo.item.custitem_kd_is_case_study;
              var self = this;
              var pdfName = "";
              var idItem = ItemInfo.item.internalid;
              var url =
                "/app/site/hosting/scriptlet.nl?script=1755&deploy=1&compid=3389566&h=f81371769cae5fdf1f59&id=" +
                idItem;
              jQuery
                .ajax({
                  url: url,
                  data: "",
                  async: false,
                })
                .done(function (data) {
                  //pdfName = data
                  if (data.includes("&trade")) {
                    data.replace("&trade", "");
                  }
                  data = data.split("<")[0];

                  var jsonPDF = JSON.parse(data);
                  if (jsonPDF.file1) {
                    context.pdf1 = jsonPDF.file1.split('"').join("");
                  }
                  if (jsonPDF.file2) {
                    context.pdf2 = jsonPDF.file2.split('"').join("");
                  }
                  if (jsonPDF.file3) {
                    context.pdf3 = jsonPDF.file3.split('"').join("");
                  }
                  if (jsonPDF.file4) {
                    context.pdf4 = jsonPDF.file4.split('"').join("");
                  }
                  if (jsonPDF.file5) {
                    context.pdf5 = jsonPDF.file5.split('"').join("");
                  }
                  if (jsonPDF.file6) {
                    context.pdf6 = jsonPDF.file6.split('"').join("");
                  }
                  if (jsonPDF.file7) {
                    context.pdf7 = jsonPDF.file7.split('"').join("");
                  }
                  if (jsonPDF.file8) {
                    context.pdf8 = jsonPDF.file8.split('"').join("");
                  }
                  if (jsonPDF.file9) {
                    context.pdf9 = jsonPDF.file9.split('"').join("");
                  }
                  if (jsonPDF.file10) {
                    context.pdf10 = jsonPDF.file10.split('"').join("");
                  }
                  if (jsonPDF.file11) {
                    context.pdf11 = jsonPDF.file11.split('"').join("");
                  }
                  if (jsonPDF.file12) {
                    context.pdf12 = jsonPDF.file12.split('"').join("");
                  }
                  if (jsonPDF.file13) {
                    context.pdf13 = jsonPDF.file13.split('"').join("");
                  }
                  if (jsonPDF.file14) {
                    context.pdf14 = jsonPDF.file14.split('"').join("");
                  }
                  if (jsonPDF.file15) {
                    context.pdf15 = jsonPDF.file15.split('"').join("");
                  }
                  if (jsonPDF.file16) {
                    context.pdf16 = jsonPDF.file16.split('"').join("");
                  }
                  if (jsonPDF.file17) {
                    context.pdf17 = jsonPDF.file17.split('"').join("");
                  }
                  if (jsonPDF.file18) {
                    context.pdf18 = jsonPDF.file18.split('"').join("");
                  }
                  if (jsonPDF.file19) {
                    context.pdf19 = jsonPDF.file19.split('"').join("");
                  }
                  if (jsonPDF.file20) {
                    context.pdf20 = jsonPDF.file20.split('"').join("");
                  }

                  if (jsonPDF.file21) {
                    context.pdf21 = jsonPDF.file21.split('"').join("");
                  }
                  if (jsonPDF.file22) {
                    context.pdf22 = jsonPDF.file22.split('"').join("");
                  }
                  if (jsonPDF.file23) {
                    context.pdf23 = jsonPDF.file23.split('"').join("");
                  }
                  if (jsonPDF.file24) {
                    context.pdf24 = jsonPDF.file24.split('"').join("");
                  }
                  if (jsonPDF.file25) {
                    context.pdf25 = jsonPDF.file25.split('"').join("");
                  }
              
                  if (jsonPDF.hasOwnProperty("lengthExtras")) {
                    var itemskus = [];
                    
                      for(var i = 0;i<jsonPDF.lengthExtras.length;i++) 
					  {

						  var pdfsku = (jsonPDF.lengthExtras[i]).name
						  itemskus.push((pdfsku.split(" "))[0]);
                      }             
                    var skuname = [];
					for(var j = 0;j<itemskus.length;j++)
					{

						if(itemskus[j].split("_")[1]  == ItemInfo.item.itemid){                                                      
						skuname.push(jsonPDF.lengthExtras[j]);

						}
					}
					context.pdfsExtras = skuname;
                  }
                });
              var noQuotes = pdfName.split('"').join("");
              //context.pdfName = noQuotes;
              if (isNew) {
                self.template = PDPCustomNews;
                Handlebars.registerHelper(
                  "decodeFullDescription",
                  function (text) {
                    var dataHTML = jQuery.parseHTML(text);
                    var string = "";
                    _.each(dataHTML, function (node) {
                      if (node.outerHTML) {
                        string += node.outerHTML;
                      } else if (node.textContent) {
                        string += node.textContent;
                      }
                    });
                    return new Handlebars.SafeString(string);
                  }
                );

                /* 
								DESCRIPTION:
									Si no llego a la url, hago un bucle por cada uno de sus sub-objetos hasta encontrarla y devolverla
									1- busco una posicion mas dentro del objeto
									2- si la encuentro, la asigno a FirstImage y lo devuelvo, sino, hago un bucle hasta encontrarla y devolverla
									3- retorno la url
								*/
                function setFirstImage(jsonImage) {
                  var FirstImage = jsonImage[Object.keys(jsonImage)[0]];
                  var { url } = FirstImage;

                  while (typeof url === "undefined") {
                    FirstImage = FirstImage[Object.keys(FirstImage)[0]];
                    var { url } = FirstImage;
                  }

                  FirstImage = url;
                  return FirstImage;
                }

                var ItemImage = ItemInfo.item.itemimages_detail;
                if (!_.isEmpty(ItemImage)) {
                  var FirstImage = ItemImage[Object.keys(ItemImage)[0]].url;

                  typeof FirstImage === "undefined"
                    ? (FirstImage = setFirstImage(ItemImage)) //busca y devuelve la url dentro del objeto
                    : (FirstImage = FirstImage);
                }
                context.FirstImage = FirstImage;
              } else if (isCaseStudy) {
                self.template = PDPCaseStudies;
                var tagArray = [];
                if (ItemInfo.item.custitem_kd_case_study_tags) {
                  tagArray =
                    ItemInfo.item.custitem_kd_case_study_tags.split(",");
                }
                context.imageHeader =
                  self.model.attributes.item.attributes.custitem_kd_case_study_header_img;
                context.tags = tagArray;
              } else {
                //formatting description
                PDP.on("afterShowContent", function () {
                  var parent = document.getElementById("tab-description");
                  var child = parent.children;
                  var text;
                  if (child.length > 0) {
                    text = child[0].innerHTML;
                  } else {
                    text = parent.innerHTML;
                  }
                  var string = text,
                    separator = ".\n",
                    substring = string.split(separator);
                  for (i = 0; i < substring.length; i++) {
                    if (i % 2 == 1) {
                      substring.splice([i], 0, ".</br></br>");
                      substring.join("");
                      // arregloDeSubCadenas[i] = '</br>'
                    }
                  }
                  if (child.length > 0) {
                    var p = substring.join("");
                    child[0].innerHTML = p;
                  } else {
                    var p = substring.join("");
                    parent.innerHTML = p;
                  }
                  self.template = self.template;

                  var customTableElements = document.querySelectorAll(
                    "table.custom-table tbody tr td"
                  );
                  customTableElements.forEach(function (element) {
                    if (element.innerText.indexOf("&lt;") !== -1) {
                      var withoutCharacter = element.innerText.replaceAll(
                        "&lt;",
                        "<"
                      );
                      console.log(withoutCharacter);
                      element.innerText = withoutCharacter;
                    }
                  });
                });
              }
              return context;
            }
          );
        });

        PDP.on("afterShowContent", function () {
          var ItemInfo = PDP.getItemInfo();
          var isNew = ItemInfo.item.custitem_kd_isnew_type;
          //Adding target blank if the url is for PDF (otherwise it wont open)
          if (isNew) {
            var bodyArticle =
              document.getElementsByClassName("article-paragraph")[0];
            var children = bodyArticle.childNodes;
            children.forEach(function (element, index) {
              if (element.nodeName == "A") {
                if (element.href.indexOf(".pdf") !== -1) {
                  element.target = "_blank";
                }
              }
            });
          }
        });

        // PDP.on("afterShowContent", function () {
        // 	var ProfileModelInstanced = ProfileModel.getInstance();

        // 	var Status = ProfileModelInstanced.attributes.isLoggedIn;

        // 	if (Status === "F") {

        // 		$('.custom-button-request-quote').css('display', 'none');
        // 	}

        // });
      }
    },
  };
});
