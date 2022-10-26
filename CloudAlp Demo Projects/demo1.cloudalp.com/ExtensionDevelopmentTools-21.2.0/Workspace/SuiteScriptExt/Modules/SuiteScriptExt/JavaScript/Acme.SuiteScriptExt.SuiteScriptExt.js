define(
	'Acme.SuiteScriptExt.SuiteScriptExt'
,   [
		'Acme.SuiteScriptExt.SuiteScriptExt.View',
		'Acme.SuiteScriptExt.SuiteScriptExt.Model',
		'Case.Create.View',
	    'Case.Model',
	"PageTypeFormView",
	"Backbone",
		"Utils"
	]
	, function (
	
		SuiteScriptExtView,
		SuiteScriptExtModel,
		CaseCreateView,
	    CaseModel,
		PageTypeFormView,
		Backbone,
		Utils
	)
{
	'use strict';

	
	return {

		mountToApp: function mountToApp(container) {
			/** @type {LayoutComponent} */

			var layout = container.getComponent('Layout');

			_.extend(CaseCreateView.CaseCreateView.prototype, {
				saveForm: function saveForm(e) {
					e.preventDefault();
					var Model = new SuiteScriptExtModel(this.formModel.attributes);
					var title = $("#title").val();
					var Message = $("#message").val();
					if (title && Message) {
						Model.save().done((res) => {
						if (res.caseNumber) {
							Backbone.history.navigate('cases', { trigger: true });
						}
					  });
					}
				},
			})


		   CaseCreateView.CaseCreateView.prototype.getContext = _.wrap(CaseCreateView.CaseCreateView.prototype.getContext, function getContext(fn) {
				var ret = fn.apply(this, _.toArray(arguments).slice(1));
			    ret.pageHeader = "test";
			    return ret;
			})

			CaseCreateView.CaseCreateView.prototype.SubmitCaseForm = function SubmitCaseForm() {
				var Model = new SuiteScriptExtModel(this.formModel.attributes);
				Model.save();
			}
		}
	};
});
