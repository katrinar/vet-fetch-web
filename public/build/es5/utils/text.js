"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var api = _interopRequire(require("../utils/api"));

module.exports = {

	capitalize: function (string) {
		if (string.length == 1) return string.toUpperCase();

		var firstLetter = string.substring(0, 1);
		return firstLetter.toUpperCase() + string.substring(1);
	},

	stringToArray: function (str, separator) {
		var t = str.split(separator);
		var array = [];
		for (var i = 0; i < t.length; i++) {
			var tag = t[i];

			if (tag.length == 0) continue;
			array.push(tag.trim());
		}

		return array;
	}
};