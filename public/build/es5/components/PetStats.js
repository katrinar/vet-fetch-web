"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var navigation = _interopRequire(require("../utils/navigation"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var PetNavigation = _interopRequire(require("../components/PetNavigation"));

var PetNavigationToggle = _interopRequire(require("../components/PetNavigationToggle"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var PetStats = (function (Component) {
	function PetStats(props, context) {
		_classCallCheck(this, PetStats);

		_get(Object.getPrototypeOf(PetStats.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(PetStats, Component);

	_prototypeProperties(PetStats, null, {
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};
				var petProfileImg = petProfile.image || {};
				console.log("petStats image[thumb] = " + JSON.stringify(petProfileImg.thumb));

				return React.createElement(
					"div",
					null,
					React.createElement(Nav, null),
					React.createElement(
						"section",
						{ id: "page-title" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"h1",
								null,
								"Pet Dashboard"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "fancy-title title-double-border" },
								React.createElement(
									"h2",
									null,
									petProfile.name,
									" | Stats"
								)
							),
							React.createElement(PetNavigation, null),
							React.createElement(
								"div",
								{ id: "profileContent" },
								React.createElement(
									"div",
									null,
									petProfileImg.thumb === "" ? null : React.createElement(
										"div",
										null,
										React.createElement("img", { src: petProfileImg.original })
									)
								),
								React.createElement(
									"div",
									{ id: "profileStats" },
									React.createElement(
										"h4",
										null,
										"Species: ",
										petProfile.species
									),
									React.createElement(
										"h4",
										null,
										"Breed: ",
										petProfile.breed
									),
									React.createElement(
										"h4",
										null,
										"Sex: ",
										petProfile.sex
									),
									React.createElement(
										"h4",
										null,
										"DoB: ",
										petProfile.birthday
									)
								)
							),
							React.createElement(PetNavigationToggle, null)
						)
					),
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetStats;
})(Component);

module.exports = PetStats;