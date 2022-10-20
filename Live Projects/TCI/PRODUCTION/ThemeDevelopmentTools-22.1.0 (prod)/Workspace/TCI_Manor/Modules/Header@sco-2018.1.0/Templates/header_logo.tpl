<div id="site-logo" class="content-banner"></div>

{{#if false}}
{{!-- Override OOTB logo link --}}
<a class="header-logo" href="{{headerLinkHref}}" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="{{headerLinkHashtag}}" title="{{headerLinkTitle}}">
{{/if}}
<a class="header-logo" href="https://www.teachtci.com/" data-touchpoint="" data-hashtag="" title="Teachers Curriculum">

{{#if logoUrl}}
	<img class="header-logo-image" src="{{getThemeAssetsPathWithDefault logoUrl 'img/SC_Logo.png'}}" alt="{{siteName}}">
{{else}}
	<span class="header-logo-sitename">
		{{siteName}}
	</span>
{{/if}}
</a>




{{!----
Use the following context variables when customizing this template:

	logoUrl (String)
	headerLinkHref (String)
	headerLinkTouchPoint (String)
	headerLinkHashtag (String)
	headerLinkTitle (String)

----}}
