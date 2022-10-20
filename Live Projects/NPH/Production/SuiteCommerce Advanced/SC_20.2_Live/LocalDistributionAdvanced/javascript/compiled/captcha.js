(function (window, document, $, undefined) {
    var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var defaults = {
        selector: "#captcha",
        text: null,
        randomText: true,
        randomColours: false,
        width: 202,
        height: 52,
        colour1: null,
        colour2: null,
        font: 'normal 30px "Comic Sans MS", cursive, sans-serif',
        onSuccess: function () {
            alert('Correct!');
        },
        onFailure: function () {
            alert('wrong!');
        }
    };
    var CAPTCHA = function (config) {
        var that = this;
        this._settings = $.extend({}, defaults, config || {});
        this._container = $('#captcha');
        var canvasWrapper = $('<div class="canvas-container">').appendTo(this._container);
        canvasWrapper.append('<div class="refresh-btn"><img src="/media/images/reload.png" alt="refresh-btn"/></div>');
        this._canvas = $('<canvas>').appendTo(canvasWrapper).attr("width", this._settings.width).attr("height", this._settings.height);
        this._context = this._canvas.get(0).getContext("2d");
    };
    CAPTCHA.prototype = {
        generate: function () {
            var context = this._context;
            //if there's no text, set the flag to randomly generate some
            if (this._settings.text == null || this._settings.text == '') {
                this._settings.randomText = true;
            }
            if (this._settings.randomText) {
                this._generateRandomText();
            }
            if (this._settings.randomColours) {
                this._settings.colour1 = this._generateRandomColour();
                // this._settings.colour2 = this._generateRandomColour();
            }
            context.fillStyle = '#fff';
            context.fillRect(0, 0, this._settings.width, this._settings.height);
            context.font = this._settings.font;
            context.fillStyle = '#000';
            context.setTransform((Math.random() / 10) + 0.9, //scalex
            0.1 - (Math.random() / 5), //skewx
            0.1 - (Math.random() / 5), //skewy
            (Math.random() / 10) + 0.9, //scaley
            (Math.random() * 20) + 10, //transx
            40); //transy
            context.fillText(this._settings.text, 0, 0);
            context.setTransform(1, 0, 0, 1, 0, 0);
            for (var i = 0; i < 90; i++) {
                var x = Math.floor(Math.random() * (this._settings.width));
                var y = Math.floor(Math.random() * (this._settings.height));
                context.beginPath();
                context.arc(x, y, 1, 0, 2 * Math.PI, true);
                context.stroke();
            }
            var numRandomCurves = 4;
            for (var i = 0; i < numRandomCurves; i++) {
                this._drawRandomCurve();
            }
        },
        validate: function (userText) {
            if (userText === this._settings.text) {
                return true;
            }
            else {
                return false;
            }
        },
        _drawRandomCurve: function () {
            var ctx = this._context;
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(Math.floor((Math.random() * this._settings.width)), Math.floor((Math.random() * this._settings.height)));
            ctx.bezierCurveTo(Math.floor((Math.random() * this._settings.width)), Math.floor((Math.random() * this._settings.height)), Math.floor((Math.random() * this._settings.width)), Math.floor((Math.random() * this._settings.height)), Math.floor((Math.random() * this._settings.width)), Math.floor((Math.random() * this._settings.height)));
            ctx.stroke();
        },
        _generateRandomText: function () {
            this._settings.text = '';
            var length = Math.floor((Math.random() * 3) + 6);
            for (var i = 0; i < length; i++) {
                this._settings.text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            }
        },
        _generateRandomColour: function () {
            return "rgb(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ")";
        }
    };
    $.Captcha = CAPTCHA || {};
})(window, document, jQuery);

//# sourceMappingURL=captcha.js.map
