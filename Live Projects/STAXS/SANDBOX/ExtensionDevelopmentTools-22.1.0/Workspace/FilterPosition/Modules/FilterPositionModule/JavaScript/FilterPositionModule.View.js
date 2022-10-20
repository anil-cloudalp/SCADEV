define('Fp.FilterPosition.FilterPositionModule.View'
,	[
	'fp_filterposition_filterpositionmodule.tpl'
	

	
	,	'Backbone'
    ]
, function (
	fp_filterposition_filterpositionmodule_tpl
	

	
	,	Backbone
)
{
    'use strict';

	return Backbone.View.extend({

		template: fp_filterposition_filterpositionmodule_tpl

	,	initialize: function (options) {

		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

	,	getContext: function getContext()
		{
			return {

			};
		}
	});
});
