// @module Kodella.KDCsvImport.KDCsvParser
define('Kodella.KDCsvImport.KDCsvParser.View'
,	[
	'kodella_kdcsvimport_kdcsvparser.tpl'
	,	'Backbone'
	,   'underscore'
    ,   'papaparse'
    ]
, function (
	kodella_kdcsvimport_kdcsvparser_tpl
	,	Backbone
	,	 _
  	, 	Papa
)
{
    'use strict';

	// @class Kodella.KDCsvImport.KDCsvParser.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdcsvimport_kdcsvparser_tpl

		, initialize: function initialize ()
		{
		  this.application = this.options.container;
		  this.Cart = this.application.getComponent('Cart');
		}
	
	  , events:
		{
		  'click [data-action="csvupload"]': 'parseCSV' // when the button is clicked, it will begin the process
		, 'click #csvinput': 'hideError' // if there are errors from previous attempts, clicking on the file input will clear them
		}
	
	  , parseCSV: function parseCSV ()
		{
		  var self = this; // once we are deep in callbacks, we will need this variable to access this file's particular context
		  var fileInput = document.getElementById('csvinput'); // essentially how we access the file API for the selected file
	
		  if (fileInput.files.length === 1 && fileInput.files[0].type === 'text/csv') // check that there is one (and only one) file and that its type is a CSV file
		  {
			Papa.parse(fileInput.files[0], // call PapaParse
			{
			  complete: function (parsedLines) // when it's done parsing, do this
			  {
				if (parsedLines.data.length < 100) // for performance reasons, we don't recommend having more than 100 items in the cart at once, so this is a basic check
				{
				  self.processLines(parsedLines); // after this we need to build a map of the data and then send it to the extensibility API
				}
				else
				{
				  self.showError(_.translate('Please do not add more than 100 items to your cart'))
				}
	
				// you could also add a check for any errors parsing the file and then report those back to the user, but there
			  }
			, header: true
			});
		  }
	
		  else if (fileInput.files.length === 0) // if they click submit without selecting a file
		  {
			self.showError(_.translate('Please select a file to parse'));
		  }
	
		  else if (fileInput.files[0].type !== 'text/csv') // if they select a file that isn't a CSV
		  {
			self.showError(_.translate('Please select a valid CSV file'));
		  }
		}
	
	  , processLines: function processLines (parsedLines)
		{
		  // Once you have the data, you need to structure it in a way that the API will understand, this means mapping the parsed data from PapaParse into line objects that the API wants
		  // Strictly speaking, you only need the internalid and quantity to add an item to cart, but if its a matrix option you also need to provide the correct matrix options too
		  // If you're implementing this, then you'll need to look at how you're accepting data from your shoppers and then work out the correct map
		  var results = _.map(parsedLines.data, function (line) // _.map is a useful method for transforming existing arrays into new ones with the structure, keys and values we want
		  {
			var newline = {}; // each item is an object
			newline.item = {internalid: line.internalid};
			newline.quantity = parseInt(line.quantity, 10); // quantity is returned as a string from the parsed CSV but must be of integer type
			newline.options = []; // item options are an array of objects
	
			_.each(line, function (val, key)
			{
			  if (key.substr(0,7) === 'custcol') // we're gonna loop over each one and see if the first seven characters starting 'custcol', which is what custom transaction item options start with
			  {
				newline.options.push(
				{
				  cartOptionId: key // eg custcol_gen_color
				, value: {internalid: val} // eg {internalid: 7}
				});
			  }
			});
	
			return newline
		  });
	
		  this.addLines(results) // once we have the array in the format we want, we can send it to the extensibility API
		}
	
	  , addLines: function addLines (lines)
		{
		  this.Cart.addLines({lines: lines}) // calls the cart component's addLines() method using the array we just created – note that the method isn't just passed an array, it's passed an object with the lines as a value to a property called "lines"
		}
	 
	});
});
