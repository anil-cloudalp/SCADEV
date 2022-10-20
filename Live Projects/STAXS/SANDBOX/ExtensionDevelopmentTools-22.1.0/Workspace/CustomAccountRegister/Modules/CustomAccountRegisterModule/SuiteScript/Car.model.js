define('Car.model', [
    'SC.Model',
    
    'underscore'
  ], function (
    SCModel,
    _
  ) {
    return SCModel.extend({
      name: 'Car',

      validation: {
        email: {
            required: true,
            pattern: 'email',
            msg: 'Valid email is required'
        }
    },
  
    })
  })
  