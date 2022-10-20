{{#unless hideModule}}
<div class="uploadfile-module">
	{{#if showTitle}}
		<h3 class="uploadfile-module-title">
			{{title}}
		</h3>
		{{#if uploadedFileName}}
		<div class="uploadfile-module-filename" style="margin-top: 7px;">
			<a href="{{downloadUrl}}" target="_blank" style="font-size: 9pt; text-decoration: underline;">{{uploadedFileName}}</a>
			<a href="#" id="RemoveUploadFileAttachmentLink" style="font-size: 9pt; margin-left: 3px;">&#10008</a>
		</div>
		{{/if}}
	{{/if}}

	<p style="clear: both;">
		Please attach a PDF copy of your purchase order. Do not submit your purchase order in another format.
	</p>

	<form id="uploadfileform">
		<button class="button-outline" id="file-upload" data-toggle="uploadFile">
			Attach File
		</button>
		<div class="hidden">
			<input type="file" id="hidden-file-input" accept="image/*,.pdf,.jpg,.doc,.png,.xlsx">
		</div>
	</form>
</div>
{{/unless}}
