
define(
	'Acme.ScisCartCustomizations.ScisCartCustomizations', []
,   function ()
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			var cart = container.getComponent('Cart');

			cart.on('beforeAddLine', function (data) {
				console.log("before add line",data);
			})

			cart.on('afterAddLine', function (res) {
				console.log("after Add Line", res.line.item.internalid);
							if ((res.line.item.internalid) == "5480") {
									cart.addLine({
									line: {
										quantity: 1,
										item: {
										internalid: "5483"
										}
									}
									}).fail(function () {
										console.log("item not added");
									}).done(function () {
										cart.addGlobalDiscount({
											id: '6938'
										}).done(function () {
											console.log("discount item added to Cart");
										}).fail(function (error) {
											console.log("error", JSON.stringify(error));
										});
									})
							}
						})
					}
				};
			});
