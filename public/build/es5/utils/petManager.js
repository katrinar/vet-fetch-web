"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

module.exports = {

	sendPetEdit: function (petSubmit) {
		var endpoint = "/api/pet/" + petSubmit.id;

		api.handlePut(endpoint, petSubmit, function (err, response) {
			if (err) {
				alert(err.message);
				return;
			}
			console.log("sendPetEdit: PUT RESPONSE = " + JSON.stringify(response.result));
			store.dispatch(actions.updatePets(response.result));
		});
	},

	sendPetImage: function (petImg, petId) {
		var petId = petId;
		var endpoint = "/api/pet/" + petId;
		console.log("sendPetEdit: petImg = " + JSON.stringify(petImg) + ", petId = " + JSON.stringify(petId));
	}
};
// api.handlePut(endpoint, petImg, function(err, response){
// 	if (err){
// 		alert(err.message)
// 		return
// 	}
// 	console.log('sendPetEdit: PUT RESPONSE = '+JSON.stringify(response.result))
// 	store.dispatch(actions.updatePets(response.result))
// })