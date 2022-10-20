var extensions = {};

extensions['Kodella.CCTProductTPLOne.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/CCTProductTPLOne/1.0.0/' + asset;
}

// @module Kodella.CCTProductTPLOne.CCTProductTPLOne
define('Kodella.CCTProductTPLOne.CCTProductTPLOne.View'
,	[
	'CustomContentType.Base.View',
	'kodella_cctproducttplone_cctproducttplone.tpl'
    ]
, function (
	CustomContentTypeBase,
	kodella_cctproducttplone_cctproducttplone_tpl
)
{
    'use strict';

	// @class Kodella.CCTProductTPLOne.CCTProductTPLOne.View @extends Backbone.View

	return CustomContentTypeBase.extend({
		template: kodella_cctproducttplone_cctproducttplone_tpl
	
	  , events: {
		  'click [data-banner="cct-product-one"]': 'setOptions'
		}
	
	  , install: function install (settings, context_data)
		{
		  return this._install(settings, context_data);
		}

	
	
	  , getContext: function getContext ()
		{
			
		  return {
			title: this.settings.custrecord_kd_cct_header_title,
			subtitle: this.settings.custrecord_kd_subheader,
			prod_image1: this.settings.custrecord_kd_product1_image,
			key_benefits1: this.settings.custrecord_kd_keybenefits1,
			prod_description1: this.settings.custrecord_kd_description1,
			prod_image2: this.settings.custrecord_kd_product2_image,
			key_benefits2: this.settings.custrecord_kd_keybenefits2,
			prod_description2: this.settings.custrecord_kd_description2,
			prod_image3: this.settings.custrecord_kd_product3_image,
			key_benefits3: this.settings.custrecord_kd_keybenefits3,
			prod_description3: this.settings.custrecord_kd_description3
		  }
		}
	  });
});



define(
	'Kodella.CCTProductTPLOne.CCTProductTPLOne'
,   [
		'Kodella.CCTProductTPLOne.CCTProductTPLOne.View'
	]
,   function (
		CCTProductTPLOneView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			CCTProductTPLOneView.prototype.application = application;

			application.getComponent('CMS').registerCustomContentType({
			  id: 'cct_product_templateone'
			, view: CCTProductTPLOneView
			});
			
		

		}
	};
});


};

extensions['Kodella.CustomLayoutSMT.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/CustomLayoutSMT/1.0.0/' + asset;
}

// @module Kodella.CustomLayoutSMT.CustomLayoutSMT
define('Kodella.CustomLayoutSMT.CustomLayoutSMT.View'
,	[
	'kodella_customlayoutsmt_customlayoutsmt.tpl'
	
	,	'Kodella.CustomLayoutSMT.CustomLayoutSMT.SS2Model'
	
	,	'Backbone'

	, 'PageType.Base.View'
    ]
, function (
	kodella_customlayoutsmt_customlayoutsmt_tpl
	
	,	CustomLayoutSMTSS2Model
	
	,	Backbone

	, PageType
)
{
    'use strict';

	// @class Kodella.CustomLayoutSMT.CustomLayoutSMT.View @extends Backbone.View
	return PageType.PageTypeBaseView.extend({

		template: kodella_customlayoutsmt_customlayoutsmt_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new CustomLayoutSMTModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.CustomLayoutSMT.CustomLayoutSMT.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.CustomLayoutSMT.CustomLayoutSMT.View.Context
			// this.message = this.message || 'Hello World!!'
			// return {
			// 	message: this.message
			// };
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.CustomLayoutSMT.CustomLayoutSMT.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/CustomLayoutSMT.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.CustomLayoutSMT.CustomLayoutSMT.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/CustomLayoutSMT/SuiteScript2/CustomLayoutSMT.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.CustomLayoutSMT.CustomLayoutSMT'
,   [
		'Kodella.CustomLayoutSMT.CustomLayoutSMT.View',
		'kodella_customlayoutsmt_customlayoutsmt.tpl'

	]
,   function (
		CustomLayoutSMTView,
		CustomTPL
	)
{
	'use strict';

	return {
		mountToApp: function mountToApp (container)
		{
		  var PageType = container.getComponent('PageType');
	
		  PageType.registerPageType({
        //     'name': 'NewCustomPageType'
        // ,   'view': CustomLayoutSMTView
        // ,   'options': {}
        // ,   'defaultTemplate': {
        //         'name': 'kodella_customlayoutsmt_customlayoutsmt.tpl'
        //     ,   'displayName': 'New Custom Layout'
        //     ,   'thumbnail': ''
        //     }
		});

		PageType.registerTemplate({
			pageTypes: ['NewCustomPageType', 'cms-landing-page']
		,   template: {
				 name: 'kodella_customlayoutsmt_customlayoutsmt.tpl'
			  ,   displayName: 'My Alternate Layout'
			  ,   thumbnail: ''
		   }
  
		});
		
		}
	  }
});


};

extensions['Kodella.KDChangeStoreLocations.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDChangeStoreLocations/1.0.0/' + asset;
}

// @module Kodella.KDChangeStoreLocations.KDChangeStoreLocations
define('Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View'
	, [
		'kodella_kdchangestorelocations_kdchangestorelocations.tpl'

		, 'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model'

		, 'Backbone'
	]
	, function (
		kodella_kdchangestorelocations_kdchangestorelocations_tpl

		, KDChangeStoreLocationsSS2Model

		, Backbone
	) {
		'use strict';

		// @class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View @extends Backbone.View
		return Backbone.View.extend({

			template: kodella_kdchangestorelocations_kdchangestorelocations_tpl

			, initialize: function (options) {

				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new KDChangeStoreLocationsModel();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
			}

			, events: {
			}

			, bindings: {
			}

			, childViews: {

			}

			//@method getContext @return Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
			, getContext: function getContext() {
				//@class Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View.Context
				this.message = this.message || 'Hello World!!'
				return {
					message: this.message
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDChangeStoreLocations.KDChangeStoreLocations.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDChangeStoreLocations.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDChangeStoreLocations/SuiteScript2/KDChangeStoreLocations.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDChangeStoreLocations.KDChangeStoreLocations'
	, [
		'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View'
		, 'ReferenceMap'
		, 'GoogleMap'
		, 'StoreLocator.Search.View'
	]
	, function (
		KDChangeStoreLocationsView
		, ReferenceMap
		, GoogleMap
		, StoreLocatorSearchView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */

				var layout = container.getComponent('Layout');

				ReferenceMap.prototype.autocompleteChange = function autocompleteChange() {
					const place =
						this.autocomplete && this.autocomplete.getPlaces() && this.autocomplete.getPlaces()[0];

					if (!place || _.size(place) === 0) {
						console.warn('Autocomplete returned place contains no geometry');
						return;
					}

					if (!place.geometry) {
						console.warn('Autocomplete returned place contains no geometry');
						return;
					}
					// set autocomplete coordinates
					if (place.geometry.location) {
						this.setPosition({
							latitude: place.geometry.location.lat(),
							longitude: place.geometry.location.lng(),
							address: place.formatted_address,
							viewport: place.geometry.viewport,
							location: place.geometry.location
						});
					}
				};
				ReferenceMap.prototype.showAutoCompleteInput = function showAutoCompleteInput(input) {
					const self = this;

					var defaultBounds = new google.maps.LatLngBounds(
						new google.maps.LatLng(-33.8902, 151.1759),
						new google.maps.LatLng(-33.8474, 151.2631));

					if (input) {
						//	this.autocomplete = new google.maps.places.Autocomplete(input, options);
						this.autocomplete = new google.maps.places.SearchBox(input, {
							bounds: defaultBounds
						});
						self.map.addListener("bounds_changed", () => {

							this.autocomplete.setBounds(self.map.getBounds());
						});

						google.maps.event.addListener(this.autocomplete, 'places_changed', function () {

							const places = self.autocomplete.getPlaces();
							const bounds = new google.maps.LatLngBounds();
							places.forEach((place) => {
								if (!place.geometry) {
									console.log("Returned place contains no geometry");
									return;
								}
							});
							self.autocompleteChange();

							self.trigger('change:places', self.autocomplete.getPlaces());
						});
					}

					return this.autocomplete;
				};

				// if(layout)
				// {
				// 	layout.addChildView('Header.Logo', function() { 
				// 		return new KDChangeStoreLocationsView({ container: container });
				// 	});
				// }

			}
		};
	});


};

extensions['Kodella.KDCsvImport.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDCsvImport/1.0.0/' + asset;
}

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


// Model.js
// -----------------------
// @module Case
define("Kodella.KDCsvImport.KDCsvParser.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDCsvParser.Service.ss"
            )
        )
        
});
});


/* @license
Papa Parse
v5.0.0-beta.0
https://github.com/mholt/PapaParse
License: MIT
*/

