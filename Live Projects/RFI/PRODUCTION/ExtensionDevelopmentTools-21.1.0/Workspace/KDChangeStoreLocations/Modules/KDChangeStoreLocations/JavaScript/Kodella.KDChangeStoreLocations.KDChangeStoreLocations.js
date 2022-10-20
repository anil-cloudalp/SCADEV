
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
