<!-- <section style="display:none" class="kdsmartfreight-info-card">
    <span class="select_shipping">
      {{message}}
    </span>
</section> -->


<div class="" style="overflow-x: scroll;">
  
  <div class="enableContinue" id="select-shipping">
    Shipping costs are an estimate and additional charges will apply for excess length and tail gate services
  </div>
</div>


<script>

  function seeMore() {
    var cusid_ele = document.getElementsByClassName('class-show');
    for (var i = 0; i < cusid_ele.length; ++i) {
      var item = cusid_ele[i];
      item.classList.remove("class-show", "class-show");
    }
    // $("#seeMoreButton").css("pointer-events", "none");

    document.getElementById("seeMoreButton").style.display = "none";
  }
</script>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->