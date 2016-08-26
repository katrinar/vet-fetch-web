"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var api = _interopRequire(require("../utils/api"));

var text = _interopRequire(require("../utils/text"));

var store = _interopRequire(require("../stores/store"));

var HomeContainer = (function (Component) {
	function HomeContainer(props, context) {
		_classCallCheck(this, HomeContainer);

		_get(Object.getPrototypeOf(HomeContainer.prototype), "constructor", this).call(this, props, context);
		this.logout = this.logout.bind(this);
	}

	_inherits(HomeContainer, Component);

	_prototypeProperties(HomeContainer, null, {
		logout: {
			value: function logout(event) {
				event.preventDefault();

				api.handleGet("account/logout", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					window.location.href = "/";
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"h2",
						null,
						"Welcome, ",
						text.capitalize(this.props.currentUser.firstName)
					),
					React.createElement(
						"h3",
						null,
						React.createElement(
							"a",
							{ href: "/pets/" },
							"Pets"
						)
					),
					React.createElement(
						"h3",
						null,
						React.createElement(
							"a",
							{ href: "/vets" },
							"Find Vets Near You"
						)
					),
					React.createElement(
						"h3",
						null,
						React.createElement(
							"a",
							{ href: "/" },
							"Insurance"
						)
					),
					React.createElement(
						"h3",
						null,
						React.createElement(
							"a",
							{ href: "/account" },
							"Account"
						)
					),
					React.createElement(
						"button",
						{ onClick: this.logout },
						"Logout"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return HomeContainer;
})(Component);

module.exports = HomeContainer;