// @module Kodella.KDTermsOfUseModal.KDTermsOfUseModal
define('Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View'
,	[
	'kodella_kdtermsofusemodal_kdtermsofusemodal.tpl'
	
	,	'Kodella.KDTermsOfUseModal.KDTermsOfUseModal.Model'
	
	,	'Backbone'
	
	,  "Quote.Details.View"

    ,  "Overview.Home.View"
	
	,  "Overview.Profile.View"

    ,  "Overview.Shipping.View"
	
	,	"Overview.Payment.View"
    ]
, function (
	kodella_kdtermsofusemodal_kdtermsofusemodal_tpl
	
	,	KDTermsOfUseModalModel
	
	,	Backbone
	
	,  QuoteDetailsView

    ,  OverviewHomeView
	
	,  OverviewProfileView
    
    ,  OverviewShippingView
	
	,  OverviewPaymentView
)
{
    'use strict';

	var customerId;
	var recordType;
	QuoteDetailsView.prototype.getContext =  _.wrap(QuoteDetailsView.prototype.getContext, function (fn){
	
		var context = fn.apply(this, _.toArray(arguments).slice(1));

		if(this.application.role == "sales"){
			context.toshowquotetosalesorder = false;
		}else{
			context.toshowquotetosalesorder = true;
		}
		return context;
	});
		
	OverviewHomeView.prototype.getContext = _.wrap(OverviewHomeView.prototype.getContext, function (fn){
		
        var context = fn.apply(this, _.toArray(arguments).slice(1));
		
        if(this.application.role == "sales"){
            context.toshowPaymentmethod = false;
        }else{
            context.toshowPaymentmethod = true;
        }
        return context;
    });	
	
	OverviewProfileView.prototype.getContext = _.wrap(OverviewProfileView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showProfileInfo = false;
        }else{
            context.showProfileInfo = true;
        }
        return context;
    }); 

    OverviewShippingView.prototype.getContext = _.wrap(OverviewShippingView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showoverviewShipping = false;
        }else{
            context.showoverviewShipping = true;
        }
        return context;
    });
	
	OverviewPaymentView.prototype.getContext = _.wrap(OverviewPaymentView.prototype.getContext, function (fn){
        var context = fn.apply(this, _.toArray(arguments).slice(1));
        if(this.parentView.options.application.role != "fullaccess"){
            context.showoverviewPayment = false;
        }else{
            context.showoverviewPayment = true;
        }
        return context;
    });

	// @class Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdtermsofusemodal_kdtermsofusemodal_tpl

	,	initialize: function (options) {
			this.model = new KDTermsOfUseModalModel();
			var self = this;
			var userProfile = options.container.getComponent('UserProfile');
			userProfile.getUserProfile().then(function(profile) {
				console.log(profile);
				if (profile.type === "COMPANY") {
					self.model.fetch({data: { company: profile.internalid, email: profile.email }}).done(function(result) {
						customerId = result.contactId;
						recordType = result.type;
						var hasAccepted = result.hasAccepted;
						if (!hasAccepted) {
							self.notAccepted = true;
							self.render();
							$("#kdtermsofusemodal-modal").css("display", "block");
							$("#kdtermsofusemodal-modal").modal({ backdrop: "static", keyboard: false });
						}
					});
				}
				else {
					recordType = "customer";
					customerId = profile.internalid;
					var notAccepted = true;
					profile.customfields.forEach(function(field) {
						if (field.id === "custentity_kd_accepted_terms" && field.value === true) notAccepted = false;
					});
					if (notAccepted) {
						self.notAccepted = notAccepted;
						self.render();
						$("#kdtermsofusemodal-modal").css("display", "block");
						$("#kdtermsofusemodal-modal").modal({ backdrop: "static", keyboard: false });
					}
				}
			});
		}

	,	events: {
			'submit #kdtermsofusemodal-form':'acceptTerms'
		}

	,	acceptTerms: function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (customerId) {
				var data = { customerId: customerId, type: recordType };
				this.model.save(data).done(function(response) {
					//console.log(response);
					$("#kdtermsofusemodal-modal").modal('hide');
				});
			}
	}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDTermsOfUseModal.KDTermsOfUseModal.View.Context
			return {
				notAccepted: this.notAccepted
			};
		}
	});
});
