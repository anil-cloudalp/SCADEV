/*
© 2017 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
*/

define(
	'TCI.PCP_PLPCustomization.ProductViews.Option.ViewExt'
	,	[
		'ProductViews.Option.View'
		, 'underscore'
		,	'Backbone'
	]
	,	function (
		ProductViewsOptionView	
		, _
		,	Backbone
	)
	{
		'use strict';

        _.extend(ProductViewsOptionView.prototype, {

            modifyDefaultSelectLabel: function () {
                var refText1 = this.model.get("cartOptionId") === "custcol_reference_text_1";
                var refText2 = this.model.get("cartOptionId") === "custcol_reference_text_2";
                var refText3 = this.model.get("cartOptionId") === "custcol_reference_text_3";
                this.showModifiedDefaultSelectLabel = false;
                this.modifiedDefaultSelectLabel;
                if (refText1) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 1';
                }
                if (refText2) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 2';
                }
                if (refText3) {
                    this.showModifiedDefaultSelectLabel = true;
                    this.modifiedDefaultSelectLabel = 'Select Text 3';
                }
            },
            getContext: _.wrap(ProductViewsOptionView.prototype.getContext, function (fn) {
                var context = fn.apply(this, _.toArray(arguments).slice(1));
                this.modifyDefaultSelectLabel();
                context.showModifiedDefaultSelectLabel = this.showModifiedDefaultSelectLabel;
                context.modifiedDefaultSelectLabel = this.modifiedDefaultSelectLabel;
              
                return context;
            })

        })

	});

