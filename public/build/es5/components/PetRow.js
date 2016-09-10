"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var text = _interopRequire(require("../utils/text"));

var PetRow = (function (Component) {
	function PetRow() {
		_classCallCheck(this, PetRow);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(PetRow, Component);

	_prototypeProperties(PetRow, null, {
		render: {
			value: function render() {


				var pet = this.props.pet || {};
				var petProfileImg = pet.image || {};

				return React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-6 bottommargin" },
						React.createElement(
							"div",
							{ className: "team team-list clearfix" },
							React.createElement(
								"div",
								{ className: "team-image" },
								petProfileImg.thumb === "" ? null : React.createElement(
									"div",
									null,
									React.createElement("img", { style: { borderRadius: 200 }, src: petProfileImg.original })
								)
							),
							React.createElement(
								"div",
								{ className: "team-desc" },
								React.createElement(
									"div",
									{ className: "team-title" },
									React.createElement(
										"h4",
										null,
										text.capitalize(this.props.pet.name)
									)
								),
								React.createElement(
									"a",
									{ href: "/pet/" + this.props.pet.slug, className: "button button-rounded button-reveal button-large button-white button-light tright" },
									React.createElement("i", { className: "icon-line-arrow-right" }),
									React.createElement(
										"span",
										null,
										"Profile"
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return PetRow;
})(Component);

module.exports = PetRow;