define('papaparse', [], function ()
{
  'use strict';

  var global = (function() {
    // alternative method, similar to `Function('return this')()`
    // but without using `eval` (which is disabled when
    // using Content Security Policy).

    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }

    // When running tests none of the above have been defined
    return {};
  })();


  function getWorkerBlob() {
    var URL = global.URL || global.webkitURL || null;
    var code = moduleFactory.toString();
    return Papa.BLOB_URL || (Papa.BLOB_URL = URL.createObjectURL(new Blob(['(', code, ')();'], {type: 'text/javascript'})));
  }

  var IS_WORKER = !global.document && !!global.postMessage,
    IS_PAPA_WORKER = IS_WORKER && /blob:/i.test((global.location || {}).protocol);
  var workers = {}, workerIdCounter = 0;

  var Papa = {};

  Papa.parse = CsvToJson;
  Papa.unparse = JsonToCsv;

  Papa.RECORD_SEP = String.fromCharCode(30);
  Papa.UNIT_SEP = String.fromCharCode(31);
  Papa.BYTE_ORDER_MARK = '\ufeff';
  Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
  Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
  Papa.NODE_STREAM_INPUT = 1;

  // Configurable chunk sizes for local and remote files, respectively
  Papa.LocalChunkSize = 1024 * 1024 * 10; // 10 MB
  Papa.RemoteChunkSize = 1024 * 1024 * 5; // 5 MB
  Papa.DefaultDelimiter = ',';      // Used if not specified and detection fails

  // Exposed for testing and development only
  Papa.Parser = Parser;
  Papa.ParserHandle = ParserHandle;
  Papa.NetworkStreamer = NetworkStreamer;
  Papa.FileStreamer = FileStreamer;
  Papa.StringStreamer = StringStreamer;
  Papa.ReadableStreamStreamer = ReadableStreamStreamer;
  if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
    Papa.DuplexStreamStreamer = DuplexStreamStreamer;
  }

  if (global.jQuery)
  {
    var $ = global.jQuery;
    $.fn.parse = function(options)
    {
      var config = options.config || {};
      var queue = [];

      this.each(function(idx)
      {
        var supported = $(this).prop('tagName').toUpperCase() === 'INPUT'
                && $(this).attr('type').toLowerCase() === 'file'
                && global.FileReader;

        if (!supported || !this.files || this.files.length === 0)
          return true;  // continue to next input element

        for (var i = 0; i < this.files.length; i++)
        {
          queue.push({
            file: this.files[i],
            inputElem: this,
            instanceConfig: $.extend({}, config)
          });
        }
      });

      parseNextFile();  // begin parsing
      return this;    // maintains chainability


      function parseNextFile()
      {
        if (queue.length === 0)
        {
          if (isFunction(options.complete))
            options.complete();
          return;
        }

        var f = queue[0];

        if (isFunction(options.before))
        {
          var returned = options.before(f.file, f.inputElem);

          if (typeof returned === 'object')
          {
            if (returned.action === 'abort')
            {
              error('AbortError', f.file, f.inputElem, returned.reason);
              return; // Aborts all queued files immediately
            }
            else if (returned.action === 'skip')
            {
              fileComplete(); // parse the next file in the queue, if any
              return;
            }
            else if (typeof returned.config === 'object')
              f.instanceConfig = $.extend(f.instanceConfig, returned.config);
          }
          else if (returned === 'skip')
          {
            fileComplete(); // parse the next file in the queue, if any
            return;
          }
        }

        // Wrap up the user's complete callback, if any, so that ours also gets executed
        var userCompleteFunc = f.instanceConfig.complete;
        f.instanceConfig.complete = function(results)
        {
          if (isFunction(userCompleteFunc))
            userCompleteFunc(results, f.file, f.inputElem);
          fileComplete();
        };

        Papa.parse(f.file, f.instanceConfig);
      }

      function error(name, file, elem, reason)
      {
        if (isFunction(options.error))
          options.error({name: name}, file, elem, reason);
      }

      function fileComplete()
      {
        queue.splice(0, 1);
        parseNextFile();
      }
    };
  }


  if (IS_PAPA_WORKER)
  {
    global.onmessage = workerThreadReceivedMessage;
  }




  function CsvToJson(_input, _config)
  {
    _config = _config || {};
    var dynamicTyping = _config.dynamicTyping || false;
    if (isFunction(dynamicTyping)) {
      _config.dynamicTypingFunction = dynamicTyping;
      // Will be filled on first row call
      dynamicTyping = {};
    }
    _config.dynamicTyping = dynamicTyping;

    _config.transform = isFunction(_config.transform) ? _config.transform : false;

    if (_config.worker && Papa.WORKERS_SUPPORTED)
    {
      var w = newWorker();

      w.userStep = _config.step;
      w.userChunk = _config.chunk;
      w.userComplete = _config.complete;
      w.userError = _config.error;

      _config.step = isFunction(_config.step);
      _config.chunk = isFunction(_config.chunk);
      _config.complete = isFunction(_config.complete);
      _config.error = isFunction(_config.error);
      delete _config.worker;  // prevent infinite loop

      w.postMessage({
        input: _input,
        config: _config,
        workerId: w.id
      });

      return;
    }

    var streamer = null;
    if (_input === Papa.NODE_STREAM_INPUT && typeof PAPA_BROWSER_CONTEXT === 'undefined')
    {
      // create a node Duplex stream for use
      // with .pipe
      streamer = new DuplexStreamStreamer(_config);
      return streamer.getStream();
    }
    else if (typeof _input === 'string')
    {
      if (_config.download)
        streamer = new NetworkStreamer(_config);
      else
        streamer = new StringStreamer(_config);
    }
    else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on))
    {
      streamer = new ReadableStreamStreamer(_config);
    }
    else if ((global.File && _input instanceof File) || _input instanceof Object) // ...Safari. (see issue #106)
      streamer = new FileStreamer(_config);

    return streamer.stream(_input);
  }






  function JsonToCsv(_input, _config)
  {
    // Default configuration

    /** whether to surround every datum with quotes */
    var _quotes = false;

    /** whether to write headers */
    var _writeHeader = true;

    /** delimiting character(s) */
    var _delimiter = ',';

    /** newline character(s) */
    var _newline = '\r\n';

    /** quote character */
    var _quoteChar = '"';

    /** escaped quote character, either "" or <config.escapeChar>" */
    var _escapedQuote = _quoteChar + _quoteChar;

    /** whether to skip empty lines */
    var _skipEmptyLines = false;

    /** the columns (keys) we expect when we unparse objects */
    var _columns = null;

    unpackConfig();

    var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), 'g');

    if (typeof _input === 'string')
      _input = JSON.parse(_input);

    if (Array.isArray(_input))
    {
      if (!_input.length || Array.isArray(_input[0]))
        return serialize(null, _input, _skipEmptyLines);
      else if (typeof _input[0] === 'object')
        return serialize(_columns || objectKeys(_input[0]), _input, _skipEmptyLines);
    }
    else if (typeof _input === 'object')
    {
      if (typeof _input.data === 'string')
        _input.data = JSON.parse(_input.data);

      if (Array.isArray(_input.data))
      {
        if (!_input.fields)
          _input.fields =  _input.meta && _input.meta.fields;

        if (!_input.fields)
          _input.fields =  Array.isArray(_input.data[0])
            ? _input.fields
            : objectKeys(_input.data[0]);

        if (!(Array.isArray(_input.data[0])) && typeof _input.data[0] !== 'object')
          _input.data = [_input.data];  // handles input like [1,2,3] or ['asdf']
      }

      return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
    }

    // Default (any valid paths should return before this)
    throw new Error('Unable to serialize unrecognized input');


    function unpackConfig()
    {
      if (typeof _config !== 'object')
        return;

      if (typeof _config.delimiter === 'string'
                && !Papa.BAD_DELIMITERS.filter(function(value) { return _config.delimiter.indexOf(value) !== -1; }).length)
      {
        _delimiter = _config.delimiter;
      }

      if (typeof _config.quotes === 'boolean'
        || Array.isArray(_config.quotes))
        _quotes = _config.quotes;

      if (typeof _config.skipEmptyLines === 'boolean'
        || typeof _config.skipEmptyLines === 'string')
        _skipEmptyLines = _config.skipEmptyLines;

      if (typeof _config.newline === 'string')
        _newline = _config.newline;

      if (typeof _config.quoteChar === 'string')
        _quoteChar = _config.quoteChar;

      if (typeof _config.header === 'boolean')
        _writeHeader = _config.header;

      if (Array.isArray(_config.columns)) {

        if (_config.columns.length === 0) throw new Error('Option columns is empty');

        _columns = _config.columns;
      }

      if (_config.escapeChar !== undefined) {
        _escapedQuote = _config.escapeChar + _quoteChar;
      }
    }


    /** Turns an object's keys into an array */
    function objectKeys(obj)
    {
      if (typeof obj !== 'object')
        return [];
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    }

    /** The double for loop that iterates the data and writes out a CSV string including header row */
    function serialize(fields, data, skipEmptyLines)
    {
      var csv = '';

      if (typeof fields === 'string')
        fields = JSON.parse(fields);
      if (typeof data === 'string')
        data = JSON.parse(data);

      var hasHeader = Array.isArray(fields) && fields.length > 0;
      var dataKeyedByField = !(Array.isArray(data[0]));

      // If there a header row, write it first
      if (hasHeader && _writeHeader)
      {
        for (var i = 0; i < fields.length; i++)
        {
          if (i > 0)
            csv += _delimiter;
          csv += safe(fields[i], i);
        }
        if (data.length > 0)
          csv += _newline;
      }

      // Then write out the data
      for (var row = 0; row < data.length; row++)
      {
        var maxCol = hasHeader ? fields.length : data[row].length;

        var emptyLine = false;
        var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
        if (skipEmptyLines && !hasHeader)
        {
          emptyLine = skipEmptyLines === 'greedy' ? data[row].join('').trim() === '' : data[row].length === 1 && data[row][0].length === 0;
        }
        if (skipEmptyLines === 'greedy' && hasHeader) {
          var line = [];
          for (var c = 0; c < maxCol; c++) {
            var cx = dataKeyedByField ? fields[c] : c;
            line.push(data[row][cx]);
          }
          emptyLine = line.join('').trim() === '';
        }
        if (!emptyLine)
        {
          for (var col = 0; col < maxCol; col++)
          {
            if (col > 0 && !nullLine)
              csv += _delimiter;
            var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
            csv += safe(data[row][colIdx], col);
          }
          if (row < data.length - 1 && (!skipEmptyLines || (maxCol > 0 && !nullLine)))
          {
            csv += _newline;
          }
        }
      }
      return csv;
    }

    /** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
    function safe(str, col)
    {
      if (typeof str === 'undefined' || str === null)
        return '';

      if (str.constructor === Date)
        return JSON.stringify(str).slice(1, 25);

      str = str.toString().replace(quoteCharRegex, _escapedQuote);

      var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
              || (Array.isArray(_quotes) && _quotes[col])
              || hasAny(str, Papa.BAD_DELIMITERS)
              || str.indexOf(_delimiter) > -1
              || str.charAt(0) === ' '
              || str.charAt(str.length - 1) === ' ';

      return needsQuotes ? _quoteChar + str + _quoteChar : str;
    }

    function hasAny(str, substrings)
    {
      for (var i = 0; i < substrings.length; i++)
        if (str.indexOf(substrings[i]) > -1)
          return true;
      return false;
    }
  }

  /** ChunkStreamer is the base prototype for various streamer implementations. */
  function ChunkStreamer(config)
  {
    this._handle = null;
    this._finished = false;
    this._completed = false;
    this._halted = false;
    this._input = null;
    this._baseIndex = 0;
    this._partialLine = '';
    this._rowCount = 0;
    this._start = 0;
    this._nextChunk = null;
    this.isFirstChunk = true;
    this._completeResults = {
      data: [],
      errors: [],
      meta: {}
    };
    replaceConfig.call(this, config);

    this.parseChunk = function(chunk, isFakeChunk)
    {
      // First chunk pre-processing
      if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
      {
        var modifiedChunk = this._config.beforeFirstChunk(chunk);
        if (modifiedChunk !== undefined)
          chunk = modifiedChunk;
      }
      this.isFirstChunk = false;
      this._halted = false;

      // Rejoin the line we likely just split in two by chunking the file
      var aggregate = this._partialLine + chunk;
      this._partialLine = '';

      var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

      if (this._handle.paused() || this._handle.aborted()) {
        this._halted = true;
        return;
      }

      var lastIndex = results.meta.cursor;

      if (!this._finished)
      {
        this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
        this._baseIndex = lastIndex;
      }

      if (results && results.data)
        this._rowCount += results.data.length;

      var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

      if (IS_PAPA_WORKER)
      {
        global.postMessage({
          results: results,
          workerId: Papa.WORKER_ID,
          finished: finishedIncludingPreview
        });
      }
      else if (isFunction(this._config.chunk) && !isFakeChunk)
      {
        this._config.chunk(results, this._handle);
        if (this._handle.paused() || this._handle.aborted()) {
          this._halted = true;
          return;
        }
        results = undefined;
        this._completeResults = undefined;
      }

      if (!this._config.step && !this._config.chunk) {
        this._completeResults.data = this._completeResults.data.concat(results.data);
        this._completeResults.errors = this._completeResults.errors.concat(results.errors);
        this._completeResults.meta = results.meta;
      }

      if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
        this._config.complete(this._completeResults, this._input);
        this._completed = true;
      }

      if (!finishedIncludingPreview && (!results || !results.meta.paused))
        this._nextChunk();

      return results;
    };

    this._sendError = function(error)
    {
      if (isFunction(this._config.error))
        this._config.error(error);
      else if (IS_PAPA_WORKER && this._config.error)
      {
        global.postMessage({
          workerId: Papa.WORKER_ID,
          error: error,
          finished: false
        });
      }
    };

    function replaceConfig(config)
    {
      // Deep-copy the config so we can edit it
      var configCopy = copy(config);
      configCopy.chunkSize = parseInt(configCopy.chunkSize);  // parseInt VERY important so we don't concatenate strings!
      if (!config.step && !config.chunk)
        configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
      this._handle = new ParserHandle(configCopy);
      this._handle.streamer = this;
      this._config = configCopy;  // persist the copy to the caller
    }
  }


  function NetworkStreamer(config)
  {
    config = config || {};
    if (!config.chunkSize)
      config.chunkSize = Papa.RemoteChunkSize;
    ChunkStreamer.call(this, config);

    var xhr;

    if (IS_WORKER)
    {
      this._nextChunk = function()
      {
        this._readChunk();
        this._chunkLoaded();
      };
    }
    else
    {
      this._nextChunk = function()
      {
        this._readChunk();
      };
    }

    this.stream = function(url)
    {
      this._input = url;
      this._nextChunk();  // Starts streaming
    };

    this._readChunk = function()
    {
      if (this._finished)
      {
        this._chunkLoaded();
        return;
      }

      xhr = new XMLHttpRequest();

      if (this._config.withCredentials)
      {
        xhr.withCredentials = this._config.withCredentials;
      }

      if (!IS_WORKER)
      {
        xhr.onload = bindFunction(this._chunkLoaded, this);
        xhr.onerror = bindFunction(this._chunkError, this);
      }

      xhr.open('GET', this._input, !IS_WORKER);
      // Headers can only be set when once the request state is OPENED
      if (this._config.downloadRequestHeaders)
      {
        var headers = this._config.downloadRequestHeaders;

        for (var headerName in headers)
        {
          xhr.setRequestHeader(headerName, headers[headerName]);
        }
      }

      if (this._config.chunkSize)
      {
        var end = this._start + this._config.chunkSize - 1; // minus one because byte range is inclusive
        xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
      }

      try {
        xhr.send();
      }
      catch (err) {
        this._chunkError(err.message);
      }

      if (IS_WORKER && xhr.status === 0)
        this._chunkError();
      else
        this._start += this._config.chunkSize;
    };

    this._chunkLoaded = function()
    {
      if (xhr.readyState !== 4)
        return;

      if (xhr.status < 200 || xhr.status >= 400)
      {
        this._chunkError();
        return;
      }

      this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
      this.parseChunk(xhr.responseText);
    };

    this._chunkError = function(errorMessage)
    {
      var errorText = xhr.statusText || errorMessage;
      this._sendError(new Error(errorText));
    };

    function getFileSize(xhr)
    {
      var contentRange = xhr.getResponseHeader('Content-Range');
      if (contentRange === null) { // no content range, then finish!
        return -1;
      }
      return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
    }
  }
  NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
  NetworkStreamer.prototype.constructor = NetworkStreamer;


  function FileStreamer(config)
  {
    config = config || {};
    if (!config.chunkSize)
      config.chunkSize = Papa.LocalChunkSize;
    ChunkStreamer.call(this, config);

    var reader, slice;

    // FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
    // But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
    var usingAsyncReader = typeof FileReader !== 'undefined'; // Safari doesn't consider it a function - see issue #105

    this.stream = function(file)
    {
      this._input = file;
      slice = file.slice || file.webkitSlice || file.mozSlice;

      if (usingAsyncReader)
      {
        reader = new FileReader();    // Preferred method of reading files, even in workers
        reader.onload = bindFunction(this._chunkLoaded, this);
        reader.onerror = bindFunction(this._chunkError, this);
      }
      else
        reader = new FileReaderSync();  // Hack for running in a web worker in Firefox

      this._nextChunk();  // Starts streaming
    };

    this._nextChunk = function()
    {
      if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
        this._readChunk();
    };

    this._readChunk = function()
    {
      var input = this._input;
      if (this._config.chunkSize)
      {
        var end = Math.min(this._start + this._config.chunkSize, this._input.size);
        input = slice.call(input, this._start, end);
      }
      var txt = reader.readAsText(input, this._config.encoding);
      if (!usingAsyncReader)
        this._chunkLoaded({ target: { result: txt } }); // mimic the async signature
    };

    this._chunkLoaded = function(event)
    {
      // Very important to increment start each time before handling results
      this._start += this._config.chunkSize;
      this._finished = !this._config.chunkSize || this._start >= this._input.size;
      this.parseChunk(event.target.result);
    };

    this._chunkError = function()
    {
      this._sendError(reader.error);
    };

  }
  FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
  FileStreamer.prototype.constructor = FileStreamer;


  function StringStreamer(config)
  {
    config = config || {};
    ChunkStreamer.call(this, config);

    var remaining;
    this.stream = function(s)
    {
      remaining = s;
      return this._nextChunk();
    };
    this._nextChunk = function()
    {
      if (this._finished) return;
      var size = this._config.chunkSize;
      var chunk = size ? remaining.substr(0, size) : remaining;
      remaining = size ? remaining.substr(size) : '';
      this._finished = !remaining;
      return this.parseChunk(chunk);
    };
  }
  StringStreamer.prototype = Object.create(StringStreamer.prototype);
  StringStreamer.prototype.constructor = StringStreamer;


  function ReadableStreamStreamer(config)
  {
    config = config || {};

    ChunkStreamer.call(this, config);

    var queue = [];
    var parseOnData = true;
    var streamHasEnded = false;

    this.pause = function()
    {
      ChunkStreamer.prototype.pause.apply(this, arguments);
      this._input.pause();
    };

    this.resume = function()
    {
      ChunkStreamer.prototype.resume.apply(this, arguments);
      this._input.resume();
    };

    this.stream = function(stream)
    {
      this._input = stream;

      this._input.on('data', this._streamData);
      this._input.on('end', this._streamEnd);
      this._input.on('error', this._streamError);
    };

    this._checkIsFinished = function()
    {
      if (streamHasEnded && queue.length === 1) {
        this._finished = true;
      }
    };

    this._nextChunk = function()
    {
      this._checkIsFinished();
      if (queue.length)
      {
        this.parseChunk(queue.shift());
      }
      else
      {
        parseOnData = true;
      }
    };

    this._streamData = bindFunction(function(chunk)
    {
      try
      {
        queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

        if (parseOnData)
        {
          parseOnData = false;
          this._checkIsFinished();
          this.parseChunk(queue.shift());
        }
      }
      catch (error)
      {
        this._streamError(error);
      }
    }, this);

    this._streamError = bindFunction(function(error)
    {
      this._streamCleanUp();
      this._sendError(error);
    }, this);

    this._streamEnd = bindFunction(function()
    {
      this._streamCleanUp();
      streamHasEnded = true;
      this._streamData('');
    }, this);

    this._streamCleanUp = bindFunction(function()
    {
      this._input.removeListener('data', this._streamData);
      this._input.removeListener('end', this._streamEnd);
      this._input.removeListener('error', this._streamError);
    }, this);
  }
  ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
  ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;


  function DuplexStreamStreamer(_config) {
    var Duplex = require('stream').Duplex;
    var config = copy(_config);
    var parseOnWrite = true;
    var writeStreamHasFinished = false;
    var parseCallbackQueue = [];
    var stream = null;

    this._onCsvData = function(results)
    {
      var data = results.data;
      if (!stream.push(data) && !this._handle.paused()) {
        // the writeable consumer buffer has filled up
        // so we need to pause until more items
        // can be processed
        this._handle.pause();
      }
    };

    this._onCsvComplete = function()
    {
      // node will finish the read stream when
      // null is pushed
      stream.push(null);
    };

    config.step = bindFunction(this._onCsvData, this);
    config.complete = bindFunction(this._onCsvComplete, this);
    ChunkStreamer.call(this, config);

    this._nextChunk = function()
    {
      if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
        this._finished = true;
      }
      if (parseCallbackQueue.length) {
        parseCallbackQueue.shift()();
      } else {
        parseOnWrite = true;
      }
    };

    this._addToParseQueue = function(chunk, callback)
    {
      // add to queue so that we can indicate
      // completion via callback
      // node will automatically pause the incoming stream
      // when too many items have been added without their
      // callback being invoked
      parseCallbackQueue.push(bindFunction(function() {
        this.parseChunk(typeof chunk === 'string' ? chunk : chunk.toString(config.encoding));
        if (isFunction(callback)) {
          return callback();
        }
      }, this));
      if (parseOnWrite) {
        parseOnWrite = false;
        this._nextChunk();
      }
    };

    this._onRead = function()
    {
      if (this._handle.paused()) {
        // the writeable consumer can handle more data
        // so resume the chunk parsing
        this._handle.resume();
      }
    };

    this._onWrite = function(chunk, encoding, callback)
    {
      this._addToParseQueue(chunk, callback);
    };

    this._onWriteComplete = function()
    {
      writeStreamHasFinished = true;
      // have to write empty string
      // so parser knows its done
      this._addToParseQueue('');
    };

    this.getStream = function()
    {
      return stream;
    };
    stream = new Duplex({
      readableObjectMode: true,
      decodeStrings: false,
      read: bindFunction(this._onRead, this),
      write: bindFunction(this._onWrite, this)
    });
    stream.once('finish', bindFunction(this._onWriteComplete, this));
  }
  if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
    DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
    DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;
  }


  // Use one ParserHandle per entire CSV file or string
  function ParserHandle(_config)
  {
    // One goal is to minimize the use of regular expressions...
    var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
    var ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
    var self = this;
    var _stepCounter = 0; // Number of times step was called (number of rows parsed)
    var _rowCounter = 0;  // Number of rows that have been parsed so far
    var _input;       // The input being parsed
    var _parser;      // The core parser being used
    var _paused = false;  // Whether we are paused or not
    var _aborted = false; // Whether the parser has aborted or not
    var _delimiterError;  // Temporary state between delimiter detection and processing results
    var _fields = [];   // Fields are from the header row of the input, if there is one
    var _results = {    // The last results returned from the parser
      data: [],
      errors: [],
      meta: {}
    };

    if (isFunction(_config.step))
    {
      var userStep = _config.step;
      _config.step = function(results)
      {
        _results = results;

        if (needsHeaderRow())
          processResults();
        else  // only call user's step function after header row
        {
          processResults();

          // It's possbile that this line was empty and there's no row here after all
          if (_results.data.length === 0)
            return;

          _stepCounter += results.data.length;
          if (_config.preview && _stepCounter > _config.preview)
            _parser.abort();
          else
            userStep(_results, self);
        }
      };
    }

    /**
     * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
     * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
     * when an input comes in multiple chunks, like from a file.
     */
    this.parse = function(input, baseIndex, ignoreLastRow)
    {
      var quoteChar = _config.quoteChar || '"';
      if (!_config.newline)
        _config.newline = guessLineEndings(input, quoteChar);

      _delimiterError = false;
      if (!_config.delimiter)
      {
        var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments, _config.delimitersToGuess);
        if (delimGuess.successful)
          _config.delimiter = delimGuess.bestDelimiter;
        else
        {
          _delimiterError = true; // add error after parsing (otherwise it would be overwritten)
          _config.delimiter = Papa.DefaultDelimiter;
        }
        _results.meta.delimiter = _config.delimiter;
      }
      else if(isFunction(_config.delimiter))
      {
        _config.delimiter = _config.delimiter(input);
        _results.meta.delimiter = _config.delimiter;
      }

      var parserConfig = copy(_config);
      if (_config.preview && _config.header)
        parserConfig.preview++; // to compensate for header row

      _input = input;
      _parser = new Parser(parserConfig);
      _results = _parser.parse(_input, baseIndex, ignoreLastRow);
      processResults();
      return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
    };

    this.paused = function()
    {
      return _paused;
    };

    this.pause = function()
    {
      _paused = true;
      _parser.abort();
      _input = _input.substr(_parser.getCharIndex());
    };

    this.resume = function()
    {
      if(self.streamer._halted) {
        _paused = false;
        self.streamer.parseChunk(_input, true);
      } else {
        // Bugfix: #636 In case the processing hasn't halted yet
        // wait for it to halt in order to resume
        setTimeout(this.resume, 3);
      }
    };

    this.aborted = function()
    {
      return _aborted;
    };

    this.abort = function()
    {
      _aborted = true;
      _parser.abort();
      _results.meta.aborted = true;
      if (isFunction(_config.complete))
        _config.complete(_results);
      _input = '';
    };

    function testEmptyLine(s) {
      return _config.skipEmptyLines === 'greedy' ? s.join('').trim() === '' : s.length === 1 && s[0].length === 0;
    }

    function processResults()
    {
      if (_results && _delimiterError)
      {
        addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
        _delimiterError = false;
      }

      if (_config.skipEmptyLines)
      {
        for (var i = 0; i < _results.data.length; i++)
          if (testEmptyLine(_results.data[i]))
            _results.data.splice(i--, 1);
      }

      if (needsHeaderRow())
        fillHeaderFields();

      return applyHeaderAndDynamicTypingAndTransformation();
    }

    function needsHeaderRow()
    {
      return _config.header && _fields.length === 0;
    }

    function fillHeaderFields()
    {
      if (!_results)
        return;

      function addHeder(header)
      {
        if (isFunction(_config.transformHeader))
          header = _config.transformHeader(header);

        _fields.push(header);
      }

      if (Array.isArray(_results.data[0]))
      {
        for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
          _results.data[i].forEach(addHeder);

        _results.data.splice(0, 1);
      }
      // if _results.data[0] is not an array, we are in a step where _results.data is the row.
      else
        _results.data.forEach(addHeder);
    }

    function shouldApplyDynamicTyping(field) {
      // Cache function values to avoid calling it for each row
      if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
        _config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
      }
      return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
    }

    function parseDynamic(field, value)
    {
      if (shouldApplyDynamicTyping(field))
      {
        if (value === 'true' || value === 'TRUE')
          return true;
        else if (value === 'false' || value === 'FALSE')
          return false;
        else if (FLOAT.test(value))
          return parseFloat(value);
        else if (ISO_DATE.test(value))
          return new Date(value);
        else
          return (value === '' ? null : value);
      }
      return value;
    }

    function applyHeaderAndDynamicTypingAndTransformation()
    {
      if (!_results || (!_config.header && !_config.dynamicTyping && !_config.transform))
        return _results;

      function processRow(rowSource, i)
      {
        var row = _config.header ? {} : [];

        var j;
        for (j = 0; j < rowSource.length; j++)
        {
          var field = j;
          var value = rowSource[j];

          if (_config.header)
            field = j >= _fields.length ? '__parsed_extra' : _fields[j];

          if (_config.transform)
            value = _config.transform(value,field);

          value = parseDynamic(field, value);

          if (field === '__parsed_extra')
          {
            row[field] = row[field] || [];
            row[field].push(value);
          }
          else
            row[field] = value;
        }


        if (_config.header)
        {
          if (j > _fields.length)
            addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
          else if (j < _fields.length)
            addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
        }

        return row;
      }

      var incrementBy = 1;
      if (!_results.data[0] || Array.isArray(_results.data[0]))
      {
        _results.data = _results.data.map(processRow);
        incrementBy = _results.data.length;
      }
      else
        _results.data = processRow(_results.data, 0);


      if (_config.header && _results.meta)
        _results.meta.fields = _fields;

      _rowCounter += incrementBy;
      return _results;
    }

    function guessDelimiter(input, newline, skipEmptyLines, comments, delimitersToGuess)
    {
      var bestDelim, bestDelta, fieldCountPrevRow;

      delimitersToGuess = delimitersToGuess || [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];

      for (var i = 0; i < delimitersToGuess.length; i++)
      {
        var delim = delimitersToGuess[i];
        var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
        fieldCountPrevRow = undefined;

        var preview = new Parser({
          comments: comments,
          delimiter: delim,
          newline: newline,
          preview: 10
        }).parse(input);

        for (var j = 0; j < preview.data.length; j++)
        {
          if (skipEmptyLines && testEmptyLine(preview.data[j]))
          {
            emptyLinesCount++;
            continue;
          }
          var fieldCount = preview.data[j].length;
          avgFieldCount += fieldCount;

          if (typeof fieldCountPrevRow === 'undefined')
          {
            fieldCountPrevRow = 0;
            continue;
          }
          else if (fieldCount > 1)
          {
            delta += Math.abs(fieldCount - fieldCountPrevRow);
            fieldCountPrevRow = fieldCount;
          }
        }

        if (preview.data.length > 0)
          avgFieldCount /= (preview.data.length - emptyLinesCount);

        if ((typeof bestDelta === 'undefined' || delta > bestDelta)
          && avgFieldCount > 1.99)
        {
          bestDelta = delta;
          bestDelim = delim;
        }
      }

      _config.delimiter = bestDelim;

      return {
        successful: !!bestDelim,
        bestDelimiter: bestDelim
      };
    }

    function guessLineEndings(input, quoteChar)
    {
      input = input.substr(0, 1024 * 1024); // max length 1 MB
      // Replace all the text inside quotes
      var re = new RegExp(escapeRegExp(quoteChar) + '([^]*?)' + escapeRegExp(quoteChar), 'gm');
      input = input.replace(re, '');

      var r = input.split('\r');

      var n = input.split('\n');

      var nAppearsFirst = (n.length > 1 && n[0].length < r[0].length);

      if (r.length === 1 || nAppearsFirst)
        return '\n';

      var numWithN = 0;
      for (var i = 0; i < r.length; i++)
      {
        if (r[i][0] === '\n')
          numWithN++;
      }

      return numWithN >= r.length / 2 ? '\r\n' : '\r';
    }

    function addError(type, code, msg, row)
    {
      _results.errors.push({
        type: type,
        code: code,
        message: msg,
        row: row
      });
    }
  }

  /** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  function escapeRegExp(string)
  {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }

  /** The core parser implements speedy and correct CSV parsing */
  function Parser(config)
  {
    // Unpack the config object
    config = config || {};
    var delim = config.delimiter;
    var newline = config.newline;
    var comments = config.comments;
    var step = config.step;
    var preview = config.preview;
    var fastMode = config.fastMode;
    var quoteChar;
    /** Allows for no quoteChar by setting quoteChar to undefined in config */
    if (config.quoteChar === undefined) {
      quoteChar = '"';
    } else {
      quoteChar = config.quoteChar;
    }
    var escapeChar = quoteChar;
    if (config.escapeChar !== undefined) {
      escapeChar = config.escapeChar;
    }

    // Delimiter must be valid
    if (typeof delim !== 'string'
      || Papa.BAD_DELIMITERS.indexOf(delim) > -1)
      delim = ',';

    // Comment character must be valid
    if (comments === delim)
      throw new Error('Comment character same as delimiter');
    else if (comments === true)
      comments = '#';
    else if (typeof comments !== 'string'
      || Papa.BAD_DELIMITERS.indexOf(comments) > -1)
      comments = false;

    // Newline must be valid: \r, \n, or \r\n
    if (newline !== '\n' && newline !== '\r' && newline !== '\r\n')
      newline = '\n';

    // We're gonna need these at the Parser scope
    var cursor = 0;
    var aborted = false;

    this.parse = function(input, baseIndex, ignoreLastRow)
    {
      // For some reason, in Chrome, this speeds things up (!?)
      if (typeof input !== 'string')
        throw new Error('Input must be a string');

      // We don't need to compute some of these every time parse() is called,
      // but having them in a more local scope seems to perform better
      var inputLen = input.length,
        delimLen = delim.length,
        newlineLen = newline.length,
        commentsLen = comments.length;
      var stepIsFunction = isFunction(step);

      // Establish starting state
      cursor = 0;
      var data = [], errors = [], row = [], lastCursor = 0;

      if (!input)
        return returnable();

      if (fastMode || (fastMode !== false && input.indexOf(quoteChar) === -1))
      {
        var rows = input.split(newline);
        for (var i = 0; i < rows.length; i++)
        {
          row = rows[i];
          cursor += row.length;
          if (i !== rows.length - 1)
            cursor += newline.length;
          else if (ignoreLastRow)
            return returnable();
          if (comments && row.substr(0, commentsLen) === comments)
            continue;
          if (stepIsFunction)
          {
            data = [];
            pushRow(row.split(delim));
            doStep();
            if (aborted)
              return returnable();
          }
          else
            pushRow(row.split(delim));
          if (preview && i >= preview)
          {
            data = data.slice(0, preview);
            return returnable(true);
          }
        }
        return returnable();
      }

      var nextDelim = input.indexOf(delim, cursor);
      var nextNewline = input.indexOf(newline, cursor);
      var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), 'g');
      var quoteSearch;

      // Parser loop
      for (;;)
      {
        // Field has opening quote
        if (input[cursor] === quoteChar)
        {
          // Start our search for the closing quote where the cursor is
          quoteSearch = cursor;

          // Skip the opening quote
          cursor++;

          for (;;)
          {
            // Find closing quote
            quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

            //No other quotes are found - no other delimiters
            if (quoteSearch === -1)
            {
              if (!ignoreLastRow) {
                // No closing quote... what a pity
                errors.push({
                  type: 'Quotes',
                  code: 'MissingQuotes',
                  message: 'Quoted field unterminated',
                  row: data.length, // row has yet to be inserted
                  index: cursor
                });
              }
              return finish();
            }

            // Closing quote at EOF
            if (quoteSearch === inputLen - 1)
            {
              var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
              return finish(value);
            }

            // If this quote is escaped, it's part of the data; skip it
            // If the quote character is the escape character, then check if the next character is the escape character
            if (quoteChar === escapeChar &&  input[quoteSearch + 1] === escapeChar)
            {
              quoteSearch++;
              continue;
            }

            // If the quote character is not the escape character, then check if the previous character was the escape character
            if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar)
            {
              continue;
            }

            // Check up to nextDelim or nextNewline, whichever is closest
            var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
            var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);

            // Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim)
            {
              row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
              cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
              nextDelim = input.indexOf(delim, cursor);
              nextNewline = input.indexOf(newline, cursor);
              break;
            }

            var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

            // Closing quote followed by newline or 'unnecessary spaces + newLine'
            if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline)
            {
              row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
              saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
              nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field

              if (stepIsFunction)
              {
                doStep();
                if (aborted)
                  return returnable();
              }

              if (preview && data.length >= preview)
                return returnable(true);

              break;
            }


            // Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
            errors.push({
              type: 'Quotes',
              code: 'InvalidQuotes',
              message: 'Trailing quote on quoted field is malformed',
              row: data.length, // row has yet to be inserted
              index: cursor
            });

            quoteSearch++;
            continue;

          }

          continue;
        }

        // Comment found at start of new line
        if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
        {
          if (nextNewline === -1) // Comment ends at EOF
            return returnable();
          cursor = nextNewline + newlineLen;
          nextNewline = input.indexOf(newline, cursor);
          nextDelim = input.indexOf(delim, cursor);
          continue;
        }

        // Next delimiter comes before next newline, so we've reached end of field
        if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
        {
          row.push(input.substring(cursor, nextDelim));
          cursor = nextDelim + delimLen;
          nextDelim = input.indexOf(delim, cursor);
          continue;
        }

        // End of row
        if (nextNewline !== -1)
        {
          row.push(input.substring(cursor, nextNewline));
          saveRow(nextNewline + newlineLen);

          if (stepIsFunction)
          {
            doStep();
            if (aborted)
              return returnable();
          }

          if (preview && data.length >= preview)
            return returnable(true);

          continue;
        }

        break;
      }


      return finish();


      function pushRow(row)
      {
        data.push(row);
        lastCursor = cursor;
      }

      /**
             * checks if there are extra spaces after closing quote and given index without any text
             * if Yes, returns the number of spaces
             */
      function extraSpaces(index) {
        var spaceLength = 0;
        if (index !== -1) {
          var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
          if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
            spaceLength = textBetweenClosingQuoteAndIndex.length;
          }
        }
        return spaceLength;
      }

      /**
       * Appends the remaining input from cursor to the end into
       * row, saves the row, calls step, and returns the results.
       */
      function finish(value)
      {
        if (ignoreLastRow)
          return returnable();
        if (typeof value === 'undefined')
          value = input.substr(cursor);
        row.push(value);
        cursor = inputLen;  // important in case parsing is paused
        pushRow(row);
        if (stepIsFunction)
          doStep();
        return returnable();
      }

      /**
       * Appends the current row to the results. It sets the cursor
       * to newCursor and finds the nextNewline. The caller should
       * take care to execute user's step function and check for
       * preview and end parsing if necessary.
       */
      function saveRow(newCursor)
      {
        cursor = newCursor;
        pushRow(row);
        row = [];
        nextNewline = input.indexOf(newline, cursor);
      }

      /** Returns an object with the results, errors, and meta. */
      function returnable(stopped, step)
      {
        var isStep = step || false;
        return {
          data: isStep ? data[0]  : data,
          errors: errors,
          meta: {
            delimiter: delim,
            linebreak: newline,
            aborted: aborted,
            truncated: !!stopped,
            cursor: lastCursor + (baseIndex || 0)
          }
        };
      }

      /** Executes the user's step function and resets data & errors. */
      function doStep()
      {
        step(returnable(undefined, true));
        data = [];
        errors = [];
      }
    };

    /** Sets the abort flag */
    this.abort = function()
    {
      aborted = true;
    };

    /** Gets the cursor position */
    this.getCharIndex = function()
    {
      return cursor;
    };
  }


  function newWorker()
  {
    if (!Papa.WORKERS_SUPPORTED)
      return false;

    var workerUrl = getWorkerBlob();
    var w = new global.Worker(workerUrl);
    w.onmessage = mainThreadReceivedMessage;
    w.id = workerIdCounter++;
    workers[w.id] = w;
    return w;
  }

  /** Callback when main thread receives a message */
  function mainThreadReceivedMessage(e)
  {
    var msg = e.data;
    var worker = workers[msg.workerId];
    var aborted = false;

    if (msg.error)
      worker.userError(msg.error, msg.file);
    else if (msg.results && msg.results.data)
    {
      var abort = function() {
        aborted = true;
        completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
      };

      var handle = {
        abort: abort,
        pause: notImplemented,
        resume: notImplemented
      };

      if (isFunction(worker.userStep))
      {
        for (var i = 0; i < msg.results.data.length; i++)
        {
          worker.userStep({
            data: msg.results.data[i],
            errors: msg.results.errors,
            meta: msg.results.meta
          }, handle);
          if (aborted)
            break;
        }
        delete msg.results; // free memory ASAP
      }
      else if (isFunction(worker.userChunk))
      {
        worker.userChunk(msg.results, handle, msg.file);
        delete msg.results;
      }
    }

    if (msg.finished && !aborted)
      completeWorker(msg.workerId, msg.results);
  }

  function completeWorker(workerId, results) {
    var worker = workers[workerId];
    if (isFunction(worker.userComplete))
      worker.userComplete(results);
    worker.terminate();
    delete workers[workerId];
  }

  function notImplemented() {
    throw new Error('Not implemented.');
  }

  /** Callback when worker thread receives a message */
  function workerThreadReceivedMessage(e)
  {
    var msg = e.data;

    if (typeof Papa.WORKER_ID === 'undefined' && msg)
      Papa.WORKER_ID = msg.workerId;

    if (typeof msg.input === 'string')
    {
      global.postMessage({
        workerId: Papa.WORKER_ID,
        results: Papa.parse(msg.input, msg.config),
        finished: true
      });
    }
    else if ((global.File && msg.input instanceof File) || msg.input instanceof Object) // thank you, Safari (see issue #106)
    {
      var results = Papa.parse(msg.input, msg.config);
      if (results)
        global.postMessage({
          workerId: Papa.WORKER_ID,
          results: results,
          finished: true
        });
    }
  }

  /** Makes a deep copy of an array or object (mostly) */
  function copy(obj)
  {
    if (typeof obj !== 'object' || obj === null)
      return obj;
    var cpy = Array.isArray(obj) ? [] : {};
    for (var key in obj)
      cpy[key] = copy(obj[key]);
    return cpy;
  }

  function bindFunction(f, self)
  {
    return function() { f.apply(self, arguments); };
  }

  function isFunction(func)
  {
    return typeof func === 'function';
  }

  return Papa;
});


