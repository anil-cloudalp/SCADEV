
define(
	'RudraCustomization.MyAccountCustomization.MyAccountCustomization'
,   [
		'RudraCustomization.MyAccountCustomization.MyAccountCustomization.View'
	,	'Overview.Home.View'
	,	'RudraCustomization.MyAccountCustomization.Reports.View'
	,   'RudraCustomization.MyAccountCustomization.MyAccountCustomization.Model'
	,	'Configuration'
	,	'MyAccountMenu'
	,	'MenuTree.View'
	,	'Header.Menu.MyAccount.View'
	,	'Profile.Model'
	,	'Backbone.View'
	,	'MenuTree.Node.View'
	,	'Session'
	]
,   function (
		MyAccountCustomizationView
	,	OverviewHomeView
	,	ReportsView
	,	MyAccountCustomizationModel
	,	Configuration
	,	MyAccountMenu
	,	MenuTreeView
	,	HeaderMenuMyAccountView
	,	ProfileModel
	,	BackboneView
	,	MenuTreeNodeView
	,	Session

	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */

			

			_.extend(MenuTreeNodeView.prototype,{
				events:_.extend({},MenuTreeNodeView.prototype.events,{
					'click [data-id="invt-detail"]': 'navigateInvt',
					'click [data-id="credit_application"]': 'navigateCreditApp'
				}),
				navigateInvt:function(){
					var url = Session.get('touchpoints.home') + '/inventory-availability';
					window.open(url);
				},
				navigateCreditApp:function(){
					var url = Session.get('touchpoints.home') + '/Credit Application/Mia Telecomms Pty Ltd Credit Application.pdf';
					window.open(url);
				}
			})
			


			/**
			* @description for overview changes 
			*/
			_.extend(OverviewHomeView.prototype,{
				initialize:_.wrap(OverviewHomeView.prototype.initialize, function initialize(fn){
					fn.apply(this, _.toArray(arguments).slice(1));
					
				}),
				geContext:_.wrap(OverviewHomeView.prototype.geContext, function getContext(fn){
					var context = fn.apply(this, _.toArray(arguments).slice(1));
					console.log(this);
					return context;
				}),
				beforeShowContent: function beforeShowContent() {
					const promise = jQuery.Deferred();
					var self=this;
			
					// get latest orders
					this.collection
						.fetch({
							data: {
								page: 1,
								order: 1,
								sort: 'trandate,internalid',
								results_per_page: Configuration.get('overview.homeRecentOrdersQuantity', 3)
							},
							error: function(model, jqXhr) {
								// this will stop the ErrorManagment module to process this error
								// as we are taking care of it
								jqXhr.preventDefault = true;
							}
						})
						.always(function() {
			
								var salesOrderModel = new MyAccountCustomizationModel();
			
								var salesOrderPromise = salesOrderModel.fetch();
			
								salesOrderPromise.then(function(data) {
									
								  if(_.has(data, 'salesOrder'))
									self.salesOrder = data.salesOrder;
									
									promise.resolve();
								});
			
						});
			
					return promise;
				},
				childViews: _.extend({}, OverviewHomeView.prototype.childViews, {

					'Overview.Reports': function() {
						return new ReportsView({
						  application : this.application,
						  salesOrder  : this.salesOrder || []
			
						});
					}
				})
			})
			

		}
	};
});
