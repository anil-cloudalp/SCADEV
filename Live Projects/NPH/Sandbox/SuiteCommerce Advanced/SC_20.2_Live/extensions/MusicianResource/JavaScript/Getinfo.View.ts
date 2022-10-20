
///<amd-module name="Getinfo.View"/>

import * as _ from 'underscore';
import BackboneView = require('../../../Commons/BackboneExtras/JavaScript/Backbone.View');
import * as getinfo_tpl from 'get_info.tpl';
import { Configuration } from '../../../Commons/Utilities/JavaScript/Configuration';


const Getinfo: any = BackboneView.extend({

  template: getinfo_tpl,

  attributes: {
    id: 'Get_info',
    class: ''
},

initialize: function() {
   
  this.showModalPageHeader = true

},

getContext: function() {

  const help = Configuration.get("Musicianresourcepage.musicianresourcehelp");
  
  var self = this;
  
  for(var i = 0;i<help.length;i++){

    if(help[i].fieldid == self.options.id){  
      self.helpinfo = help[i].fieldhelp
    }
  }

  return {

    helpinfo:self.helpinfo,
    id:self.options.id
      }
  }
  
});


export = Getinfo;

