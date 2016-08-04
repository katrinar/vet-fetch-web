"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var api = _interopRequire(require("../utils/api"));

var PetProfile = (function (Component) {
	function PetProfile(props, context) {
		_classCallCheck(this, PetProfile);

		_get(Object.getPrototypeOf(PetProfile.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(PetProfile, Component);

	_prototypeProperties(PetProfile, null, {
		componentWillMount: {
			value: function componentWillMount() {
				var currentUser = this.props.currentUser;
				console.log("PET PROFILE WILL MOUNT: CURRENT USER PROPS =" + JSON.stringify(currentUser) + ", CURRENT USER STATE = " + JSON.stringify(this.state.currentUser));
			},
			writable: true,
			configurable: true
		},
		componentDidMount: {
			value: function componentDidMount() {
				console.log("PET PROFILE DID MOUNT: SLUG = " + JSON.stringify(this.props.slug) + ", CURRENT USER PROPS = " + JSON.stringify(this.props.currentUser) + "CURRENT USER STATE = " + JSON.stringify(this.state.currentUser));
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};
				console.log("PET PROFILE RENDER: CURRENT USER PROPS: " + JSON.stringify(this.props.currentUser));
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								"Name: ",
								petProfile.name
							),
							React.createElement(
								"li",
								null,
								"Breed: ",
								petProfile.breed
							),
							React.createElement(
								"li",
								null,
								"Sex: ",
								petProfile.sex
							),
							React.createElement(
								"li",
								null,
								"Birthday: ",
								petProfile.birthday
							),
							React.createElement(
								"li",
								null,
								"Allergies: ",
								petProfile.allergies
							),
							React.createElement(
								"li",
								null,
								"Medication: ",
								petProfile.medications
							)
						)
					),
					React.createElement(
						"div",
						null,
						React.createElement("ul", null)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetProfile;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_PET_PROFILE: " + JSON.stringify(state));
	return {
		pets: state.petReducer.pets,
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(PetProfile);
//TO DO: pass this.props.pets object to pet profile from Main and use for api request
//TO DO: replace hardcoded li with iterated array li; api req/store dispatch to currentPet	

// var endpoint = '/api/pet?slug='+this.props.slug
// api.handleGet(endpoint, null, function(err, response){
// 	if (err){
// 		alert(err.message)
// 		return
// 	}
// 	var petResults = response.results
// 	// for (var i=0; i<petResults.length; i++){
// 	// 	if (petResults.ownerId == this.props.currentUser.id){
// 	// }
// 	// }

// 	console.log('PET RESULTS: '+JSON.stringify(petResults)+', CURRENT OWNER ID: '+JSON.stringify(this.state.currentUser))
// })