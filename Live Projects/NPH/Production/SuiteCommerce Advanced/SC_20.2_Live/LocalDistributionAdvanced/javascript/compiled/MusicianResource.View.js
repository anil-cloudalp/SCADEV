///<amd-module name="MusicianResource.View"/>
define("MusicianResource.View", ["require", "exports", "underscore", "musician_resource_landing.tpl", "Utils", "Backbone.View", "SessionStorageHandler", "Getinfo.View", "Musician.Get.Model", "MusicianResource.Model", "Configuration", "GlobalViews.Message.View"], function (require, exports, _, musician_resource_tpl, Utils, BackboneView, SessionStorageHandler, Getinfo, MusicianResourceGetitemsModel, MusicianResourceModel, Configuration_1, GlobalViews_Message_View_1) {
    "use strict";
    var MusicResourceLandingPage = BackboneView.extend({
        template: musician_resource_tpl,
        title: Utils.translate('Musician Resource Products'),
        className: 'ItemListView',
        page_header: Utils.translate('Musician Resource Products'),
        attributes: {
            id: 'musician-resource',
            class: 'musician-resource-view'
        },
        events: {
            'click [data-action="search-results"]': 'searchResults',
            'click [data-action="getinfo"]': 'getinfo',
            'click [data-action="resetfields"]': 'resetfields',
            'change #Book': 'bookselected',
            'change #Chapter': 'chapterselected',
            'change #Verse': 'verseselected',
            'change #SelectaYear': 'yearselected',
            'change #SelectaSunday': 'sundayselected'
            // 'keyup [data-action="hymanTitle"]':'hymntitleautocompletion',
            // 'keyup [data-action="HymanTune"]':'hymntuneautocompletion',
            // 'keyup [data-action="PsalmTitle"]':'PsalmTitleautocompletion',
            // 'keyup [data-action="PsalmTune"]':'PsalmTuneautocompletion',
            // 'click [data-action="hymantitleoptionselect"]':'titleoptionselect',
            // 'click [data-action="hymantuneoptionselect"]':'hymantuneoptionselect',
            // 'click [data-action="psalmtitleoptionselect"]':'psalmtitleoptionselect',
            // 'click [data-action="psalmtuneoptionselect"]':'psalmtuneoptionselect'
        },
        initialize: function (options) {
            this.obj = {};
            this.application = options.application;
            this.application.getLayout().on('beforeAppendView', function (view) {
                var viewId = view.$el.attr('id');
                if (viewId == 'musician-resource') {
                    var self = this;
                    self.$(document).ready(function () {
                        $('.shopping-layout-breadcrumb').hide();
                    });
                    this.render();
                }
            });
        },
        beforeShowContent: function beforeShowContent() {
            var promise = jQuery.Deferred();
            this.getoptions = new MusicianResourceGetitemsModel();
            var self = this;
            var getdata = self.getoptions.fetch({ wait: true });
            getdata.done(function (response) {
                self.itemfieldoptions = response;
                promise.resolve();
            });
            return promise;
        },
        titleoptionselect: function (e) {
            $("#HymnTitle").val(e.target.innerText);
            $("#results").html("");
        },
        hymantuneoptionselect: function (e) {
            $("#HymanTune").val(e.target.innerText);
            $("#hymntuneresults").html("");
        },
        psalmtitleoptionselect: function (e) {
            $("#PsalmTitle").val(e.target.outerText);
            $("#Psalmresults").html("");
        },
        psalmtuneoptionselect: function (e) {
            $("#PsalmTune").val(e.target.outerText);
            $("#PsalmTuneresults").html("");
        },
        hymntitleautocompletion: function () {
            $("#results").html("");
            var list = '';
            var terms = this.autocompleteMatch($("#HymnTitle").val());
            for (var i = 0; i < terms.length; i++) {
                list += '<li data-action="hymantitleoptionselect" id="optionslists" style="width:auto;min-width:300px;cursor:pointer">' + terms[i] + '</li>';
            }
            $("#results").html('<ul>' + list + '</ul>');
            $("#results").css("border", "1px solid #ccc");
        },
        hymntuneautocompletion: function () {
            $("#hymntuneresults").html("");
            var list = '';
            var terms = this.autocompleteMatch($("#HymanTune").val());
            for (var i = 0; i < terms.length; i++) {
                list += '<li data-action="hymantuneoptionselect"  style="width:auto;min-width:300px;cursor:pointer" class="input-text">' + terms[i] + '</li>';
            }
            $("#hymntuneresults").html('<ul>' + list + '</ul>');
            $("#hymntuneresults").css("border", "1px solid #ccc");
        },
        PsalmTitleautocompletion: function () {
            $("#Psalmresults").html("");
            var list = '';
            var terms = this.autocompleteMatch($("#PsalmTitle").val());
            for (var i = 0; i < terms.length; i++) {
                list += '<li data-action="psalmtitleoptionselect"  class="optionslist" style="width:auto;min-width:300px;cursor:pointer">' + terms[i] + '</li>';
            }
            $("#Psalmresults").html('<ul>' + list + '</ul>');
            $("#Psalmresults").css("border", "1px solid #ccc");
        },
        PsalmTuneautocompletion: function () {
            $("#PsalmTuneresults").html("");
            var list = '';
            var terms = this.autocompleteMatch($("#PsalmTune").val());
            for (var i = 0; i < terms.length; i++) {
                list += '<li data-action="psalmtuneoptionselect"  class="optionslist" style="width:auto;min-width:300px;cursor:pointer">' + terms[i] + '</li>';
            }
            $("#PsalmTuneresults").html('<ul>' + list + '</ul>');
            $("#PsalmTuneresults").css("border", "1px solid #ccc");
        },
        autocompleteMatch: function (input) {
            var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];
            if (input == '') {
                return [];
            }
            var reg = new RegExp(input);
            return search_terms.filter(function (term) {
                if (term.match(reg)) {
                    return term;
                }
            });
        },
        getinfo: function (e) {
            e.stopPropagation();
            var view = new Getinfo({
                id: e.target.id,
                pageHeader: e.target.id,
                application: this.options.container
            });
            view.showInModal();
        },
        resetfields: function () {
            this.bookid = "";
            this.yearchapterid = "";
            $("#HymnNumber").val("");
            $("#HymnTitle").val("");
            $("#HymanTune").val("");
            $("#PsalmNumber").val("");
            $("#PsalmTune").val("");
            $("#PsalmTitle").val("");
            $("#SelectaYear").val("");
            $("#SelectaSunday").val("");
            $("#Book").val("");
            $("#Chapter").val("");
            $("#Verse").val("");
            $("#SelectaMeter").val("");
            $("#HymnSection").val("");
            $("#SelectaPackage").val("");
            $("#Ritess").val("");
            $("#SelectaSunday").html("");
            var list = '<option value="">Select a Sunday</option>';
            $("#SelectaSunday").html('<select>' + list + '</select>');
            $("#Chapter").html("");
            var list3 = '<option value="">Select a Chapter</option>';
            $("#Chapter").html('<select>' + list3 + '</select>');
            $("#Verse").html("");
            var list4 = '<option value="">Select a Verse</option>';
            $("#Verse").html('<select>' + list4 + '</select>');
            jQuery(".lectionarymsg").html("");
            jQuery(".scripturemsg").html("");
        },
        searchResults: function () {
            this.obj["HymnNumberinternalid"] = $("#HymnNumber").val();
            this.obj["HymnTitleinternalid"] = $("#HymnTitle").val();
            this.obj["HymanTuneinternalid"] = $("#HymanTune").val();
            this.obj["PsalmNumberinternalid"] = $("#PsalmNumber").val();
            this.obj["PsalmTitleinternalid"] = $("#PsalmTitle").val();
            this.obj["PsalmTuneinternalid"] = $("#PsalmTune").val();
            this.obj["Ritesinternalid"] = $("#Ritess option:selected")[0].id;
            this.obj["HymnSectioninternalid"] = $("#HymnSection option:selected")[0].id;
            this.obj["SelectaInstrumentType"] = $("#InstrumentTypes option:selected")[0].id;
            var year = $("#SelectaYear option:selected").val();
            var sunday = $("#SelectaSunday option:selected").val();
            var bookvalue = $("#Book option:selected").val();
            var chaptervalue = $("#Chapter option:selected").val();
            var versevalue = $("#Verse option:selected").val();
            this.obj["yearsunday"] = (this.yearchapterid) ? this.yearchapterid : "";
            this.obj["bookchapterverse"] = (this.bookid) ? this.bookid : "";
            this.obj["SelectaMeterinternalid"] = $("#SelectaMeter option:selected")[0].id;
            this.obj["SelectaPackageinternalid"] = $("#SelectaPackage option:selected")[0].id;
            var self = this;
            this.getallitems = new MusicianResourceModel();
            this.getallitems.save({ 'fieldoptions': this.obj }).done(function (res) {
                self.res = res;
                //self.getallitemsFromApi(res,bookvalue,year,chaptervalue,versevalue,sunday);	//commented because we are able to get only 100 items due to item search api limitation.
                if ((bookvalue == null || bookvalue == '') && (year == null || year == '')) {
                    SessionStorageHandler.set("musicianResourcecategotyItems", self.res);
                    window.location.href = "/musiciansresource?display=list";
                }
                else {
                    var isBookError = false;
                    var islectionaryError = false;
                    if (bookvalue != null && bookvalue != '') {
                        if ((bookvalue != null && bookvalue != '' && chaptervalue == "")) {
                            var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                message: "please select chapter and verse.",
                                type: "error",
                                closable: true,
                            });
                            jQuery(".scripturemsg").html(global_view_message.render().$el.html());
                            isBookError = true;
                        }
                        else if ((bookvalue != null && bookvalue != "" && chaptervalue != null && chaptervalue !== "" && versevalue == "")) {
                            var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                message: "please select verse.",
                                type: "error",
                                closable: true,
                            });
                            jQuery(".scripturemsg").html(global_view_message.render().$el.html());
                            isBookError = true;
                        }
                    }
                    if (year != null && year != '') {
                        if ((year != null && year != "") && (sunday == "")) {
                            var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                message: "please select sunday options.",
                                type: "error",
                                closable: true,
                            });
                            jQuery(".lectionarymsg").html(global_view_message.render().$el.html());
                            islectionaryError = true;
                        }
                    }
                    if (!isBookError && !islectionaryError) {
                        SessionStorageHandler.set("musicianResourcecategotyItems", self.res);
                        window.location.href = "/musiciansresource?display=list";
                    }
                }
            });
        },
        getallitemsFromApi: function (res, bookvalue, year, chaptervalue, versevalue, sunday) {
            var self = this;
            var promise = jQuery.Deferred();
            if (res.length > 0) {
                jQuery.get("/api/items?id=" + res.toString(), function (itemsRes) {
                    promise.resolve();
                }).done(function (results) {
                    var listItems = [];
                    for (var k = 0; k < results.items.length; k++) {
                        listItems.push(results.items[k].internalid);
                    }
                    if ((bookvalue == null || bookvalue == '') && (year == null || year == '')) {
                        SessionStorageHandler.set("musicianResourcecategotyItems", listItems);
                        window.location.href = "/musiciansresource?display=list";
                    }
                    else {
                        var isBookError = false;
                        var islectionaryError = false;
                        if (bookvalue != null && bookvalue != '') {
                            if ((bookvalue != null && bookvalue != '' && chaptervalue == "")) {
                                var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                    message: "please select chapter and verse.",
                                    type: "error",
                                    closable: true,
                                });
                                jQuery(".scripturemsg").html(global_view_message.render().$el.html());
                                isBookError = true;
                            }
                            else if ((bookvalue != null && bookvalue != "" && chaptervalue != null && chaptervalue !== "" && versevalue == "")) {
                                var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                    message: "please select verse.",
                                    type: "error",
                                    closable: true,
                                });
                                jQuery(".scripturemsg").html(global_view_message.render().$el.html());
                                isBookError = true;
                            }
                        }
                        if (year != null && year != '') {
                            if ((year != null && year != "") && (sunday == "")) {
                                var global_view_message = new GlobalViews_Message_View_1.GlobalViewsMessageView({
                                    message: "please select sunday options.",
                                    type: "error",
                                    closable: true,
                                });
                                jQuery(".lectionarymsg").html(global_view_message.render().$el.html());
                                islectionaryError = true;
                            }
                        }
                        if (!isBookError && !islectionaryError) {
                            SessionStorageHandler.set("musicianResourcecategotyItems", listItems);
                            window.location.href = "/musiciansresource?display=list";
                        }
                    }
                });
                return promise;
            }
            else {
                SessionStorageHandler.set("musicianResourcecategotyItems", []);
                window.location.href = "/musiciansresource?display=list";
            }
        },
        bookselected: function (e) {
            var self = this;
            if (e.target.value == "") {
                self.bookid = "";
                $("#Verse").html("");
                var list4 = '<option  value="">Select a Verse</option>';
                $("#Verse").html('<select>' + list4 + '</select>');
            }
            var promise = jQuery.Deferred();
            this.getchapter = new MusicianResourceGetitemsModel();
            var data = { "book": e.target.value };
            var getchapter = self.getchapter.save(data, { wait: true });
            getchapter.done(function (response) {
                self.chapters = [];
                response.forEach(function (element) {
                    if (!(self.chapters).includes(element)) {
                        (self.chapters).push((element));
                    }
                });
                var newchapters = [];
                (self.chapters).forEach(function (element) {
                    newchapters.push(parseInt(element));
                });
                newchapters.sort(function (a, b) {
                    return a - b;
                });
                var chapters = [];
                newchapters.forEach(function (element) {
                    chapters.push((element).toString());
                });
                self.chapters = chapters;
                $("#Chapter").html("");
                var list = '<option value="">Chapter</option>';
                var terms = self.chapters;
                for (var i = 0; i < terms.length; i++) {
                    list += '<option data-action="selectchapter" id="chapterselect">' + terms[i] + '</option>';
                }
                $("#Chapter").html('<select>' + list + '</select>');
                promise.resolve();
            });
            return promise;
        },
        chapterselected: function (e) {
            var self = this;
            if (e.target.value == "") {
                self.bookid = "";
            }
            var promise = jQuery.Deferred();
            this.getchapter = new MusicianResourceGetitemsModel();
            var selectedbook = $("#Book option:selected").val();
            var data = { "book": selectedbook, "chapter": e.target.value };
            var getverse = self.getchapter.save(data, { wait: true });
            getverse.done(function (response) {
                self.verse = [];
                response.forEach(function (element) {
                    if (!(self.verse).includes(element)) {
                        (self.verse).push(element);
                    }
                });
                var newverses = [];
                (self.verse).forEach(function (element) {
                    newverses.push(parseInt(element));
                });
                newverses.sort(function (a, b) {
                    return a - b;
                });
                var verses = [];
                newverses.forEach(function (element) {
                    verses.push((element).toString());
                });
                self.verse = verses;
                $("#Verse").html("");
                var list = '<option value="">Verse</option>';
                var terms = self.verse;
                for (var i = 0; i < terms.length; i++) {
                    list += '<option data-action="selectverse" id="verseselect">' + terms[i] + '</option>';
                }
                $("#Verse").html('<select>' + list + '</select>');
                promise.resolve();
            });
            return promise;
        },
        verseselected: function (e) {
            jQuery(".scripturemsg").html("");
            var promise = jQuery.Deferred();
            this.getid = new MusicianResourceGetitemsModel();
            var self = this;
            var selectedbook = $("#Book option:selected").val();
            var selectedchapter = $("#Chapter option:selected").val();
            var info = { "book": selectedbook, "chapter": selectedchapter, "verse": e.target.value };
            var getverse = self.getid.save(info, { wait: true });
            getverse.done(function (response) {
                self.bookid = response;
                promise.resolve();
            });
            return promise;
        },
        yearselected: function (e) {
            var promise = jQuery.Deferred();
            this.getsundays = new MusicianResourceGetitemsModel();
            var self = this;
            if (e.target.value == "") {
                self.yearchapterid = "";
            }
            var data = { "lectionaryYear": e.target.value };
            var getsundays = self.getsundays.save(data, { wait: true });
            getsundays.done(function (response) {
                //   self.sundays = response;
                self.sundays = [];
                response.forEach(function (element) {
                    if (!(self.sundays).includes(element)) {
                        (self.sundays).push(element);
                    }
                });
                $("#SelectaSunday").html("");
                var list = '<option value="">Select a Sunday</option>';
                var days = self.sundays;
                for (var i = 0; i < days.length; i++) {
                    list += '<option>' + days[i] + '</option>';
                }
                $("#SelectaSunday").html('<select>' + list + '</select>');
                promise.resolve();
            });
            return promise;
        },
        sundayselected: function (e) {
            jQuery(".lectionarymsg").html("");
            var promise = jQuery.Deferred();
            this.getyearsunday = new MusicianResourceGetitemsModel();
            var self = this;
            var selectedyear = $("#SelectaYear option:selected").val();
            var info = { "lectionaryYear": selectedyear, "lectionarysunday": e.target.value };
            var getyearsundays = self.getyearsunday.save(info, { wait: true });
            getyearsundays.done(function (response) {
                self.yearchapterid = response;
                promise.resolve();
            });
            return promise;
        },
        getContext: function () {
            var _this = this;
            _.each(this.itemfieldoptions['customlist_appf_rites'], function (elemrnt) {
                elemrnt["id"] = parseInt(elemrnt["id"]);
            });
            _.each(this.itemfieldoptions['customlist_scripture_reference_book'], function (elemrnt) {
                elemrnt["id"] = parseInt(elemrnt["id"]);
            });
            _.each(this.itemfieldoptions['customlist_appf_instrument_type'], function (elemrnt) {
                elemrnt["id"] = parseInt(elemrnt["id"]);
            });
            this.itemfieldoptions['customlist_appf_rites'] = _.sortBy(this.itemfieldoptions['customlist_appf_rites'], 'id');
            this.itemfieldoptions['customlist_scripture_reference_book'] = _.sortBy(this.itemfieldoptions['customlist_scripture_reference_book'], 'id');
            this.itemfieldoptions['customlist_appf_instrument_type'] = _.sortBy(this.itemfieldoptions['customlist_appf_instrument_type'], 'id');
            var rite = [];
            var riteslist = this.itemfieldoptions['customlist_appf_rites'];
            riteslist.forEach(function (element) {
                rite.push(element);
            });
            this.rites = [];
            rite.forEach(function (element) {
                if (!(_this.rites).includes(element)) {
                    (_this.rites).push((element));
                }
            });
            var meter = [];
            var meterlist = this.itemfieldoptions['customlist_meter'];
            meterlist.forEach(function (element) {
                (meter).push((element));
            });
            this.meterlists = [];
            meter.forEach(function (element) {
                if (!(_this.meterlists).includes(element)) {
                    (_this.meterlists).push((element));
                }
            });
            var packages = [];
            var packagelist = this.itemfieldoptions['customlist_packages'];
            packagelist.forEach(function (element) {
                (packages).push((element));
            });
            this.packagelists = [];
            packages.forEach(function (element) {
                if (!(_this.packagelists).includes(element)) {
                    (_this.packagelists).push((element));
                }
            });
            var book = [];
            var booklist = this.itemfieldoptions['customlist_scripture_reference_book'];
            booklist.forEach(function (element) {
                (book).push((element));
            });
            this.books = [];
            book.forEach(function (element) {
                if (!(_this.books).includes(element)) {
                    (_this.books).push((element));
                }
            });
            var hymn = [];
            var hymnlist = this.itemfieldoptions['customlist_hymn_section'];
            hymnlist.forEach(function (element) {
                (hymn).push((element));
            });
            this.hymnlists = [];
            hymn.forEach(function (element) {
                if (!(_this.hymnlists).includes(element)) {
                    (_this.hymnlists).push((element));
                }
            });
            var year = [];
            var yearlist = this.itemfieldoptions['customlist_sunday_year'];
            yearlist.forEach(function (element) {
                (year).push((element));
            });
            this.yearlists = [];
            year.forEach(function (element) {
                if (!(_this.yearlists).includes(element)) {
                    (_this.yearlists).push((element));
                }
            });
            var InstrumentTypes = [];
            var InstrumentTypeslist = this.itemfieldoptions['customlist_appf_instrument_type'];
            InstrumentTypeslist.forEach(function (element) {
                InstrumentTypes.push(element);
            });
            this.InstrumentTypes = [];
            InstrumentTypes.forEach(function (element) {
                if (!(_this.InstrumentTypes).includes(element)) {
                    (_this.InstrumentTypes).push((element));
                }
            });
            console.log("test");
            return {
                customlist_appf_rites: this.rites,
                customlist_hymn_section: this.hymnlists,
                customlist_meter: this.meterlists,
                customlist_packages: this.packagelists,
                customlist_sunday_year: this.yearlists,
                customlist_scripture_reference_book: this.books,
                customlist_appf_instrument_type: this.InstrumentTypes,
                musician_resource_form_title: Configuration_1.Configuration.get("Musicianresourcepage.headersubtext") || ''
            };
        }
    });
    return MusicResourceLandingPage;
});

//# sourceMappingURL=MusicianResource.View.js.map
