/*
	© 2020 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

/// <amd-module name="Merchandising.Context">
import * as _ from 'underscore';

// @module Merchandising
// @class Merchandising.Context This class defines a generic facade that allows to handle the association between a View and its handler
// @method MerchandisingContext Instance method that given a view associate to it an instance of the Merchandising.Context class
// @constructor
// @param {Function} view
// @return {Merchandising.Context?}
const MerchandisingContext = function MerchandisingContext(view): void {
    if (view.MerchandisingContext) {
        return view.MerchandisingContext;
    }
    this.view = view;
    view.MerchandisingContext = this;
};

_.extend(MerchandisingContext, {
    // @property {Array<Merchandising.Context.Handler>} handlers List of registered handlers @static
    handlers: [],

    // @method registerHandlers Pushes a new handler for a specific view to the handler list
    // @static
    // @param {Function} view_constructor View that will be associated with a particular handler
    // @param {Merchandising.Context.Handler} methods Object that will be used to handle the specified view constructor
    // @return {Merchandising.Context}
    registerHandlers: function(view_constructor, methods): any {
        if (view_constructor) {
            // if there was already a handler for that view
            // we remove it from the list, and extend the new
            // handler with any events that the previous one had
            const new_handler = _.extend(
                (<any>MerchandisingContext).removeHandler(view_constructor),
                methods
            );

            new_handler.viewConstructor = view_constructor;
            // then we add it first on the list
            (<any>MerchandisingContext).handlers.unshift(new_handler);
        }

        return MerchandisingContext;
    },

    // @method removeHandler based on the constructor passed as a parameter, removes any handler that matches the constructor from the handlers list.
    // @static
    // @param {Function} view_constructor
    // @returns {Merchandising.Context.Handler} the removed handler
    removeHandler: function(view_constructor): any {
        let removed = {};

        (<any>MerchandisingContext).handlers = _.reject(
            (<any>MerchandisingContext).handlers,
            function(handler: any) {
                if (handler.viewConstructor === view_constructor) {
                    removed = handler;
                    return true;
                }
            }
        );

        return removed;
    },

    // @method getHandlerForView @static
    // @returns {Merchandising.Context.Handler} A handler for the passed in view
    getHandlerForView: function(view): any {
        return _.find((<any>MerchandisingContext).handlers, function(handler: any) {
            return view instanceof handler.viewConstructor;
        });
    },

    // @method escapeValue @static
    // @param {String} value
    // @return {String}
    escapeValue: function(value: string): string {
        return value ? value.toString().replace(/\s/g, '-') : '';
    },

    // @method callHandler calls 'callback_key' from the handler for that view passing all of the arguments
    // @static @param {String} callback_key @param {Object} context @param {Array} parameters
    callHandler: function(callback_key, context, parameters) {
        const handler = (<any>MerchandisingContext).getHandlerForView(context.view);
        return (
            handler &&
            _.isFunction(handler[callback_key]) &&
            handler[callback_key].apply(context, parameters)
        );
    },

    // @method appendFilterValue @static
    // @param {Object} filters
    // @param {String} key
    // @param {to:String,from:String} value
    appendFilterValue: function(filters: object, key: string, value: any): void {
        if (_.isObject(value) && 'to' in value && 'from' in value) {
            delete filters[key];

            filters[key + '.to'] = value.to;
            filters[key + '.from'] = value.from;
        } else {
            if (_.isUndefined(filters[key])) {
                filters[key] = '';
            }

            let comma = '';

            if (filters[key]) {
                comma = ',';
            }

            filters[key] += comma + value;
        }
    }
});

_.extend(MerchandisingContext.prototype, {
    // @method callHandler
    // @param {String} callback_key function name to invoke. Possible values are: getIdItemsToExclude or getFilters
    // @return {Any}
    callHandler: function(callback_key) {
        return (<any>MerchandisingContext).callHandler(
            callback_key,
            this,
            _.toArray(arguments).slice(1)
        );
    },

    // @method getFilters
    // @param {Object} filters
    // @param {Boolean} isWithin
    getFilters: function(filters, isWithin) {
        let parsed_filters = this.callHandler('getFilters', filters, isWithin);

        if (!parsed_filters) {
            parsed_filters = {};

            _.each(filters, function(values: any, key) {
                values = _.without(values, '$current');

                if (values.length) {
                    _.each(values, function(value) {
                        (<any>MerchandisingContext).appendFilterValue(parsed_filters, key, value);
                    });
                }
            });
        }

        return parsed_filters;
    },

    // @method getIdItemsToExclude
    getIdItemsToExclude: function() {
        return this.callHandler('getIdItemsToExclude') || [];
    }
});

export = MerchandisingContext;
