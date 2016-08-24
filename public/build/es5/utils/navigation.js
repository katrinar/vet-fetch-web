"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

module.exports = {

	accountPage: function () {
		window.location.href = "/account";
	},

	homePage: function () {
		window.location.href = "/";
	},

	petsPage: function () {
		window.location.href = "/pets";
	},

	petProfilePage: function (slug) {
		window.location.href = "/pet/" + slug;
	},

	healthRecord: function () {
		var changeDisplay = true;
		console.log("showHealthRecord: changeDisplay = " + JSON.stringify(changeDisplay));
		store.dispatch(actions.showHealthRecord(changeDisplay));
	},

	dismissHealthRecord: function () {
		var changeDisplay = false;
		store.dispatch(actions.showHealthRecord(changeDisplay));
	},

	editPet: function () {
		var changeDisplay = true;
		store.dispatch(actions.displayEditPet(changeDisplay));
	},

	dismissEditPet: function () {
		var changeDisplay = false;
		store.dispatch(actions.displayEditPet(changeDisplay));
	},

	registerPet: function () {
		var changeDisplay = true;
		store.dispatch(actions.showRegisterPet(changeDisplay));
	},

	dismissRegisterPet: function () {
		var changeDisplay = false;
		store.dispatch(actions.showRegisterPet(changeDisplay));
	},

	editProfile: function () {
		var changeDisplay = true;
		console.log("editPet: changeDisplay = " + JSON.stringify(changeDisplay));

		store.dispatch(actions.showEditProfile(changeDisplay));
	},

	dismissEditProfile: function () {
		var changeDisplay = false;
		store.dispatch(actions.showEditProfile(changeDisplay));
	}

};