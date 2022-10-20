/// <amd-module name="ColorUtils"/>

import * as _ from 'underscore';

declare const COLORMAPS;

export function getColorInfo(ccode: string, parent: string): any {
    
	var colorMaps =  _.isArray(COLORMAPS)? COLORMAPS: [];
	
	var colorObjArr = _.filter(colorMaps,function(obj:any){
		
		if(ccode == 'NA'){
			return ((obj.code == ccode) && (obj.matrix_parent == parent));
		}
		return obj.code == ccode;
	});
	
    return colorObjArr[0];
}