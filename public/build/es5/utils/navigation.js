"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

module.exports = {

	accountPage: function () {
		window.location.href = "/account";
	},

	petsPage: function () {
		window.location.href = "/pets";
	},

	checkCurrentUser: function () {
		api.handleGet("/account/currentuser", null, function (err, response) {
			if (err) {
				alert(err.message);
				return;
			}

			store.dispatch(actions.receivedCurrentUser(response.user));
		});
	}
};