
<div class="content container">

	<h2 class="musician-resource-center-text">Musician's Resource Search</h2>
	<p class="musician-resource-center-text">{{{musician_resource_form_title}}}</p>
 
  <div class="musician-resource-form" autocomplete="off">  
    <div class="musician-resource-form-left">
        <div>
            <div class="musician-left-block">
                <label for="Hymn Number">Hymn Number <i class="fa icon-info helpbtn" data-action="getinfo" id="Hymn Number"></i></label>
                <input type="text" id="HymnNumber" name="id" data-action="hymannumber" class="musician-input-text">
            </div>
             <div class="musician-left-block">
                  <label for="Hymn Title">Hymn Title <i class="fa icon-info helpbtn" data-action="getinfo" id="Hymn Title"></i></label>
                  <input type="text" id="HymnTitle" autocomplete="off" name="itemid" class="musician-input-text"  data-action="hymanTitle">
                  <div id="results"   class="musician-input-text" style="position:absolute;background-color:#fff;curson:pointer;margin:0px;padding:0px;"></div>
            </div>
              <div class="musician-left-block">
                    <label for="Hyman Tune">Hymn Tune <i class="fa icon-info helpbtn" data-action="getinfo" id="Hymn Tune"></i></label>
                    <input type="text" autocomplete="off"  class="musician-input-text" id="HymanTune" name="firstname"  data-action="HymanTune">
                    <div id="hymntuneresults" class="musician-input-text" style="position:absolute;background-color:#fff;curson:pointer"></div>

              </div>
            <div class="musician-left-block">
                    <label for="Psalm Number">Psalm Number <i class="fa icon-info helpbtn" data-action="getinfo" id="Psalm Number"></i></label>
                    <input type="text" class="musician-input-text" id="PsalmNumber" name="firstname">
            </div>

            <div class="musician-left-block">
                <label for="Psalm Title">Psalm Title <i class="fa icon-info helpbtn" data-action="getinfo" id="Psalm Title "></i></label>
                <input type="text" id="PsalmTitle" autocomplete="off" class="musician-input-text" name="firstname" data-action="PsalmTitle">
                <div id="Psalmresults" class="musician-input-text" style="position:absolute;background-color:#fff;curson:pointer"></div>

            </div>

            <div class="musician-left-block">
                <label for="Psalm Tune">Psalm Tune <i class="fa icon-info helpbtn" data-action="getinfo" id="Psalm Tune "></i></label>
                <input type="text" id="PsalmTune" autocomplete="off" class="musician-input-text" name="firstname" data-action="PsalmTune">
                <div id="PsalmTuneresults" class="musician-input-text" style="position:absolute;background-color:#fff;curson:pointer"></div>

            </div>

            <div class="musician-left-block">
                <label for="Rites">Rites <i class="fa icon-info helpbtn" data-action="getinfo" id="Rites"></i></label>
                <select  class="musician-input-text" id="Ritess">
                <option value="">Select a Rite</option>{{#each customlist_appf_rites}}<option id={{this.id}}>{{this.name}}</option>{{/each}}
                </select>
            </div>
			<div class="musician-left-block">
                <label  for="InstrumentType">Type <i class="fa icon-info helpbtn" data-action="getinfo" id="Type"></i></label>
                <select  class="musician-input-text" id="InstrumentTypes">
                <option value="">Select a Type</option>{{#each customlist_appf_instrument_type}}<option id={{this.id}}>{{this.name}}</option>{{/each}}
                </select>
            </div>
        </div>
    </div>

    <div class="musician-resource-form-right">
        <div>
			<div>
					  <label for="Hymn Section">Hymn Section <i class="fa icon-info helpbtn" data-action="getinfo" id="Hymn Section"></i></label>
					  <select  class="musician-input-text" id="HymnSection"><option value="">Select a Hymn Section</option>{{#each customlist_hymn_section}}<option id={{this.id}}>{{this.name}}</option>{{/each}}</select>
			</div>
			<div>
				  <label for="Lectionary Sunday">Lectionary Sunday <i class="fa icon-info helpbtn" data-action="getinfo" id="Lectionary Sunday "></i></label>
				  <select  class="musician-input-text"  id="SelectaYear"><option value="">Select a Year</option>{{#each customlist_sunday_year}}<option id={{this.id}}>{{this.name}}</option>{{/each}}</select>
				  <select   class="musician-input-text"  id="SelectaSunday"><option value="">Select a Sunday</option></select>
			</div>
			<div class="input-text lectionarymsg"></div>
			<div>
				  <label for="Scripture Reference">Scripture Reference <i class="fa icon-info helpbtn" data-action="getinfo" id="Scripture Reference "></i></label>
				  <select  class="musician-input-text" id="Book" ><option value="">Book</option>{{#each customlist_scripture_reference_book}}<option data-action="selectBook" id={{this.id}}>{{this.name}}</option>{{/each}}</select>
				  <select   class="musician-input-text"id="Chapter" ><option data-action="selectChapter" value="">Chapter</option></select>
				  <select  class="musician-input-text" id="Verse"><option data-action="selectVerse" value="">Verse</option></select>
			</div>
			<div class="musician-input-text scripturemsg"></div>
			<div>
				  <label for="Meter">Meter  <i class="fa icon-info helpbtn" data-action="getinfo" id="Meter"></i></label>
				  <select  class="musician-input-text"  id="SelectaMeter"><option value="">Select a Meter</option>{{#each customlist_meter}}<option id={{this.id}}>{{this.name}}</option>{{/each}}</select>
			</div>
			<div>
				<label for="Packages">Packages <i class="fa icon-info helpbtn" data-action="getinfo" id="Packages"></i></label>
				<select  class="musician-input-text" id="SelectaPackage"><option value="">Select a Package</option>{{#each customlist_packages}}<option id={{this.id}}>{{this.name}}</option>{{/each}}</select>
			</div>
			<div>
			   <button class="btn" data-action="search-results">SEARCH</button>
			 </div>
			 <div>
				<button class="btn" data-action="resetfields">RESET</button>
			</div>
         </div>
    </div>
  </div>
</div>

