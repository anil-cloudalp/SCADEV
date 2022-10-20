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