define(
	'Kodella.KDCsvImport.KDCsvParser'
,   [
		'Kodella.KDCsvImport.KDCsvParser.View'
	]
,   function (
		KDCsvParserView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');

			var Cart = container.getComponent('Cart');

			Cart.addChildView('QuickAddView', function ()
			{
				return new KDCsvParserView({ container: container });
			})
			// if(layout)
			// {
			// 	layout.addChildView('Header.Logo', function() { 
			// 		return new KDCsvParserView({ container: container });
			// 	});
			// }

		}
	};
});


};

extensions['Kodella.KDCustomFacets.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDCustomFacets/1.0.0/' + asset;
}

// @module Kodella.KDCustomFacets.KDCustomFacets
define('Kodella.KDCustomFacets.KDCustomFacets.View'
,	[
	'kodella_kdcustomfacets_kdcustomfacets.tpl'
	
	,	'Kodella.KDCustomFacets.KDCustomFacets.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdcustomfacets_kdcustomfacets_tpl
	
	,	KDCustomFacetsSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDCustomFacets.KDCustomFacets.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdcustomfacets_kdcustomfacets_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDCustomFacetsModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDCustomFacets.KDCustomFacets.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDCustomFacets.KDCustomFacets.View.Context
			//this.message = this.message || 'Hello World!!'
			return {
				//message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDCustomFacets.KDCustomFacets.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDCustomFacets.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDCustomFacets.KDCustomFacets.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDCustomFacets/SuiteScript2/KDCustomFacets.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDCustomFacets.KDCustomFacets", [
  "Kodella.KDCustomFacets.KDCustomFacets.View",
  "kodella_facets_news.tpl",
  "underscore",
  "Backbone.CollectionView",
  "Facets.Browse.CategoryHeading.View",
  "kodella_category_heading.tpl",
  "Handlebars",
  "Facets.FacetedNavigation.View",
  "kodella_facets_faceted_dropdown.tpl",
  "Facets.Model",
  "kodella_case_studies_plp.tpl",
  "Utils",
  "Facets.ItemCell.View",
], function (
  KDCustomFacetsView,
  KodellaFacetsNew,
  _,
  BackboneCollection,
  CategoryHeading,
  KodellaCategoryHeading,
  Handlebars,
  Facets,
  KodellaFacetsFiltersCustom,
  FacetModel,
  CaseStudiesPLP,
  Utils,
  ItemCell
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // http's://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var PLP = container.getComponent("PLP");
      if (PLP) {
        var TotalItems = [];
        var WindowSize = $(window).width();
        var NextJson = "";
        var CurrentPage = 0;
        var LimitPages = 0;
        var LastClicked = 0;
        var hasNext = false;

        function ParseDescription(text) {
          var dataHTML = jQuery.parseHTML(text);
          var string = "";
          _.each(dataHTML, function (node) {
            if (node.textContent) {
              string += node.textContent;
            }
          });

          if (string.length >= 220) {
            var truncated = string.trim().substring(0, 220).split(" ").slice(0, -1).join(" ") + "…";
            return truncated;
          } else {
            return string.trim();
          }
        }

        function configurableParseDescription(length, text) {
          var dataHTML = jQuery.parseHTML(text);
          var string = "";
          _.each(dataHTML, function (node) {
            if (node.textContent) {
              string += node.textContent;
            }
          });
          if (string.length >= length) {
            var truncated = string.trim().substring(0, length).split(" ").slice(0, -1).join(" ") + "…";
            return truncated;
          } else {
            return string.trim();
          }
        }

        PLP.on("beforeShowContent", function () {
          var urlPages = window.location.href;
          if (urlPages.includes("news-release")) {
            //IMPORTANT TO PREVENT THE INFINITE REDIRECT
            if (PLP.getPageSize().id !== "10") {
              PLP.setPageSize({ pageSize: "10" });
            }

            var sorting = PLP.getSorting();
            if (sorting.id === "relevance:desc") {
              PLP.setSorting({ sorting: "custitem_kd_new_date:desc" });
            }
          }

          var Filters = PLP.getFilters();
          if (urlPages.includes("keywords")) {
            if (Filters.length === 0) {
              PLP.setFilters({ filters: { custitem_kd_isnew_type: false, custitem_kd_is_case_study: false } });

              setTimeout(function () {
                document.title = "RFI Technology Solutions Search Results";
              }, 1000);
            }
          }
          ItemCell.prototype.getContext = _.wrap(ItemCell.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var DisplayName = self.model.attributes.displayname;
            context.DisplayName = DisplayName;
            return context;
          });

          BackboneCollection.prototype.getContext = _.wrap(BackboneCollection.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var self = this;
            var url = window.location.href;
            if (self.placeholderData.view === "Facets.Items") {
              LimitPages = self.parentView.totalPages;
              if (self.parentView.model.attributes.links.length > 0) {
                NextJson = self.parentView.model.attributes.links[CurrentPage].href;
                hasNext = true;
              }
            }

            if (url.includes("news-release")) {
              self.template = KodellaFacetsNew;
              Handlebars.registerHelper("decodeDescription", function (text) {
                var string = ParseDescription(text);
                return new Handlebars.SafeString(string);
              });
            } else if (url.includes("case-studies")) {
              self.template = CaseStudiesPLP;

              if (context.collection.models) {
                var caseStudiesArr = [];
                var domain = SC.ENVIRONMENT.shoppingDomain;
                context.collection.models.forEach(function (item) {
                  item.attributes.custitem_kd_case_study_intro = ParseDescription(
                    item.attributes.custitem_kd_case_study_intro
                  );
                  item.attributes.custitem_kd_case_study_tags = configurableParseDescription(
                    60,
                    item.attributes.custitem_kd_case_study_tags
                  );
                  item.attributes.facebookurl =
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    domain +
                    "/" +
                    encodeURIComponent(item.attributes.urlcomponent);
                  item.attributes.twitterurl =
                    "https://twitter.com/intent/tweet?text=" +
                    domain +
                    "/" +
                    encodeURIComponent(item.attributes.urlcomponent);
                  item.attributes.custitem_kd_case_study_header_txt = configurableParseDescription(
                    100,
                    item.attributes.custitem_kd_case_study_header_txt
                  );
                  caseStudiesArr.push(item);
                });

                context.collection.models = caseStudiesArr;
                context.pagebanner = self.parentView.model.attributes.category.attributes.pagebannerurl;
              }
            } else {
              self.template = self.template;
            }

            return context;
          });

          CategoryHeading.prototype.getContext = _.wrap(CategoryHeading.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));
            var url = window.location.href;
            if (url.includes("news-release")) {
              this.template = KodellaCategoryHeading;
            } else {
              this.template = this.template;
            }
            return context;
          });

          Facets.prototype.getContext = _.wrap(Facets.prototype.getContext, function (fn) {
            var context = fn.apply(this, _.toArray(arguments).slice(1));

            var url = window.location.href;
            var self = this;
            var AllFacets = self.options.facets;
            var YearNews = [];
            var CategoryNews = [];
            var Filters = PLP.getAllFilters();

            _.each(Filters, function (Facet, index, list) {
              if (Facet.id === "custitem_kd_year_news") {
                var FacetID = Facet.id;
                var Values = Facet.values;
                _.each(Values, function (InnerFacet, index, list) {
                  YearNews.push({ value: InnerFacet.url, label: InnerFacet.label });
                });
              } else if (Facet.id === "custitem_kd_category_news") {
                var FacetID = Facet.id;
                var Values = Facet.values;
                _.each(Values, function (InnerFacet, index, list) {
                  CategoryNews.push({ value: InnerFacet.url, label: InnerFacet.label });
                });
              }
            });

            context.CategoryNews = CategoryNews;
            context.YearFacets = YearNews;
            if (url.includes("news-release")) {
              this.template = KodellaFacetsFiltersCustom;
            } else {
              this.template = this.template;
            }
            return context;
          });
        });
        PLP.on("afterShowContent", function () {
          var url = window.location.href;
          var filters = PLP.getFilters();
          if (filters.length === 0 && url.includes("search")) {
            $(".facets-facet-browse-results").css("display", "none");
          } else {
            $(".facets-facet-browse-results").css("display", "block");
            if (url.includes("keywords")) {
              setTimeout(function () {
                document.title = "RFI Technology Solutions Search Results";
              }, 1000);
            }
          }

          if (url.includes("news-release")) {
            var YearsArray = [];
            var YearOptions = $("#FacetYear option").each(function () {
              YearsArray.push(this.value);
            });

            $("#FacetYear option").remove();

            YearsArray.sort(function (x, y) {
              return y - x;
            });

            var select = document.getElementById("FacetYear");
            console.log(select);
            var optionDefault = document.createElement("Option");
            optionDefault.value = "";
            optionDefault.innerHTML = "Year";
            select.appendChild(optionDefault);
            YearsArray.forEach(function (element, index) {
              console.log(element);
              var option = document.createElement("option");
              option.value = element;
              option.innerHTML = element;
              if (option.innerHTML === "") {
                this.remove();
              }
              select.appendChild(option);
            });

            console.log(YearsArray);
          }
        });

        BackboneCollection.prototype.getContext = _.wrap(BackboneCollection.prototype.getContext, function (fn) {
          var url = window.location.href;

          var LimitPages = 0;
          var LastClicked = 0;
          var self = this;
          LimitPages = self.parentView.totalPages;

          if (LimitPages <= 1) {
            hasNext = false;
          }

          if (url.includes("news-release")) {
            this.template = KodellaFacetsNew;
          } else {
            this.template = this.template;
          }

          var context = fn.apply(this, _.toArray(arguments).slice(1));

          PLP.on("afterShowContent", function () {
            var url = window.location.href;
            var filters = PLP.getFilters();

            if (filters.length < 3 && !url.includes("news-release")) {
              // $('.facets-facet-browse-narrowedby').hide();
              // $('.facets-faceted-navigation-title').hide();
              // $('.facets-faceted-navigation-facets-clear').hide();
            }

            $('[data-facet-id="false"]').css("display", "none");

            if (hasNext) {
              $("#CTAContainer").html('<button id="CTALoadMore">LOAD MORE </button>');
            }

            if (url.includes("news-release")) {
              var LastPlace = Backbone.history.getFragment();
              var CurrentFilters = PLP.getFilters();
              if (WindowSize < 768) {
                var Append = $(".facets-item-list-sort-selector").appendTo("#ContainerFacets");
              }

              //change the relevance text to Sort By
              $(".relevance-desc").text("Sort by");
              $("#TriggerSearch").click(function () {
                var Value = $("#SearchValue").val();
                var URL = "search?keywords=" + Value + "&custitem_kd_isnew_type=true";
                alert(URL);
                Backbone.history.navigate(URL, { trigger: true });
              });

              $(".facets-facet-browse-facets").appendTo("#ContainerFacets");
              $(".facets-facet-browse-facets").removeAttr("data-action");
              $(".facets-facet-browse-facets").removeClass("facets-facet-browse-facets");

              if (WindowSize > 768) {
                $(".facets-item-list-sort-selector").appendTo("#ContainerSort");
              }
              $("#FacetCategory").change(function () {
                var FacetedValue = $(this).val();
                if (CurrentFilters.length > 0) {
                  var CurrentFilterID = CurrentFilters[0].id;
                  var CurrentFilterValue = CurrentFilters[0].value;
                  PLP.setFilters({
                    filters: { [CurrentFilterID]: CurrentFilterValue, custitem_kd_category_news: FacetedValue },
                  });
                } else {
                  PLP.setFilters({ filters: { custitem_kd_category_news: FacetedValue } });
                }
              });

              $("#FacetYear").change(function () {
                var FacetedValue = $(this).val();
                if (CurrentFilters.length > 0) {
                  var CurrentFilterID = CurrentFilters[0].id;
                  var CurrentFilterValue = CurrentFilters[0].value;
                  PLP.setFilters({
                    filters: { [CurrentFilterID]: CurrentFilterValue, custitem_kd_year_news: FacetedValue },
                  });
                } else {
                  PLP.setFilters({ filters: { custitem_kd_year_news: FacetedValue } });
                }
              });

              var CTAtriggered = false;

              if (!CTAtriggered) {
                if (WindowSize < 768) {
                  $("#ContainerItems").children().css("display", "flex");
                } else {
                }

                LastClicked = LastClicked + 1;
              }

              $("#CTALoadMore").click(function () {
                $.get(NextJson, function (data) {
                  var IMGItem = "";
                  var IMGAlt = "";
                  _.each(data.items, function (item) {
                    var ItemImage = item.itemimages_detail;
                    var ItemDescription = ParseDescription(item.custitem_kd_new_content);
                    var FirstElement = ItemImage[Object.keys(ItemImage)[0]];
                    var DisplayName = item.displayname;
                    if (FirstElement) {
                      IMGItem = FirstElement.url;
                      IMGAlt = FirstElement.altimagetext;
                    } else {
                      IMGItem = "";
                      IMGAlt = "";
                    }

                    var ItemHTML = '<div class="container-to-news"><div class="container-description">';
                    ItemHTML +=
                      '<div class="initial-info-new"><p class="date-facet">' + item.custitem_kd_new_date + "</p>";
                    ItemHTML +=
                      '<a href="' +
                      item.urlcomponent +
                      '" data-touchpoint="home"><p class="p-news name-facet">' +
                      item.displayname +
                      "</p></a>";
                    ItemHTML += '</div><div class="img-news"><img src="' + IMGItem + '" alt="' + IMGAlt + '" /></div>';
                    ItemHTML +=
                      '<p class="description-facet description-p-' +
                      item.internalid +
                      '">' +
                      ItemDescription +
                      "</p></div></div>";
                    $("#CtaResults").append(ItemHTML);
                  });

                  if (LastClicked < LimitPages) {
                    NextJson = data.links[1].href;
                  }
                });

                CTAtriggered = true;
                if (WindowSize < 768) {
                  $("#ContainerItems").children().css("display", "flex");
                }

                if ($("#ShowContent")) {
                  $("#ShowContent").remove();
                }

                LastClicked = LastClicked + 1;
                if (LastClicked === LimitPages) {
                  this.disabled = "true";
                  this.innerText = "No more news to load";
                  this.style.backgroundColor = "#d5d5d5";
                  this.style.color = "#777";
                }
              });
            }
          });

          return context;
        });
      }
    },
  };
});


};

