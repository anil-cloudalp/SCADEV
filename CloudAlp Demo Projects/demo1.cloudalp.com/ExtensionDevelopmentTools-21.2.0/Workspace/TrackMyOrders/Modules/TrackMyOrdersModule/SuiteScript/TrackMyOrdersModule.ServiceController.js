define("Demo.TrackMyOrders.TrackMyOrdersModule.ServiceController", ["ServiceController",'Demo.TrackMyOrders.Model'], function(
  ServiceController,
  TrackMyOrdersModel
) {
  "use strict";

  return ServiceController.extend({
    name: "Demo.TrackMyOrders.TrackMyOrdersModule.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      
      console.warn("Controller this", JSON.stringify(this))
           
  // const self = this;
  // const recordtype = this.request.getParameter('recordtype');
  // const id = this.request.getParameter('internalid');


  // var obj = {}
  // return obj.status =true


return TrackMyOrdersModel.list({ 
  
  filter: this.request.getParameter('filter'),    
  order: this.request.getParameter('order'),
  sort: this.request.getParameter('sort'),
  statussort:this.request.getParameter('statusSort'),
  from: this.request.getParameter('from'),
  to: this.request.getParameter('to'),
  origin: this.request.getParameter('origin'),
  page: this.request.getParameter('page') || 1,
  results_per_page: this.request.getParameter('results_per_page'),
  selected_order_id: this.request.getParameter('selected_order_id'),
  selected_status: this.request.getParameter('selected_status')
});
// return OrderHistoryModel.list({
//   filter: this.request.getParameter('filter'),    
//   order: this.request.getParameter('order'),
//   sort: this.request.getParameter('sort'),
//   from: this.request.getParameter('from'),
//   to: this.request.getParameter('to'),
//   origin: this.request.getParameter('origin'),
//   page: this.request.getParameter('page') || 1,
//   results_per_page: this.request.getParameter('results_per_page')
// });

    },

    post: function post() {
      // not implemented
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
