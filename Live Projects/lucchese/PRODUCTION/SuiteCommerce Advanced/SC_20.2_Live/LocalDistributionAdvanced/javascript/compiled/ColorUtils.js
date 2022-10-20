/// <amd-module name="ColorUtils"/>
define("ColorUtils", ["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getColorInfo(ccode, parent) {
        var colorMaps = _.isArray(COLORMAPS) ? COLORMAPS : [];
        var colorObjArr = _.filter(colorMaps, function (obj) {
            if (ccode == 'NA') {
                return ((obj.code == ccode) && (obj.matrix_parent == parent));
            }
            return obj.code == ccode;
        });
        return colorObjArr[0];
    }
    exports.getColorInfo = getColorInfo;
});

//# sourceMappingURL=ColorUtils.js.map
