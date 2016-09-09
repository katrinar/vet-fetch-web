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

var navigation = _interopRequire(require("../utils/navigation"));

var PetNavigation = _interopRequire(require("../components/PetNavigation"));

var PetNavigationToggle = _interopRequire(require("../components/PetNavigationToggle"));

var Nav = _interopRequire(require("../components/Nav"));

var PetHealthRecord = (function (Component) {
	function PetHealthRecord(props, context) {
		_classCallCheck(this, PetHealthRecord);

		_get(Object.getPrototypeOf(PetHealthRecord.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(PetHealthRecord, Component);

	_prototypeProperties(PetHealthRecord, null, {
		render: {
			value: function render() {
				var petSlug = this.props.slug;
				var petProfile = this.props.pets[petSlug] || {};

				return React.createElement(
					"div",
					null,
					React.createElement(Nav, null),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(PetNavigation, null),
							React.createElement(
								"div",
								{ id: "healthRecContent" },
								React.createElement(
									"div",
									{ id: "healthRecHeader" },
									React.createElement(
										"h2",
										null,
										petProfile.name,
										" | Health Record"
									)
								),
								React.createElement(
									"div",
									{ id: "healthRecStats" },
									React.createElement(
										"h4",
										null,
										"Vaccines"
									),
									React.createElement(
										"ul",
										null,
										React.createElement(
											"li",
											null,
											"Vaccines: ",
											petProfile.vaccinesString
										)
									),
									React.createElement(
										"h4",
										null,
										"Medication"
									),
									React.createElement(
										"ul",
										null,
										React.createElement(
											"li",
											null,
											"Medication: ",
											petProfile.medicationsString,
											" "
										)
									),
									React.createElement(
										"h4",
										null,
										"Allergies"
									),
									React.createElement(
										"ul",
										null,
										React.createElement(
											"li",
											null,
											"Allergies: ",
											petProfile.allergiesString,
											" "
										)
									)
								),
								React.createElement(PetNavigationToggle, null)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetHealthRecord;
})(Component);

module.exports = PetHealthRecord;