{{!-- <div id="layout" class="checkout-layout">
	<header id="site-header" class="checkout-layout-header" data-view="Header"></header>
	<div id="main-container">
		<div class="checkout-layout-breadcrumb" data-view="Global.Breadcrumb" data-type="breadcrumb"></div>
		<div class="checkout-layout-notifications">
			<div data-view="Notifications"></div>
		</div>
		<!-- Main Content Area -->
		<div id="content" class="checkout-layout-content"></div>
		<!-- / Main Content Area -->
	</div>
	<footer id="site-footer" class="checkout-layout-footer" data-view="Footer"></footer>
</div> --}}



{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}



<div id="layout" class="checkout-layout">

	<div class="sticky-header-content" data-spy="affix">
		<header id="site-header" class="checkout-layout-header" data-view="Header"></header>
		<div class="checkout_breadcrumb">
			<div class="checkout-layout-breadcrumb" data-view="Global.Breadcrumb" data-type="breadcrumb"></div>
		</div>
	</div>

	<div id="main-container">
		<div class="checkout-layout-notifications">
			<div data-view="Notifications"></div>
		</div>
		<!-- Main Content Area -->
		<div id="content" class="checkout-layout-content"></div>
		<!-- / Main Content Area -->
	</div>
	<footer id="site-footer" class="checkout-layout-footer" data-view="Footer"></footer>
</div>

<script>
	    $(window).on("scroll", function (t) {
            if ($(this).scrollTop() > 0) {
                $('[data-spy="affix"]').addClass("affix-top");
            }else{
                $('[data-spy="affix"]').removeClass("affix-top");
            }
        });
</script>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
