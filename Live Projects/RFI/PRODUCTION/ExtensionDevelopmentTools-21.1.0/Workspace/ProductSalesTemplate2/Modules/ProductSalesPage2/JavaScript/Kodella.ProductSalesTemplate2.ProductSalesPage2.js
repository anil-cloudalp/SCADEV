
define(
	'Kodella.ProductSalesTemplate2.ProductSalesPage2'
	, [
		'Kodella.ProductSalesTemplate2.ProductSalesPage2.View'
	]
	, function (
		ProductSalesPage2View
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(application) {
				ProductSalesPage2View.prototype.application = application;

				application.getComponent('CMS').registerCustomContentType({
					id: 'cct_product_sales_page_2',
					view: ProductSalesPage2View
				});
			}
		};
	});
