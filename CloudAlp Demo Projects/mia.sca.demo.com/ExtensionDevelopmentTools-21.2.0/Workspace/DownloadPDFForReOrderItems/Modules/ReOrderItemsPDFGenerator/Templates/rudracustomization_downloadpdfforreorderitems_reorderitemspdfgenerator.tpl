
    <span class="list-header-view-download">
      <label class="list-header-view-download-filter">
          <select name="checkDownload" id="checkDownload" class="list-header-view-accordion-body-select" data-action="checkDownload">
            <option value="downloadCsv">{{translate "Download Csv"}}</option>
            <option value="downloadPDF">{{translate "Download PDF"}}</option>
          </select>
        </label>
      <button class="download_btn" data-action="download_btn">{{translate 'Download'}}</button>
    </span>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->