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

var Login = _interopRequire(require("../components/Login"));

var Pets = _interopRequire(require("../components/Pets"));

var SignInContainer = _interopRequire(require("../components/SignInContainer"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Main = (function (Component) {
	function Main(props, context) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props, context);
	}

	_inherits(Main, Component);

	_prototypeProperties(Main, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				console.log("MAIN COMPONENT: ");
				api.handleGet("/account/currentuser", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					console.log("FETCH_CURRENT_USER_MAIN: " + JSON.stringify(response.user));

					if (response == null) {
						return;
					}

					store.dispatch(actions.receivedCurrentUser(response.user));
					return;
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var content = null;
				var loggedIn = false;

				if (this.props.currentUser.id != null) {
					loggedIn = true;
				}

				if (loggedIn == true) {
					content = React.createElement(Pets, null);
				}

				if (loggedIn == false) {
					content = React.createElement(SignInContainer, null);
				}

				return React.createElement(
					"div",
					null,
					content
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Main;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_MAIN: " + JSON.stringify(state));
	return {
		currentUser: state.accountReducer.currentUser,
		pets: state.petReducer.petsArray
	};
};

module.exports = connect(stateToProps)(Main);