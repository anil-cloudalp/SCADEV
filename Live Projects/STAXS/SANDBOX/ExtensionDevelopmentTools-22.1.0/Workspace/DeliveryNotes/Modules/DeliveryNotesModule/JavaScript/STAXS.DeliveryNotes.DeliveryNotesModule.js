
define(
	'STAXS.DeliveryNotes.DeliveryNotesModule'
,   [
		'STAXS.DeliveryNotes.DeliveryNotesModule.View'
	]
,   function (
		DeliveryNotesModuleView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
				var layout = container.getComponent('Layout');

				var checkout = container.getComponent('Checkout');

//=================>if the checkout steps is OPC

				checkout.addModuleToStep(
				{
					step_url: 'opc' // the place you want to add it to, think of this like an ID. You can log the step or group info to the console to find the one you're looking for
				, module: {
					id: 'DeliveryView' // the ID you want to give it
					, index:11 // its place in the order of modules (if it matches an existing one, it is pushed down)
					, classname: 'STAXS.DeliveryNotes.DeliveryNotesModule.View' // the name of the thing you want to render (ie the value in the view's define statement)
					}
				});
			
				checkout.addModuleToStep(
				{
					step_url: 'review'
				, module: {
					id: 'DeliveryView'
					, index:5
					, classname: 'STAXS.DeliveryNotes.DeliveryNotesModule.View'
					}
				});


//==================> if the checkout steps is standard 

				checkout.getCheckoutFlow() .then(function(flow) { 
					if(flow == "Standard"){
	
						checkout.addModuleToStep(
							{
							  step_url: 'shipping/address'
							, module: {
								id: 'shipaddress'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
	
						checkout.addModuleToStep(
							{
							  step_url: 'billing'
							, module: {
								id: 'blng'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
	
						checkout.addModuleToStep(
							{
							  step_url: 'review'
							, module: {
								id: 'review'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
						}
					});

//===============> if the checkout steps is Billing First

				checkout.getCheckoutFlow() .then(function(flow) { 
					if(flow == "Billing First"){
	
						checkout.addModuleToStep(
							{
							  step_url: 'billing/address'
							, module: {
								id: 'shipaddress'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
	
						checkout.addModuleToStep(
							{
							  step_url: 'shipping/address'
							, module: {
								id: 'blng'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});

						checkout.addModuleToStep(
							{
							  step_url: 'billing'
							, module: {
								id: 'blng'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
	
						checkout.addModuleToStep(
							{
							  step_url: 'review'
							, module: {
								id: 'review'
							  , index:0	
							  , classname:'STAXS.DeliveryNotes.DeliveryNotesModule.View'
							  , options: {container: '#wizard-step-content'}
							  } 
							});
						}
					});	

				
			}
	};
});
