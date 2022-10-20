

// Subscriptions.ServiceController.js
// ----------------

define(
	'Subscriptions.ServiceController'
,	[
		'ServiceController'
	,	'Subscriptions.Model'
	]
,	function(
		ServiceController
	,	SubscriptionsModel
	)
	{
		'use strict';

		// @class Subscriptions.ServiceController Manage placed orders requests
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'Subscriptions.ServiceController'

		,	options: function() {
				return {
					common: {
						requireLogin: true
					}
				}
			}

			
		,	post: function ()
			{
				return SubscriptionsModel.get(this.data);
				
			}
		});
	}
);