extensions['Kodella.KDGlobalExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDGlobalExtension/1.0.0/' + asset;
}

// @module Kodella.KDGlobalExtension.KDGlobalExtension
define('Kodella.KDGlobalExtension.KDGlobalExtension.View'
,	[
	'kodella_kdglobalextension_kdglobalextension.tpl'
	
	,	'Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdglobalextension_kdglobalextension_tpl
	
	,	KDGlobalExtensionSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDGlobalExtension.KDGlobalExtension.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdglobalextension_kdglobalextension_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDGlobalExtensionModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDGlobalExtension.KDGlobalExtension.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDGlobalExtension.KDGlobalExtension.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDGlobalExtension.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDGlobalExtension/SuiteScript2/KDGlobalExtension.Service.ss"
            ),
            true
        )
});
});



define(
	'Kodella.KDGlobalExtension.KDGlobalExtension'
,   [
		'Kodella.KDGlobalExtension.KDGlobalExtension.View',
		'jQuery'
	]
,   function (
		KDGlobalExtensionView,
		jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */


			// jQuery(document).ready(function(){
			// 	if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
			// 		jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
			// 	}

			// });

			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.on('afterShowContent', function(){


				// if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/)) {
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }else if(navigator.userAgent.match(/(iPod|iPhone|iPad|Macintosh)/) && navigator.userAgent.match('Chrome') || navigator.userAgent.match('Firefox') ){
				// 	jQuery('.header-mini-cart-menu-cart-link').addClass('cartTop');
				// }

                var casesButton = document.querySelectorAll('[data-id="cases"]');
				if(casesButton.length > 0){
					casesButton[0].remove();
				}

				var casesMenu = document.querySelectorAll("[data-permissions='lists.listCase.2']")
				if(casesMenu.length > 0){
					casesMenu[0].remove();	
				}

				
				var casesMobile = document.querySelectorAll("[name='submitnewcase']")
				if(casesMobile.length > 0){
					casesMobile[0].remove();	
				}


				var li = document.querySelectorAll(".list-type");	
				var ListType = jQuery('.list-type').parent().children('ul');
				 for (var i = 0; i<ListType.length; i++) {
				   ListType[i].firstElementChild.classList.add("custom-change-submenu-only");		
					 }		  
					 jQuery('.custom-change-submenu-only').children('ul').css('display', 'block');
					 jQuery('.cms-menu').css('position', 'initial');
					 jQuery('.list-type').parent().css('position', 'relative');



				});
			}

		}
	};
});


};

