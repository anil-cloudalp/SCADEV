define('Acme.whislistexport.whislistexport.View'
,	[
	'acme_whislistexport_whislistexport.tpl'
	,	'Acme.whislistexport.whislistexport.SS2Model'
	, 'Backbone'
	,  "Backbone.Model"
	, "ProductList.Lists.View"
	, "Utils"
	, "Profile.Model"
    ]
, function (
	acme_whislistexport_whislistexport_tpl
	,	whislistexportSS2Model
	,   Backbone
	,   BackboneModel
	,   ProductListListsView
	,   Utils
	,   ProfileModel
)
{
	'use strict';


		ProductListListsView.prototype.getContext = _.wrap(ProductListListsView.prototype.getContext, function(fn){
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            if((this.application.role == "purchasing") || (this.application.role == "sales")){
                context.Showexportbutton = true;
            }else{
                context.Showexportbutton = false;
			}
             return context;
		});	
	
	var obj = ProductListListsView.prototype.events;
	obj['click [data-action="export-whislist"]'] = 'ExportWhislistAsmail',			
		ProductListListsView.prototype.events = obj;
	_.extend(ProductListListsView.prototype, {
			ExportWhislistAsmail: _.wrap(ProductListListsView.prototype.ExportWhislistAsmail, function ExportWhislistAsmail(fn) {
				var promise = jQuery.Deferred();
				const profile = ProfileModel.getInstance();
				var serviceUrl = Utils.getAbsoluteUrl('services/ProductList.Service.ss?sendemail=T&'+ 'email='+ profile.get("email"));
				new BackboneModel().fetch({ url: serviceUrl }).then(function (res) {					
					console.log("res");
					var product_list_results = res;
					
	var excelData = `<?xml version="1.0"?>
	<?mso-application progid="Excel.Sheet"?>
	<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:x="urn:schemas-microsoft-com:office:excel"
	xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
	xmlns:html="http://www.w3.org/TR/REC-html40">`;
					
		excelData += `<Styles><Style ss:ID="s71">
					   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
					    <Font ss:Color="#FFFFFF" ss:Bold="1"/>
					    <Interior ss:Color="#073674" ss:Pattern="Solid"/>
					  </Style>
					  <Style ss:ID="s72">
					    <Font ss:Color="#000000" ss:Bold="1"/>
					  </Style>
					  <Style ss:ID="s73">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s74">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
					  </Style>
					  <Style ss:ID="s75">
					   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
					  </Style>
					  <Style ss:ID="s76">
					   <Alignment ss:Horizontal="Left" ss:Vertical="Top" ss:WrapText="1"/>
					   <Font ss:Size="20" ss:Color="#FFFFFF"/>
					   <Interior ss:Color="#DD7E43" ss:Pattern="Solid"/>
					  </Style>
					 </Styles>`;
		excelData += '<Worksheet ss:Name="Wishlist">';
		excelData += '<Table><Column ss:AutoFitWidth="0" ss:Width="150" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="300" ss:StyleID="s73"/><Column ss:AutoFitWidth="0" ss:Width="70"  ss:StyleID="s74"/><Column ss:AutoFitWidth="0" ss:Width="100"/>';
		_.each(product_list_results, function (categoriesWithItem) {
			var catName = categoriesWithItem;
			excelData += '<Row><Cell ss:MergeAcross="2" ss:StyleID="s71"><Data ss:Type="String">' + catName.name + '</Data></Cell></Row>';
			if (catName.items.length == 0) {
				excelData += '<Row><Cell ss:StyleID="s72"><Data ss:Type="String">No Item Available</Data></Cell></Row>';	
			} else {
						excelData += '<Row><Cell ss:StyleID="s72"><Data ss:Type="String">Internalid</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">Name</Data></Cell><Cell ss:StyleID="s72"><Data ss:Type="String">Quantity</Data></Cell></Row>';
			}
			_.each(categoriesWithItem.items, function (item) { 
				excelData += '<Row><Cell><Data ss:Type="String">'+ item.item.internalid +'</Data></Cell><Cell><Data ss:Type="String">' + item.item.displayname + '</Data></Cell><Cell><Data ss:Type="String">' + item.quantity + ' </Data></Cell></Row>';
			});
		});
		excelData += '</Table></Worksheet></Workbook>';
		var blob = new Blob([excelData], { type: "application/vnd.ms-excel" });
		var link = URL.createObjectURL(blob);
		var a = document.createElement("a");
		a.download = 'Wishlist.xls';
		a.href = link;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	});
		   return promise;
	    })
	});
});
