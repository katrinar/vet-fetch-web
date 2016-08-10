"use strict";

module.exports = {

	capitalize: function (string) {
		if (string.length == 1) return string.toUpperCase();

		var firstLetter = string.substring(0, 1);
		return firstLetter.toUpperCase() + string.substring(1);
	}


};