extensions['Kodella.KDPDPCustom.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDPDPCustom/1.0.0/' + asset;
}

// @module Kodella.KDPDPCustom.KDPDPCustom
define('Kodella.KDPDPCustom.KDPDPCustom.View'
,	[
	'kodella_kdpdpcustom_kdpdpcustom.tpl'
	
	,	'Kodella.KDPDPCustom.KDPDPCustom.SS2Model'
	
	,	'Backbone'
    ]
, function (
	kodella_kdpdpcustom_kdpdpcustom_tpl
	
	,	KDPDPCustomSS2Model
	
	,	Backbone
)
{
    'use strict';

	// @class Kodella.KDPDPCustom.KDPDPCustom.View @extends Backbone.View
	return Backbone.View.extend({

		template: kodella_kdpdpcustom_kdpdpcustom_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new KDPDPCustomModel();
			// var self = this;
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return Kodella.KDPDPCustom.KDPDPCustom.View.Context
	,	getContext: function getContext()
		{
			//@class Kodella.KDPDPCustom.KDPDPCustom.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDPDPCustom.KDPDPCustom.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDPDPCustom.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDPDPCustom.KDPDPCustom.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDPDPCustom/SuiteScript2/KDPDPCustom.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDPDPCustom.KDPDPCustom", [
  "Kodella.KDPDPCustom.KDPDPCustom.View",
  "ProductDetails.Full.View",
  "kodella_news_pdp.tpl",
  "kodella_case_studies_pdp.tpl",
  "Handlebars",
  "underscore",
  "Profile.Model",
], function (
  KDPDPCustomView,
  PDPFull,
  PDPCustomNews,
  PDPCaseStudies,
  Handlebars,
  _,
  ProfileModel
) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

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
              var isNew = ItemInfo.item.custitem_kd_isnew_type;
              var isCaseStudy = ItemInfo.item.custitem_kd_is_case_study;
              var self = this;
              var pdfName = "";
              var idItem = ItemInfo.item.internalid;
              var url =
                "/app/site/hosting/scriptlet.nl?script=1755&deploy=1&compid=3389566&h=f81371769cae5fdf1f59&id=" +
                idItem;
              jQuery
                .ajax({
                  url: url,
                  data: "",
                  async: false,
                })
                .done(function (data) {
                  //pdfName = data
                  if (data.includes("&trade")) {
                    data.replace("&trade", "");
                  }
                  data = data.split("<")[0];

                  var jsonPDF = JSON.parse(data);
                  if (jsonPDF.file1) {
                    context.pdf1 = jsonPDF.file1.split('"').join("");
                  }
                  if (jsonPDF.file2) {
                    context.pdf2 = jsonPDF.file2.split('"').join("");
                  }
                  if (jsonPDF.file3) {
                    context.pdf3 = jsonPDF.file3.split('"').join("");
                  }
                  if (jsonPDF.file4) {
                    context.pdf4 = jsonPDF.file4.split('"').join("");
                  }
                  if (jsonPDF.file5) {
                    context.pdf5 = jsonPDF.file5.split('"').join("");
                  }
                  if (jsonPDF.file6) {
                    context.pdf6 = jsonPDF.file6.split('"').join("");
                  }
                  if (jsonPDF.file7) {
                    context.pdf7 = jsonPDF.file7.split('"').join("");
                  }
                  if (jsonPDF.file8) {
                    context.pdf8 = jsonPDF.file8.split('"').join("");
                  }
                  if (jsonPDF.file9) {
                    context.pdf9 = jsonPDF.file9.split('"').join("");
                  }
                  if (jsonPDF.file10) {
                    context.pdf10 = jsonPDF.file10.split('"').join("");
                  }
                  if (jsonPDF.file11) {
                    context.pdf11 = jsonPDF.file11.split('"').join("");
                  }
                  if (jsonPDF.file12) {
                    context.pdf12 = jsonPDF.file12.split('"').join("");
                  }
                  if (jsonPDF.file13) {
                    context.pdf13 = jsonPDF.file13.split('"').join("");
                  }
                  if (jsonPDF.file14) {
                    context.pdf14 = jsonPDF.file14.split('"').join("");
                  }
                  if (jsonPDF.file15) {
                    context.pdf15 = jsonPDF.file15.split('"').join("");
                  }
                  if (jsonPDF.file16) {
                    context.pdf16 = jsonPDF.file16.split('"').join("");
                  }
                  if (jsonPDF.file17) {
                    context.pdf17 = jsonPDF.file17.split('"').join("");
                  }
                  if (jsonPDF.file18) {
                    context.pdf18 = jsonPDF.file18.split('"').join("");
                  }
                  if (jsonPDF.file19) {
                    context.pdf19 = jsonPDF.file19.split('"').join("");
                  }
                  if (jsonPDF.file20) {
                    context.pdf20 = jsonPDF.file20.split('"').join("");
                  }

                  if (jsonPDF.file21) {
                    context.pdf21 = jsonPDF.file21.split('"').join("");
                  }
                  if (jsonPDF.file22) {
                    context.pdf22 = jsonPDF.file22.split('"').join("");
                  }
                  if (jsonPDF.file23) {
                    context.pdf23 = jsonPDF.file23.split('"').join("");
                  }
                  if (jsonPDF.file24) {
                    context.pdf24 = jsonPDF.file24.split('"').join("");
                  }
                  if (jsonPDF.file25) {
                    context.pdf25 = jsonPDF.file25.split('"').join("");
                  }
              
                  if (jsonPDF.hasOwnProperty("lengthExtras")) {
                    var itemskus = [];
                    
                      for(var i = 0;i<jsonPDF.lengthExtras.length;i++) 
					  {

						  var pdfsku = (jsonPDF.lengthExtras[i]).name
						  itemskus.push((pdfsku.split(" "))[0]);
                      }             
                    var skuname = [];
					for(var j = 0;j<itemskus.length;j++)
					{

						if(itemskus[j].split("_")[1]  == ItemInfo.item.itemid){                                                      
						skuname.push(jsonPDF.lengthExtras[j]);

						}
					}
					context.pdfsExtras = skuname;
                  }
                });
              var noQuotes = pdfName.split('"').join("");
              //context.pdfName = noQuotes;
              if (isNew) {
                self.template = PDPCustomNews;
                Handlebars.registerHelper(
                  "decodeFullDescription",
                  function (text) {
                    var dataHTML = jQuery.parseHTML(text);
                    var string = "";
                    _.each(dataHTML, function (node) {
                      if (node.outerHTML) {
                        string += node.outerHTML;
                      } else if (node.textContent) {
                        string += node.textContent;
                      }
                    });
                    return new Handlebars.SafeString(string);
                  }
                );

                /* 
								DESCRIPTION:
									Si no llego a la url, hago un bucle por cada uno de sus sub-objetos hasta encontrarla y devolverla
									1- busco una posicion mas dentro del objeto
									2- si la encuentro, la asigno a FirstImage y lo devuelvo, sino, hago un bucle hasta encontrarla y devolverla
									3- retorno la url
								*/
                function setFirstImage(jsonImage) {
                  var FirstImage = jsonImage[Object.keys(jsonImage)[0]];
                  var { url } = FirstImage;

                  while (typeof url === "undefined") {
                    FirstImage = FirstImage[Object.keys(FirstImage)[0]];
                    var { url } = FirstImage;
                  }

                  FirstImage = url;
                  return FirstImage;
                }

                var ItemImage = ItemInfo.item.itemimages_detail;
                if (!_.isEmpty(ItemImage)) {
                  var FirstImage = ItemImage[Object.keys(ItemImage)[0]].url;

                  typeof FirstImage === "undefined"
                    ? (FirstImage = setFirstImage(ItemImage)) //busca y devuelve la url dentro del objeto
                    : (FirstImage = FirstImage);
                }
                context.FirstImage = FirstImage;
              } else if (isCaseStudy) {
                self.template = PDPCaseStudies;
                var tagArray = [];
                if (ItemInfo.item.custitem_kd_case_study_tags) {
                  tagArray =
                    ItemInfo.item.custitem_kd_case_study_tags.split(",");
                }
                context.imageHeader =
                  self.model.attributes.item.attributes.custitem_kd_case_study_header_img;
                context.tags = tagArray;
              } else {
                //formatting description
                PDP.on("afterShowContent", function () {
                  var parent = document.getElementById("tab-description");
                  var child = parent.children;
                  var text;
                  if (child.length > 0) {
                    text = child[0].innerHTML;
                  } else {
                    text = parent.innerHTML;
                  }
                  var string = text,
                    separator = ".\n",
                    substring = string.split(separator);
                  for (i = 0; i < substring.length; i++) {
                    if (i % 2 == 1) {
                      substring.splice([i], 0, ".</br></br>");
                      substring.join("");
                      // arregloDeSubCadenas[i] = '</br>'
                    }
                  }
                  if (child.length > 0) {
                    var p = substring.join("");
                    child[0].innerHTML = p;
                  } else {
                    var p = substring.join("");
                    parent.innerHTML = p;
                  }
                  self.template = self.template;

                  var customTableElements = document.querySelectorAll(
                    "table.custom-table tbody tr td"
                  );
                  customTableElements.forEach(function (element) {
                    if (element.innerText.indexOf("&lt;") !== -1) {
                      var withoutCharacter = element.innerText.replaceAll(
                        "&lt;",
                        "<"
                      );
                      console.log(withoutCharacter);
                      element.innerText = withoutCharacter;
                    }
                  });
                });
              }
              return context;
            }
          );
        });

        PDP.on("afterShowContent", function () {
          var ItemInfo = PDP.getItemInfo();
          var isNew = ItemInfo.item.custitem_kd_isnew_type;
          //Adding target blank if the url is for PDF (otherwise it wont open)
          if (isNew) {
            var bodyArticle =
              document.getElementsByClassName("article-paragraph")[0];
            var children = bodyArticle.childNodes;
            children.forEach(function (element, index) {
              if (element.nodeName == "A") {
                if (element.href.indexOf(".pdf") !== -1) {
                  element.target = "_blank";
                }
              }
            });
          }
        });

        // PDP.on("afterShowContent", function () {
        // 	var ProfileModelInstanced = ProfileModel.getInstance();

        // 	var Status = ProfileModelInstanced.attributes.isLoggedIn;

        // 	if (Status === "F") {

        // 		$('.custom-button-request-quote').css('display', 'none');
        // 	}

        // });
      }
    },
  };
});


};

