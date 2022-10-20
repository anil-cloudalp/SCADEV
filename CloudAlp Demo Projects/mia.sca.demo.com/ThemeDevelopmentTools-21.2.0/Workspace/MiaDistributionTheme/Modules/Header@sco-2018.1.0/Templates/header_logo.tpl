{{!-- Edited for Horizon Theme --}}

<div id="site-logo" class="content-banner"></div>
{{#if isChannelUc}}
	<a class="header-logo{{#if isChannelUcUser}} ischannelucuser{{/if}}" href=""  title="Channel Uc">
		<img class="header-logo-image" src="{{getThemeAssetsPath 'img/Channel-UC-New-logo-v_3-2.png'}}" alt="Channel-UC">
	</a>
{{else}}
<a class="header-logo" href="{{headerLinkHref}}" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="{{headerLinkHashtag}}" title="{{headerLinkTitle}}">
    {{#if logoUrl}}
        <img class="header-logo-image" src="{{getThemeAssetsPathWithDefault logoUrl 'img/mia-light.png'}}" alt="{{siteName}}">
    {{else}}
        <span class="header-logo-sitename">
            {{siteName}}
        </span>
    {{/if}}
</a>
{{/if}}




{{!----
Use the following context variables when customizing this template:

	logoUrl (String)
	headerLinkHref (String)
	headerLinkTouchPoint (String)
	headerLinkHashtag (String)
	headerLinkTitle (String)

----}}
