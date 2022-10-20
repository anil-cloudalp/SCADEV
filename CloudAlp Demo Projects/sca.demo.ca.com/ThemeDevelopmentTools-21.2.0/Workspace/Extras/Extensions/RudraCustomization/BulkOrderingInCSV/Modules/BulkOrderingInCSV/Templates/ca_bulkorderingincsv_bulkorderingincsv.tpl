<div class="csv-quick-add-box">
  <div class="csv-quick-add-box-left">
    <label>{{translate 'Or upload a CSV file : '}}<span name="csv_import_file_label"></span> </label>
    <input class="csv-quick-add-box-left-input" data-action="csv_validations" type="file"  id="csvinput" name="csvinput"/>
    <div data-action="message_container"></div>
    {{!-- <div class="message-container-status" data-action="message_container_status"> --}}
       <!-- Modal -->
 <div class="modal fade" id="getCodeModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-md">
      <div class="modal-content global-views-modal-content">
       <div class="global-views-modal-content-header">
         <button type="button" class="close global-views-modal-content-header-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
         <h4 class="modal-title" id="myModalLabel"> CSV Status Message </h4>
       </div>
       <div class="modal-body" id="getCode" style="overflow-x: scroll;">
         
       </div>
    </div>
   </div>
 </div>
    {{!-- </div> --}}
    <p class="csv-quick-add-box-sample-link">{{translate 'See our'}} <a href="https://tstdrv1521025.secure.netsuite.com/c.TSTDRV1521025/Demo csv file/sample.csv">{{translate 'Download Sample csv file'}}</a></p>
  </div>

    <div class="csv-quick-add-box-right" >
        <label>&nbsp;</label>
      <div class="csv-quick-add-box-right-main">
        <button class="csv-quick-add-box-button" data-action="csvupload" id="csvupload" name="csvupload" >{{translate 'Upload'}}</button>
        <button class="csv-quick-add-remove-all-items" data-action="removeAllItemstoCart">{{translate 'Remove all Items In cart'}}</button>
      </div>
    </div>
</div>


<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->