extensions['Kodella.KDShowOutOFstockMessageNonInventory.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/KDShowOutOFstockMessageNonInventory/1.0.0/' + asset;
}

// @module Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory
define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View", [
  "kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory.tpl",

  "Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.SS2Model",

  "Backbone",
], function (
  kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory_tpl,

  KDShowOutOFstockMessageNonInventorySS2Model,

  Backbone
) {
  "use strict";

  // @class Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View @extends Backbone.View
  return Backbone.View.extend({
    template: kodella_kdshowoutofstockmessagenoninventory_kdshowoutofstockmessagenoninventory_tpl,

    initialize: function (options) {
      var pdp = options.container.getComponent("PDP");
      var self = this;
      try {
        if (pdp) {
          var iteminfo = pdp.getItemInfo();

          //obstain item info
          if (!iteminfo) return;
          if (
            iteminfo.hasOwnProperty("item") &&
            !iteminfo.item.custitem_ispurchasable &&
            iteminfo.item.outofstockmessage &&
			(iteminfo.item.custitem_ispurchasable !== undefined) &&  (iteminfo.item.custitem_ispurchasable !== null) // custitem_ispurchasable field is only applied to non-inventory items
          ) {
            //obtain the out of stock message and check if the item is available online, send the data to the template
            self.oufofstockmessage = iteminfo.item.outofstockmessage;
            self.ispurchasable = !iteminfo.item.custitem_ispurchasable; //tiene que ser false para que se muestre el mensaje
          }
        }
      } catch (error) {
        console.log(error);
        self.ispurchasable = false;
      }

      /*  Uncomment to test backend communication with an example service
                  (you'll need to deploy and activate the extension first)
              */
      // this.model = new KDShowOutOFstockMessageNonInventoryModel();
      // var self = this;
      // this.model.fetch().done(function(result) {
      // 	self.message = result.message;
      // 	self.render();
      // });
    },

    events: {},

    bindings: {},

    childViews: {},

    //@method getContext @return Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View.Context
    getContext: function getContext() {
      //@class Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View.Context
      //this.message = this.message || "Hello World!!";
      return {
        oufofstockmessage: this.oufofstockmessage,
        ispurchasable: this.ispurchasable,
      };
    },
  });
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/KDShowOutOFstockMessageNonInventory.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/KDShowOutOFstockMessageNonInventory/SuiteScript2/KDShowOutOFstockMessageNonInventory.Service.ss"
            ),
            true
        )
});
});


