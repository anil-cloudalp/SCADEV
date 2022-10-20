
define(
	'Acme.SearchForAddressInCheckout.SearchForAddressInCheckout'
,   [
		'Acme.SearchForAddressInCheckout.OrderWizardModuleSearchForAddress.View'
    ,   'underscore'
    ,   'Profile.Model'
    ,   'OrderWizard.Module.CartSummary'
    ,   'Utils'
    ,   'OrderWizard.Module.SubmitButton'
    ,   'OrderWizard.Module.CartItems.PickupInStore'
    ,   'OrderWizard.Module.PromocodeForm'
    ,   'OrderWizard.Module.CartItems.Ship'
    ,   'OrderWizard.Module.NonShippableItems'
    ,   'OrderWizard.Step'
	]
,   function (
		SearchForAddressInCheckoutView
    ,   _  
    ,   ProfileModel
    ,   OrderWizardModuleCartSummary
    ,   Utils
    ,   OrderWizardModuleSubmitButton
    ,   OrderWizardModuleCartItemsPickupInStore
    ,   OrderWizardModulePromocodeForm
    ,   OrderWizardModuleCartItemsShip
    ,   OrderWizardModuleNonShippableItems
    ,   OrderWizardStep
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
			
			/** @type {checkoutComponent} */
			var checkout = container.getComponent('Checkout');
			// const cartSummaryOptions = {
            //     exclude_on_skip_step: true,
            //     allow_remove_promocode: true,
            //     container: '#wizard-step-content-right'
            // };
            // const cartItemsOptionsRight = {
            //     container: '#wizard-step-content-right',
            //     hideHeaders: true,
            //     showMobile: true,
            //     exclude_on_skip_step: true,
            //     showOpenedAccordion: Utils.isTabletDevice() || Utils.isDesktopDevice() || false
            // };  
            // const cartItemsNonShippableOptionsRight = _.extend(
            //     {
            //         title: Utils.translate('Other Items'),
            //         show_mobile: true,
            //         show_table_header: false,
            //         show_edit_cart_button: true
            //     },
            
            //     cartItemsOptionsRight
            // );
			checkout.addStepsGroup({group: {
                index: 0, 
                name: 'Search for Address', 
                url: 'paying' 
            }})

            .done(function () {
                checkout.addStep({step: {
                    group_name: 'Search for Address', 
                    index: 0, // suggested match the step group index if you're adding them at the same time
                    isActive: function () {}, // yes, an empty function
                    name: 'Search for Address', 
                    showStep: function () {return true}, // can obviously be more complicated than this
                    url: 'search-for-address' 
                    // modules:[
                    //     [OrderWizardModuleCartSummary, cartSummaryOptions],
                    //     [
                    //         OrderWizardModuleSubmitButton,
                    //         {
                    //             container: '#wizard-step-content-right',
                    //             showWrapper: true,
                    //             wrapperClass: 'order-wizard-submitbutton-container',
                    //             is_below_summary: true
                    //         }
                    //     ],
                    //     [OrderWizardModulePromocodeForm, cartItemsOptionsRight],
                    //     [
                    //         OrderWizardModuleCartItemsPickupInStore,
                    //         _.extend(
                    //             {
                    //                 show_opened_accordion: false,
                    //                 show_edit_cart_button: true,
                    //                 show_headers: false,
                    //                 show_mobile: true
                    //             },
                    //             cartItemsOptionsRight
                    //         )
                    //     ],
                    //     [
                    //         OrderWizardModuleCartItemsShip,
                    //         _.extend(
                    //             {
                    //                 show_opened_accordion: false,
                    //                 show_edit_cart_button: true,
                    //                 show_headers: false,
                    //                 show_mobile: true
                    //             },
                    //             cartItemsOptionsRight
                    //         )
                    //     ],
                    //     [OrderWizardModuleNonShippableItems, cartItemsNonShippableOptionsRight]
                    // ],
                    
                }})

                .done(function () {
                    checkout.addModuleToStep({
                        step_url: 'search-for-address', 
                        module: { 
                            id: 'searchForAddress', 
                            index: 0, 
                            classname: 'Acme.SearchForAddressInCheckout.OrderWizardModuleSearchForAddress.View', 
                            options: {container: '#wizard-step-content',
                            isurl:'search-for-address'
                           
                        }
                        }
                        
                    })
                });
            });
            _.extend(OrderWizardStep.prototype,{
                initialize:_.wrap(OrderWizardStep.prototype.initialize, function initialize(fn){
                    fn.apply(this, _.toArray(arguments).slice(1));
                }),
                getContext: _.wrap(OrderWizardStep.prototype.getContext, function getContext(fn){
                    var ret= fn.apply(this, _.toArray(arguments).slice(1));
                       var object=this.step_url;
                       ret.onlySteps= false;
                       if(object==='search-for-address'){
                        ret.onlySteps= true;  
                       }
                       return ret;
                        
                })
            })



		}
	};
});
