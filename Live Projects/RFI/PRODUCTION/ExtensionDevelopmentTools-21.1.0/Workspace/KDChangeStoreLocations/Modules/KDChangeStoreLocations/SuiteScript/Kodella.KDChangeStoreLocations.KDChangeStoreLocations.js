// Kodella.KDChangeStoreLocations.KDChangeStoreLocations.js
// Load all your starter dependencies in backend for your extension here
// ----------------

define('Kodella.KDChangeStoreLocations.KDChangeStoreLocations'
,	[
		'Kodella.KDChangeStoreLocations.KDChangeStoreLocations.ServiceController', "StoreLocator.Model", "underscore"
	]
,	function (
		KDChangeStoreLocationsServiceController, StoreLocatorModel, _
	)
{
	'use strict';
	StoreLocatorModel.search = _.wrap(StoreLocatorModel.search, function (fn,data) {
    
		var result = {};
		this.record_type = 'customrecord_store_locator'
		this.columns = {
			address1: new nlobjSearchColumn('custrecord_kd_dealer_address'),
			// address2: new nlobjSearchColumn('address2'),
			// address3: new nlobjSearchColumn('address3'),
			name: new nlobjSearchColumn('custrecord_kd_title'), 
			custrecord_kd_city: new nlobjSearchColumn('custrecord_kd_city'),
			custrecord_country: new nlobjSearchColumn('custrecord_country'),
			custrecord_state: new nlobjSearchColumn('custrecord_state'),
			internalid: new nlobjSearchColumn('internalid'),
			isinactive: new nlobjSearchColumn('isinactive'),
			// isoffice: new nlobjSearchColumn('isoffice'),
			// makeinventoryavailable: new nlobjSearchColumn('makeinventoryavailable'),
			// makeinventoryavailablestore: new nlobjSearchColumn('makeinventoryavailablestore'),
			// namenohierarchy: new nlobjSearchColumn('namenohierarchy'),
			custrecord_kd_dealer_phone: new nlobjSearchColumn('custrecord_kd_dealer_phone'),
			custrecord_kd_dealer_website: new nlobjSearchColumn('custrecord_kd_dealer_website'),
			custrecord_zip: new nlobjSearchColumn('custrecord_zip'),
			latitude: new nlobjSearchColumn('custrecord_kd_dealer_latitude'),
			longitude: new nlobjSearchColumn('custrecord_kd_dealer_longitude')
		};
		var records = [];
		var self = this;
		nlapiLogExecution("debug", "locationsss---", JSON.stringify(this))
		this.filters = [];
		this.data = data;

		this.filters.push(new nlobjSearchFilter('isinactive', null, 'is', 'F'));
		nlapiLogExecution("debug", "filters ---", JSON.stringify(this.data))

		if (this.data.latitude && this.data.longitude) {
			// Automatic location detection fails, without completing the latitude and longitude fields.
			// Delete this filters when fixed.
			this.filters.push(new nlobjSearchFilter('custrecord_kd_dealer_latitude', null, 'isnotempty'));
			this.filters.push(new nlobjSearchFilter('custrecord_kd_dealer_longitude', null, 'isnotempty'));

			var formula = this.getDistanceFormulates();
			if (this.data.radius) {
				this.filters.push(
					new nlobjSearchFilter(
						'formulanumeric',
						null,
						'lessthan',
						this.data.radius
					).setFormula(formula)
				);
			}
			// Validate that the formula returns some value.
			this.filters.push(
				new nlobjSearchFilter('formulanumeric', null, 'noneof', '@NONE@')
			);
			this.columns.distance = new nlobjSearchColumn('formulanumeric')
				.setFormula(formula)
				.setFunction('roundToTenths');
		}
   
		if (this.data.internalid) {
			var internalid = _.isArray(this.data.internalid)
				? this.data.internalid
				: this.data.internalid.split(',');
			this.filters.push(new nlobjSearchFilter('internalid', null, 'anyof', internalid));
		}
	   
		if (this.data.sort) {
		    _.each(this.data.sort.split(','), function(column_name) {
		        if (self.columns[column_name]) {
		            self.columns[column_name].setSort(self.data.order >= 0);
		        }
		    });
		}

		// if (this.isPickupInStoreEnabled) {
		// 	this.columns.allowstorepickup = new nlobjSearchColumn('allowstorepickup');
		// 	this.columns.timezone = new nlobjSearchColumn('timezone');
		// 	this.columns.nextpickupcutofftime = new nlobjSearchColumn('nextpickupcutofftime');
		// }

		if (this.data.page === 'all') {
		
			this.search_results = Application.getAllSearchResults(
				'customrecord_store_locator',
				_.values(this.filters),
				_.values(this.columns)
			);
		} else {
			
			this.search_results = Application.getPaginatedSearchResults({
				record_type: 'customrecord_store_locator',
				filters: _.values(this.filters),
				columns: _.values(this.columns),
				page: this.data.page || 1,
				results_per_page: this.data.results_per_page
			});
		}

		var results =
			(this.data.page === 'all' ? this.search_results : this.search_results.records) ||
			[] ||
			[];

		// if (this.isPickupInStoreEnabled) {
		// 	this.searchServiceHoursResults = this.searchServiceHours(
		// 		_.map(results, function(record) {
		// 			return record.getId();
		// 		})
		// 	);
		// }

		_.each(results, function (record) {
			records.push(self.getRecordValues(record));
		});

		if (this.data.page === 'all' || this.data.internalid) {
			result = records;
		} else {
			result = this.search_results;
			result.records = records;
		}

		return result;
	});
	StoreLocatorModel.getDistanceFormulates = _.wrap(StoreLocatorModel.getDistanceFormulates, function (fn) {
		// R = Earth radius 6371 (km) , 3959 (mi)
		var  PI  = 3.141;
		var R = Configuration.get().storeLocator.distanceUnit === 'mi' ? 3959 : 6371;
		var lat = (this.data.latitude * PI) / 180;
		var lon = (this.data.longitude * PI) / 180;
		var formula =
			R +
			' * (2 * ATAN2(SQRT((SIN((' +
			lat +
			'- ({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) / 2) *' +
			'SIN((' +
			lat +
			'- ({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) / 2) + ' +
			'COS(({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) * COS(' +
			lat +
			') *' +
			'SIN((' +
			lon +
			'- ({custrecord_kd_dealer_longitude} * ' +
			PI +
			' / 180)) /2) *' +
			'SIN((' +
			lon +
			'- ({custrecord_kd_dealer_longitude} * ' +
			PI +
			' / 180)) /2))),' +
			'SQRT(1 - (SIN((' +
			lat +
			'- ({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) / 2) *' +
			'SIN((' +
			lat +
			'- ({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) / 2) +' +
			'COS(({custrecord_kd_dealer_latitude} * ' +
			PI +
			' / 180)) * COS(' +
			lat +
			') * ' +
			'SIN((' +
			lon +
			'- ({custrecord_kd_dealer_longitude} * ' +
			PI +
			' / 180)) /2) * ' +
			'SIN((' +
			lon +
			'- ({custrecord_kd_dealer_longitude} * ' +
			PI +
			' / 180)) /2)))))';

		return formula;
	});

	StoreLocatorModel.getRecordValues = _.wrap(StoreLocatorModel.getRecordValues, function (fn,record) {
		
		var map_result = {};
		var id = record.getValue('internalid');
		var friendlyName = record.getValue('custrecord_kd_title');
		// @property {String} recordtype
		map_result.recordtype = record.getRecordType();
		// @property {String} internalid
		map_result.internalid = id;
		// @property {String} address1
		map_result.address1 = record.getValue('custrecord_kd_dealer_address');
		// @property {String} address2
		// map_result.address2 = record.getValue('address2');
		// // @property {String} address3
		// map_result.address3 = record.getValue('address3');
		map_result.website = record.getValue('custrecord_kd_dealer_website');
		map_result.city = record.getValue('custrecord_kd_city');
		// @property {String} country
		map_result.country = record.getValue('custrecord_country');
		// @property {String} state
		map_result.state = record.getValue('custrecord_state');
		// @property {String} isoffice
		// map_result.isoffice = record.getValue('isoffice');
		// @property {String} makeinventoryavailable
		//map_result.makeinventoryavailable = record.getValue('makeinventoryavailable');
		// @property {String} makeinventoryavailablestore
		//map_result.makeinventoryavailablestore = record.getValue('makeinventoryavailablestore');
		// @property {String} name
		map_result.name =
			friendlyName !== '' ? friendlyName : record.getValue('custrecord_kd_title');

		// @property {String} phone
		map_result.phone = record.getValue('custrecord_kd_dealer_phone');
		// @property {String} zip
		map_result.zip = record.getValue('custrecord_zip');

		// @property {Object} location
		map_result.location = {
			// @property {String} latitude
			latitude: record.getValue('custrecord_kd_dealer_latitude'),
			// @property {String} longitude
			longitude: record.getValue('custrecord_kd_dealer_longitude')
		};
		// @property {Number} locationtype
		map_result.locationtype = record.getValue('locationtype');

		if (this.data.latitude && this.data.longitude) {
			var distance = Math.round(record.getValue('formulanumeric') * 10) / 10;

			if (!_.isUndefined(distance)) {
				// @property {Number} distance
				map_result.distance = Math.round(record.getValue('formulanumeric') * 10) / 10;
				map_result.distanceunit = Configuration.get().storeLocator.distanceUnit;
			}
		}

		if (this.isPickupInStoreEnabled) {
			// @property {String} openinghours
			map_result.servicehours = this.getServiceHours(id);
			// @property {Object} timezone
			map_result.timezone = {
				text: record.getText('timezone'),

				value: record.getValue('timezone')
			};

			// @property {Boolean} allowstorepickup
			map_result.allowstorepickup = record.getValue('allowstorepickup') === 'T';

			if (map_result.allowstorepickup) {
				// @property {String} nextpickupcutofftime
				map_result.nextpickupcutofftime = record.getValue('nextpickupcutofftime');

				var next_pickup_cut_off_time_date =
					map_result.nextpickupcutofftime &&
					map_result.nextpickupcutofftime !== ' ' &&
					nlapiStringToDate(map_result.nextpickupcutofftime);

				if (next_pickup_cut_off_time_date) {
					var current_date = Utils.getTodayDate();
					var days_of_the_week = [
						'sunday',
						'monday',
						'tuesday',
						'wednesday',
						'thursday',
						'friday',
						'saturday'
					];

					if (current_date.getDay() === next_pickup_cut_off_time_date.getDay()) {
						map_result.nextpickupday = 'today';
					} else if (
						current_date.getDay() + 1 ===
						next_pickup_cut_off_time_date.getDay()
					) {
						map_result.nextpickupday = 'tomorrow';
					} else {
						map_result.nextpickupday =
							days_of_the_week[next_pickup_cut_off_time_date.getDay()];
					}

					map_result.nextpickuphour = nlapiDateToString(
						next_pickup_cut_off_time_date,
						'timeofday'
					);
				} else {
					// @property {String} nextpickupday
					map_result.nextpickupday = null;
					// @property {String} nextpickuphour
					map_result.nextpickuphour = null;
					// @property {String} nextpickupcutofftime
					map_result.nextpickupcutofftime = null;
				}
			}
		}

		return map_result;
	});

});