define("Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory", [
  "Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View",
], function (KDShowOutOFstockMessageNonInventoryView) {
  "use strict";

  return {
    mountToApp: function mountToApp(container) {
      // using the 'Layout' component we add a new child view inside the 'Header' existing view
      // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
      // more documentation of the Extensibility API in
      // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

      /** @type {LayoutComponent} */
      var layout = container.getComponent("Layout");
      var pdp = container.getComponent("PDP");

      if (layout && pdp) {
        layout.addChildView("Product.Stock.Info", function () {
          return new KDShowOutOFstockMessageNonInventoryView({
            container: container,
          });
        });
      }
    },
  };
});


};

extensions['CA.MyAccountCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CA/MyAccountCustomization/1.0.0/' + asset;
}

// @module CA.MyAccountCustomization.RoleBasedMyAccount
define('CA.MyAccountCustomization.RoleBasedMyAccount.View'
,	[
	'ca_myaccountcustomization_rolebasedmyaccount.tpl'
	
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model'
	
	,	'Backbone'
	
	,'Header.Menu.MyAccount.View'

	,"MyAccountMenu"

	,"MenuTree.View"

	, "Backbone.View"

	,"Header.View"

	, "ProductDetails.Base.View"

	,"Profile.Model"

	, "Cart.Detailed.View"

	, "Utils"
	
    , "ProductList.Lists.View"
	
    ,"Backbone.Model"
	
    , "ProductList.ListDetails.View"
    ]
, function (
	ca_myaccountcustomization_rolebasedmyaccount_tpl
	
	,	RoleBasedMyAccountSS2Model
	
	,	Backbone
	
	,  HeaderMenuMyAccountView

	, myaccount

	, MenuTreeView

	, BackboneView

	, HeaderView

	, ProductDetailsBaseView

	, ProfileModel

	, CartDetailedView

	, Utils

    , ProductListListsView

    , BackboneModel

    , ProductListListDetailsView
)
{
    'use strict';

	_.extend(HeaderMenuMyAccountView.prototype, {

     getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function getContext(fn){
		var context = fn.apply(this, _.toArray(arguments).slice(1));
		    var role = this.options.application.role;
			MenuTreeView.prototype.render = _.wrap(MenuTreeView.prototype.render, function(...args){

			this.modifiedentries = this.backwardCompatibilitySanitize(
                 myaccount.MyAccountMenu.getInstance().getEntries() 
            );
			if(role == "purchasing"){
				   var menuitems = [];
				   var removeditem = ["home","billing","settings"];
				  _.each(this.modifiedentries, function(item){
					if(removeditem.includes(item.id)){

					}else{
						menuitems.push(item)
					}
				  })
			}
			else if(role == "sales"){	   
			   var menuitems = [];
                var removeditem = ["home","billing","settings"];
               _.each(this.modifiedentries, function(item){
                 if(removeditem.includes(item.id)){

                 }else{
                    menuitems.push(item)   
                 }
               })
               var removedsubentries = ["purchases","returns","reorderitems"];
               for(var i=0;i<menuitems.length;i++)
			   {
					if(menuitems[i].id == "orders"){
						console.log("test treee here", menuitems)
						var menuitemschildren = [];
						_.each(menuitems[i].children, function(child){
							if(removedsubentries.includes(child.id)){
		   
							}else{
								menuitemschildren.push(child)   
							}
						  })
						  menuitems[i].children = menuitemschildren;
					}
				}
			   
			}
			else {
				var menuitems = this.modifiedentries
			}

			this.fixedMenuItems = menuitems

			BackboneView.prototype.render.apply(this, args);
		
			})
			if(role !="fullaccess"){
				context.isToShow = false;
				context.isToShowpurchase = true;
				context.showCases = false;
				if(role == "sales"){
					context.isToShowpurchase = false;
				}
			}else{
				context.isToShow = true;
				context.isToShowpurchase = true;
				context.showCases = true;
			}
			return context;
        })
    }); 
	HeaderView.prototype.getContext = _.wrap(HeaderView.prototype.getContext, function (fn) {
		
        const profile = ProfileModel.getInstance();

        const is_loading = (!Utils.getPathFromObject(SC.CONFIGURATION, 'performance.waitForUserProfile', true) && (ProfileModel.getPromise().state() !== 'resolved'));

        const is_logged_in = (profile.get('isLoggedIn') === 'T' || (profile.get('isRecognized') === 'T' && SC.CONFIGURATION.get('header.showRecognizedShopper', true))) && profile.get('isGuest') === 'F';
            
		var context = fn.apply(this, _.toArray(arguments).slice(1));        
            
		context.islogin = !is_loading && is_logged_in;

        if(this.application.role == "sales")
		{

           context.showCart = false;

        }
        else{

           context.showCart = true;

        }

        return context;

	    });


	ProductDetailsBaseView.prototype.getContext = _.wrap(ProductDetailsBaseView.prototype.getContext, function (fn) {	

	var context = fn.apply(this, _.toArray(arguments).slice(1));		

	const item_model = this.model.get('item');
// @class ProductDetails.Base.View.Context
		return {
			// @property {Transaction.Line.Model} model
			model: this.model,
			// @property {String} pageHeader
			pageHeader: this.page_header,
			// @property {String} itemUrl
			itemUrl: item_model.get('_url') + this.model.getQuery(),
			// @property {Boolean} isItemProperlyConfigured
			isItemProperlyConfigured: item_model.isProperlyConfigured(),
			// @property {Boolean} isPriceEnabled
			isPriceEnabled: !ProfileModel.getInstance().hidePrices(),

			Toshowcart: (this.application.role == "sales")?false:true
		};

		return context;
	})
	CartDetailedView.prototype.getContext = _.wrap(CartDetailedView.prototype.getContext, function (fn) {	

		var context = fn.apply(this, _.toArray(arguments).slice(1));
		
		if(this.application.role == "sales"){
			context.toshowcart = false;
		}else{
			context.toshowcart = true;
		}
		return context;
	})	
	
	ProductListListDetailsView.prototype.getContext = _.wrap(ProductListListDetailsView.prototype.getContext, function(fn){
		
            var context = fn.apply(this, _.toArray(arguments).slice(1));
			
            if(this.parentView.parentView.application.role == "sales"){
                context.toshow = false;
            }else{
                context.toshow = true;
            }
            return context;
    });
		
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/RoleBasedMyAccount.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/RoleBasedMyAccount/SuiteScript2/RoleBasedMyAccount.Service.ss"
            ),
            true
        )
});
});



define(
	'CA.MyAccountCustomization.RoleBasedMyAccount'
,   [
		'CA.MyAccountCustomization.RoleBasedMyAccount.View'
	,	'CA.MyAccountCustomization.RoleBasedMyAccount.Model'	
	,	'ProductList.BulkActions.View'
	]
,   function (
		RoleBasedMyAccountView
	,	RoleBasedMyAccountModel	
	, 	ProductListBulkActionsView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (application)
		{
			var newmodel = new RoleBasedMyAccountModel();
			 var promise = newmodel.fetch()
			.then((result) => {
			 if (_.has(result, 'role') && _.has(result, 'user')) {
				 if(result.role == 1149)
					 application.role = 'sales';
				 else if(result.role == 1150)
					 application.role = 'purchasing';
				 else
					 application.role = 'fullaccess';
			 
			 }
			}); 
			application.waitForPromise(promise);
			
			ProductListBulkActionsView.prototype.getContext = _.wrap(ProductListBulkActionsView.prototype.getContext, function (fn) {
				
				var context = fn.apply(this, _.toArray(arguments).slice(1));
				
				if(application.role == "sales")
				{		
					context.toshowaddtocart = false
	
				}else{
	
					context.toshowaddtocart = true
				}		
				return context;
			});

		}
	};
});


};

extensions['Kodella.ProductSalesTemplate2.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/ProductSalesTemplate2/1.0.0/' + asset;
}

