"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var PetHealthRecord = (function (Component) {
	function PetHealthRecord() {
		_classCallCheck(this, PetHealthRecord);

		if (Component != null) {
			Component.apply(this, arguments);
		}
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
					React.createElement(
						"div",
						{ id: "petHealthRecord" },
						React.createElement(
							"h3",
							null,
							"Health Record"
						),
						React.createElement(
							"h4",
							null,
							"Vaccines"
						),
						React.createElement(
							"h4",
							null,
							"Medication"
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
								"Vaccines: "
							),
							React.createElement(
								"li",
								null,
								"Medication: ",
								petProfile.medicationsString,
								" "
							),
							React.createElement(
								"li",
								null,
								"Allergies: ",
								petProfile.allergiesString,
								" "
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