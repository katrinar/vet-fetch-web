"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var navigation = _interopRequire(require("../utils/navigation"));

var text = _interopRequire(require("../utils/text"));

var PetProfile = (function (Component) {
	function PetProfile() {
		_classCallCheck(this, PetProfile);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(PetProfile, Component);

	_prototypeProperties(PetProfile, null, {
		render: {

			// render(){
			// 	var profile = this.props.pets[this.props.slug]	
			// 	return(
			// 		<div>
			// 			<ul>
			// 			{profile && Object.keys(profile).map(function(key) {
			//            return <li key={key}>{text.capitalize(key)}: {profile[key]}</li>;
			//        }.bind(this))}
			// 			</ul>
			// 			<button onClick={navigation.petsPage}>Back to Pets</button>
			// 		</div>
			// 	)
			// }

			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};

				console.log(" var petProfile = " + JSON.stringify(petProfile));

				return React.createElement(
					"div",
					null,
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Name: ",
							petProfile.name,
							" "
						),
						React.createElement(
							"li",
							null,
							"DoB: ",
							petProfile.birthday,
							" "
						),
						React.createElement(
							"li",
							null,
							"Sex: ",
							petProfile.sex,
							" "
						),
						React.createElement(
							"li",
							null,
							"Species: ",
							petProfile.species,
							" "
						),
						React.createElement(
							"li",
							null,
							"Breed: ",
							petProfile.breed,
							" "
						),
						React.createElement(
							"li",
							null,
							"Allergies: ",
							petProfile.allergies,
							" "
						),
						React.createElement(
							"li",
							null,
							"Medications: ",
							petProfile.medications,
							" "
						)
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
	return {
		pets: state.petReducer.pets
	};
};

module.exports = connect(stateToProps)(PetProfile);