define(
	'Acme.CustomNewsLetter.CustomNewsLetter'
,   [
		 'Acme.CustomNewsLetter.CustomNewsLetter.View',
	     'Footer.View',
	     'Acme.CustomNewsLetter.CustomNewsLetter.Model'
		
	]
,   function (
		CustomNewsLetterView,
		FooterView,
		CustomNewsLetterModel
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{

            FooterView.addChildViews &&
                FooterView.addChildViews({
                    CustomFooterContent: function wrapperFunction() {
                        return function() {
                            return new CustomNewsLetterView({
								model: new CustomNewsLetterModel()
                            });
                        };
                    }
                });
		}
	};
});