// @module Kodella.ProductSalesTemplate2.ProductSalesPage2
define('Kodella.ProductSalesTemplate2.ProductSalesPage2.View'
	, [
		'kodella_productsalestemplate2_productsalespage2.tpl'

		, 'Kodella.ProductSalesTemplate2.ProductSalesPage2.SS2Model'

		, 'CustomContentType.Base.View'
	]
	, function (
		kodella_productsalestemplate2_productsalespage2_tpl

		, ProductSalesPage2SS2Model

		, CustomContentTypeBaseView
	) {
		'use strict';

		return CustomContentTypeBaseView.extend({

			template: kodella_productsalestemplate2_productsalespage2_tpl

			, events: {
				'click [data-banner="psp2"]': 'setOptions'
			}

			, install: function install(settings, context_data) {
				return this._install(settings, context_data);
			}

			, getContext: function getContext() {
				return {
					heading_title: this.settings.custrecord_cctpsp2_heading,
					heading_description: this.settings.custrecord_cctpsp2_heading_description,
					product_benefits: this.settings.custrecord_cctpsp2_product_benefits,
					product_benefits_description: this.settings.custrecord_cctpsp2_product_benefits_des,
					product_benefits_image: this.settings.custrecord_cctpsp2_product_benefits_img,
					key_benefits_1: this.settings.custrecord_cctpsp2_key_benefits_1,
					key_benefits_1_title: this.settings.custrecord_cctpsp2_key_benefits_1_title,
					key_benefits_2: this.settings.custrecord_cctpsp2_key_benefits_2,
					key_benefits_2_title: this.settings.custrecord_cctpsp2_key_benefits_2_title,
					key_benefits_3: this.settings.custrecord_cctpsp2_key_benefits_3,
					key_benefits_3_title: this.settings.custrecord_cctpsp2_key_benefits_3_title,
					key_benefits_4: this.settings.custrecord_cctpsp2_key_benefits_4,
					key_benefits_4_title: this.settings.custrecord_cctpsp2_key_benefits_4_title,
					key_benefits_5: this.settings.custrecord_cctpsp2_key_benefits_5,
					key_benefits_5_title: this.settings.custrecord_cctpsp2_key_benefits_5_title,
					key_benefits_6: this.settings.custrecord_cctpsp2_key_benefits_6,
					key_benefits_6_title: this.settings.custrecord_cctpsp2_key_benefits_6_title,
					key_benefits_7: this.settings.custrecord_cctpsp2_key_benefits_7,
					key_benefits_7_title: this.settings.custrecord_cctpsp2_key_benefits_7_title,
					key_benefits_8: this.settings.custrecord_cctpsp2_key_benefits_8,
					key_benefits_8_title: this.settings.custrecord_cctpsp2_key_benefits_8_title,
					key_benefits_9: this.settings.custrecord_cctpsp2_key_benefits_9,
					key_benefits_9_title: this.settings.custrecord_cctpsp2_key_benefits_9_title,
					customer_quote_title: this.settings.custrecord_cctpsp2_customers_quote_title,
					customer_quote: this.settings.custrecord_cctpsp2_customers_quote,
					customer_quote_photo: this.settings.custrecord_cctpsp2_customers_photo,
					product_features_title: this.settings.custrecord_cctpsp2_product_features,
					product_features_description: this.settings.custrecord_cctpsp2_product_features_des,
				};
			}
		});
	});


// Model.js
// -----------------------
// @module Case
define("Kodella.ProductSalesTemplate2.ProductSalesPage2.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ProductSalesPage2.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("Kodella.ProductSalesTemplate2.ProductSalesPage2.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ProductSalesPage2/SuiteScript2/ProductSalesPage2.Service.ss"
            ),
            true
        )
});
});



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


};

extensions['Kodella.SCCCTEncourage.2.1.1'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Kodella/SCCCTEncourage/2.1.1/' + asset;
}

// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('Example.SCCCTEncourage.Encourage.View'
, [
    'CustomContentType.Base.View'
  , 'example_sccctencourage_encourage.tpl'
  ]
, function
  (
    CustomContentTypeBaseView
  , encourage_tpl
  )
{
  'use strict';

  return CustomContentTypeBaseView.extend({
    template: encourage_tpl

  , events: {
      'click [data-banner="encourage"]': 'setOptions'
    }

  , install: function install (settings, context_data)
    {
      //console.log('Context:');
      //console.log(context_data);
      //console.log('Settings:');
      //console.log(settings);
     // this.pdp = this.application.getComponent('PDP');
      return this._install(settings, context_data);
    }

  , getContext: function getContext ()
    {
      return {
        banner: this.settings.custrecord_cctenc_banner
      , alt_text: this.settings.custrecord_cctenc_alt
      , title: this.settings.custrecord_cctenc_title
      }
    }
  });
});


// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('Example.SCCCTEncourage.Encourage'
, [
    'Example.SCCCTEncourage.Encourage.View'
  ]
, function
  (
    EncourageView
  )
{
  'use strict'

  return {
    mountToApp: function mountToApp (application)
    {
      // Normal way is to pass it as an option to the view
      // var pdp = application.getComponent('PDP');

      // For console debugging purposes only
      // SC.PDP = application.getComponent('PDP');

      // However, we can't pass this via registerCustomContentType(), so we have to prototype the view and add it as a value

      EncourageView.prototype.application = application;

      application.getComponent('CMS').registerCustomContentType({
        id: 'cct_example_sccctencourage'
      , view: EncourageView
      });
    }
  }
});

};

extensions['CloudAlp.ShoppingCustomization.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/CloudAlp/ShoppingCustomization/1.0.0/' + asset;
}

// @module CloudAlp.ShoppingCustomization.ShoppingCustomization
define('CloudAlp.ShoppingCustomization.ShoppingCustomization.View'
,	[
	'cloudalp_shoppingcustomization_shoppingcustomization.tpl'
	
	,	'CloudAlp.ShoppingCustomization.ShoppingCustomization.Model'
	
	,	'Backbone'
    ]
, function (
	cloudalp_shoppingcustomization_shoppingcustomization_tpl
	
	,	ShoppingCustomizationModel
	
	,	Backbone
)
{
    'use strict';

	// @class CloudAlp.ShoppingCustomization.ShoppingCustomization.View @extends Backbone.View
	return Backbone.View.extend({

		template: cloudalp_shoppingcustomization_shoppingcustomization_tpl

	,	initialize: function (options) {

			
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return CloudAlp.ShoppingCustomization.ShoppingCustomization.View.Context
	,	getContext: function getContext()
		{
			//@class CloudAlp.ShoppingCustomization.ShoppingCustomization.View.Context
			return null;
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShoppingCustomization.ShoppingCustomization.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/ShoppingCustomization.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("CloudAlp.ShoppingCustomization.ShoppingCustomization.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ShoppingCustomization/SuiteScript2/ShoppingCustomization.Service.ss"
            ),
            true
        )
});
});



define(
	'CloudAlp.ShoppingCustomization.ShoppingCustomization'
,   [
		'CloudAlp.ShoppingCustomization.ShoppingCustomization.View'
	, 	'Home.View'
    , 	'Utils'
    , 	'underscore'	
	]
,   function (
		ShoppingCustomizationView
	, 	HomeView
    , 	Utils
    , 	underscore	
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var layout = container.getComponent('Layout');
			layout.on('afterShowContent', () => {
			  if ($('#content').find('.home-page').length !== 0) {
				$('.shopping-layout-content').addClass('home-new-layout');
			  } else {
				$('.shopping-layout-content').removeClass('home-new-layout');
			  }
			});
			_.extend(HomeView.prototype, {
				initSlider: function initSlider() {
					Utils.initBxSlider(this.$('.bxslider'), {
					  autoStart: true,
					  auto: true,
					  pager: true,
					  controls: false,
					  forceStart: true,
					  preloadImages: "all",
					  touchEnabled: true,
					  infiniteLoop: true,
					  responsive: true
					});
				},
				initialize: _.wrap(HomeView.prototype.initialize, function initialize(fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					this.options.application.getLayout().on('afterAppendView', this.initSlider, this);
				}),
				getContext: _.wrap(HomeView.prototype.getContext, function getContext(fn) {
					var ret = fn.apply(this, _.toArray(arguments).slice(1));
					var configSlideData = SC.CONFIGURATION.ShoppingCustomization.desktop;
						if (!_.isEmpty(configSlideData)) {
						  ret.configSlideData = configSlideData;
						}
						else{
							ret.configSlideData = [];
						}
					var configSlideMobileData = SC.CONFIGURATION.ShoppingCustomization.mobile;
						if (!_.isEmpty(configSlideMobileData)) {
						  ret.configSlideMobileData = configSlideMobileData;
						}
						else {
						  ret.configSlideMobileData = [];
						}
					var ourProducts = SC.CONFIGURATION.OurProducts.config;
						if (!_.isEmpty(ourProducts)) {
						  ret.ourProducts = ourProducts;
						}
						else {
						  ret.ourProducts = [];
						}
					return ret;
				  })
			});
			
		}
	};
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["Kodella.CCTProductTPLOne.CCTProductTPLOne.View","Kodella.CustomLayoutSMT.CustomLayoutSMT.View","Kodella.CustomLayoutSMT.CustomLayoutSMT.Model","Kodella.CustomLayoutSMT.CustomLayoutSMT.SS2Model","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.View","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.Model","Kodella.KDChangeStoreLocations.KDChangeStoreLocations.SS2Model","Kodella.KDCsvImport.KDCsvParser.View","Kodella.KDCsvImport.KDCsvParser.Model","papaparse","Kodella.KDCustomFacets.KDCustomFacets.View","Kodella.KDCustomFacets.KDCustomFacets.Model","Kodella.KDCustomFacets.KDCustomFacets.SS2Model","Kodella.KDGlobalExtension.KDGlobalExtension.View","Kodella.KDGlobalExtension.KDGlobalExtension.Model","Kodella.KDGlobalExtension.KDGlobalExtension.SS2Model","Kodella.KDPDPCustom.KDPDPCustom.View","Kodella.KDPDPCustom.KDPDPCustom.Model","Kodella.KDPDPCustom.KDPDPCustom.SS2Model","Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.View","Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.Model","Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory.SS2Model","CA.MyAccountCustomization.RoleBasedMyAccount.View","CA.MyAccountCustomization.RoleBasedMyAccount.Model","CA.MyAccountCustomization.RoleBasedMyAccount.SS2Model","Kodella.ProductSalesTemplate2.ProductSalesPage2.View","Kodella.ProductSalesTemplate2.ProductSalesPage2.Model","Kodella.ProductSalesTemplate2.ProductSalesPage2.SS2Model","Example.SCCCTEncourage.Encourage.View","CloudAlp.ShoppingCustomization.ShoppingCustomization.View","CloudAlp.ShoppingCustomization.ShoppingCustomization.Model","CloudAlp.ShoppingCustomization.ShoppingCustomization.SS2Model"];
try{
	extensions['Kodella.CCTProductTPLOne.1.0.0']();
	SC.addExtensionModule('Kodella.CCTProductTPLOne.CCTProductTPLOne');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.CustomLayoutSMT.1.0.0']();
	SC.addExtensionModule('Kodella.CustomLayoutSMT.CustomLayoutSMT');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDChangeStoreLocations.1.0.0']();
	SC.addExtensionModule('Kodella.KDChangeStoreLocations.KDChangeStoreLocations');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDCsvImport.1.0.0']();
	SC.addExtensionModule('Kodella.KDCsvImport.KDCsvParser');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDCustomFacets.1.0.0']();
	SC.addExtensionModule('Kodella.KDCustomFacets.KDCustomFacets');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDGlobalExtension.1.0.0']();
	SC.addExtensionModule('Kodella.KDGlobalExtension.KDGlobalExtension');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDPDPCustom.1.0.0']();
	SC.addExtensionModule('Kodella.KDPDPCustom.KDPDPCustom');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.KDShowOutOFstockMessageNonInventory.1.0.0']();
	SC.addExtensionModule('Kodella.KDShowOutOFstockMessageNonInventory.KDShowOutOFstockMessageNonInventory');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CA.MyAccountCustomization.1.0.0']();
	SC.addExtensionModule('CA.MyAccountCustomization.RoleBasedMyAccount');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.ProductSalesTemplate2.1.0.0']();
	SC.addExtensionModule('Kodella.ProductSalesTemplate2.ProductSalesPage2');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['Kodella.SCCCTEncourage.2.1.1']();
	SC.addExtensionModule('Example.SCCCTEncourage.Encourage');
}
catch(error)
{
	console.error(error);
}


try{
	extensions['CloudAlp.ShoppingCustomization.1.0.0']();
	SC.addExtensionModule('CloudAlp.ShoppingCustomization.ShoppingCustomization');
}
catch(error)
{
	console.error(error);
}

