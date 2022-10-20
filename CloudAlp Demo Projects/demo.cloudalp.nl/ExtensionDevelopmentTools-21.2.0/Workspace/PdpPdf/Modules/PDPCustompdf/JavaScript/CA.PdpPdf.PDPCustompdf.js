
define(
	'CA.PdpPdf.PDPCustompdf'
,   [
	'CA.PdpPdf.PDPCustompdf.View',
	"ProductDetails.Full.View",
  	"Handlebars",
  	"underscore",
	"Profile.Model",
	"CA.PdpPdf.PDPCustompdf.Model"
	]
,   function (
	PDPCustompdfView,
	  PDPFull,
		Handlebars,
		_,
	  ProfileModel,
	  CAPdpPdfPDPCustompdfModel	
	)
{
	'use strict';

	return  {
	mountToApp: function mountToApp (container)
	{
			
      /** @type {LayoutComponent} */
      var PDP = container.getComponent("PDP");

      if (PDP) {
        Handlebars.registerHelper("pdfsplit", function (name) {
          name.substr(0, name.indexOf(" "));
          var test = name.substr(name.indexOf(" ") + 1);
          return test;
        });
        PDP.on("beforeShowContent", function () {
          PDPFull.prototype.getContext = _.wrap(
            PDPFull.prototype.getContext,
            function (fn) {
              var context = fn.apply(this, _.toArray(arguments).slice(1));
			var ItemInfo = PDP.getItemInfo();
				console.log(ItemInfo.item.itemid);
              var self = this;
              var pdfName = "";
				var idItem = ItemInfo.item.internalid;
				var PDPCustompdfModel = new CAPdpPdfPDPCustompdfModel();
				if (ItemInfo && ItemInfo.item.itemid && idItem) {
					PDPCustompdfModel.save({ id: `${idItem}`, sku:ItemInfo.item.itemid}).done((res) => {
						console.log("res", res);
						context.pdfsExtras = res.lengthExtras;
				})
				}
				
              return context;
            }
          );
        });
      }


		}
	};
});




