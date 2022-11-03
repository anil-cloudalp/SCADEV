// @module Acme.CustomNewsLetter.CustomNewsLetter
define('Acme.CustomNewsLetter.CustomNewsLetter.View'
,	[
	'acme_customnewsletter_customnewsletter.tpl'
	,   'Acme.CustomNewsLetter.CustomNewsLetter.SS2Model'
	,   'Acme.CustomNewsLetter.CustomNewsLetter.Model'
	,   'SC.Configuration'
    ,   'Backbone.FormView'
    ,	'Backbone.CompositeView'
    ,	'GlobalViews.Message.View'
    ,	'Backbone'
    ,	'underscore'
    ,	'jQuery'
    ,	'Utils'
    ]
, function (
	acme_customnewsletter_customnewsletter_tpl
	,	CustomNewsLetterSS2Model
	,	CustomNewsLetterModel
	,   Configuration
    ,	BackboneFormView
    ,	BackboneCompositeView
    ,	GlobalViewsMessageView
    ,	Backbone
    , _
)
{
    'use strict';

	// @class Acme.CustomNewsLetter.CustomNewsLetter.View @extends Backbone.View
	return Backbone.View.extend({

		 template: acme_customnewsletter_customnewsletter_tpl,

		 initialize: function initialize(options) {
            // @property {Newsletter.View.State} state
            this.state = {
                code: '',
                message: '',
                messageType: ''
            };

            this.application = options.application;
            BackboneCompositeView.add(this);
            BackboneFormView.add(this);
		 }
		 
	  , events: {
            'submit form': 'newsletterSubscribe'
		},
	  
	    bindings: {
            '[name="email"]': 'email'
        },

	   // @property {Object} feedback Keeps the text and kind of message we need to show as feedback
        feedback: {
            OK: {
                type: 'success',
                message: _('Thank you! Welcome to our newsletter').translate()
            },
            ERR_USER_STATUS_ALREADY_SUBSCRIBED: {
                type: 'warning',
                message: _('Sorry, the specified email is already subscribed.').translate()
            },
            ERR_USER_STATUS_DISABLED: {
                type: 'error',
                message: _('Sorry, the specified email cannot be subscribed.').translate()
            },
            ERROR: {
                type: 'error',
                message: _('Sorry, subscription cannot be done. Try again later.').translate()
            }
        },
        // @property {Object} bindings Binds email input field with model namesake property
      
		newsletterSubscribe: function newsletterSubscribe(e) {
            e.preventDefault();
            const self = this;
            const promise = this.saveForm(e);
            
            if (promise) {
                promise
                    .fail(function(jqXhr) {
                        jqXhr.preventDefault = true;
                        const errorCode =
                            jqXhr &&
                            jqXhr.responseJSON &&
                            jqXhr.responseJSON.errorCode &&
                            self.feedback[jqXhr.responseJSON.errorCode]
                                ? jqXhr.responseJSON.errorCode
                                : 'ERROR';

                        self.state.code = errorCode;
                        self.state.message = self.feedback[errorCode].message;
                        self.state.messageType = self.feedback[errorCode].type;
                    })
                    .done(function() {
                        self.state.code = self.model.get('code');
                        self.state.message = self.feedback[self.model.get('code')].message;
                        self.state.messageType = self.feedback[self.model.get('code')].type;

                        self.model.set('email', '');
                    })
                    .always(_.bind(self.render, self));
            }
		},
		
        childViews: {
            GlobalMessageFeedback: function() {
                return new GlobalViewsMessageView({
                    message: this.state.message,
                    type: this.state.messageType,
                    closable: true
                });
            }
		}
		
		//@method getContext @return Acme.CustomNewsLetter.CustomNewsLetter.View.Context
	, getContext: function getContext() {
            // @class Newsletter.View.Context
            return {
                // @property {Boolean} isFeedback
                isFeedback: !!this.state.code,
                // @property {Newsletter.Model} model
                model: this.model
            };
        }
	});
});
