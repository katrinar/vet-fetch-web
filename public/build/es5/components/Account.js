"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var api = _interopRequire(require("../utils/api"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Pets = _interopRequire(require("../components/Pets"));

var RegisterPet = _interopRequire(require("../components/RegisterPet"));

var Account = (function (Component) {
	function Account(props, context) {
		_classCallCheck(this, Account);

		_get(Object.getPrototypeOf(Account.prototype), "constructor", this).call(this, props, context);
		this.logout = this.logout.bind(this);
		this.fetchPets = this.fetchPets.bind(this);

		this.state = {};
	}

	_inherits(Account, Component);

	_prototypeProperties(Account, null, {
		componentDidMount: {
			value: function componentDidMount() {
				console.log("ACCOUNT componentDidMount: ");


				var _this = this;
				api.handleGet("/account/currentuser", null, function (err, result) {
					if (err) {
						alert(err.message);
						return;
					}

					console.log("Account Get Current User: " + JSON.stringify(result.user));

					store.dispatch(actions.currentUserReceived(result.user));
					_this.fetchPets();

					return;
				});
			},
			writable: true,
			configurable: true
		},
		fetchPets: {
			value: function fetchPets() {
				if (this.props.user.id == null) {
					return;
				}

				var endpoint = "/api/pet?ownerId=" + this.props.user.id;
				console.log("FETCH PETS ENDPOINT: " + JSON.stringify(endpoint));
				api.handleGet(endpoint, null, function (err, results) {
					if (err) {
						alert(err.message);
						return;
					}
					console.log("FETCH PETS: " + JSON.stringify(results.results));
					store.dispatch(actions.petsReceived(results.results));
				});
			},
			writable: true,
			configurable: true
		},
		logout: {
			value: function logout(event) {
				event.preventDefault();
				api.handleGet("/account/logout", null, function (err, results) {
					if (err) {
						alert(err.message);
						return;
					}

					console.log("Account logout Response: " + JSON.stringify(result));
					store.dispatch(actions.currentUserLogout(results.user));
					return;
				});
				window.location.href = "/index";
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				// var endpoint = '/api/pet?ownerId='+this.props.user.id
				// console.log('Account Render Component Current User: '+JSON.stringify(endpoint))


				return React.createElement(
					"div",
					null,
					"This is your Account Home Page!",
					React.createElement(
						"h1",
						null,
						"Welcome, ",
						this.props.user.firstName
					),
					React.createElement(RegisterPet, null),
					React.createElement("br", null),
					React.createElement(Pets, null),
					React.createElement("br", null),
					React.createElement(
						"a",
						{ onClick: this.logout, href: "/" },
						"Logout"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Account;
})(Component);

var stateToProps = function (state) {
	console.log("ACCOUNT STATE TO PROPS: " + JSON.stringify(state));
	return {
		user: state.accountReducer.currentUser

	};
};

module.exports = connect(stateToProps)(Account);