
define(
	'Acme.html2pdf.html2pdf'
,   [
	'Acme.html2pdf.html2pdf.View'
	, 'Acme.html2pdf.html2pdf.Model'

	]
	, function (
		html2pdfView,
		Acmehtml2pdfhtml2pdfModel
	)
{
	'use strict';
		
	return  {
		mountToApp: function mountToApp (container)
		{

			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			var text = "example text for generate pdf file example text for generate pdf file example text for generate pdf file example text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for gefileexample text for generate pdf fileexample text for generate pdf file hmnnby example text for generate pdf file example text for generate pdf file example text for generate pdf file example text for generate pdf fileexample text foexample text for generate pdf file example text for generate pdf file example text for generate pdf file example text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for gefileexample text for generate pdf fileexample text for generate pdf file hmnnbyexample text for generate pdf file example text for generate pdf file example text for generate pdf file example text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample text for generate pdf fileexample te";


			var opt = {
								margin:       [30, 20, 10, 20], //top, left, buttom, right
								filename:    'testPdf' + '.pdf',
								image:        { type: 'jpeg', quality: 0.98 },
								html2canvas:  { dpi: 192, scale: 2, letterRendering: true},
								jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait'},
								pageBreak:    { mode: 'css', after: '.break-page' }
                      };

			html2pdfView().set(opt).from(text).toPdf().output('datauristring').then(function (pdfAsString) {
						pdfAsString = pdfAsString.substr(pdfAsString.indexOf('base64,') + 7, pdfAsString.length - pdfAsString.indexOf('base64,') + 7);
						const linkSource = `data:application/pdf;base64,${pdfAsString}`;
						const downloadLink = document.createElement("a");
						const fileName = "testPdf.pdf";
						downloadLink.href = linkSource;
						downloadLink.download = fileName;
						downloadLink.click();
			});
		}
	};
});
