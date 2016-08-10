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

var navigation = _interopRequire(require("../utils/navigation"));

var Account = _interopRequire(require("../components/Account"));

var Landing = _interopRequire(require("../components/Landing"));

var Pets = _interopRequire(require("../components/Pets"));

var PetProfile = _interopRequire(require("../components/PetProfile"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Main = (function (Component) {
	function Main(props, context) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props, context);
		this.fetchPets = this.fetchPets.bind(this);
	}

	_inherits(Main, Component);

	_prototypeProperties(Main, null, {
		componentWillMount: {
			value: function componentWillMount() {
				var storeState = store.getState();
				console.log("MAIN COMPONENT WILL MOUNT: " + JSON.stringify(storeState));
			},
			writable: true,
			configurable: true
		},
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;


				var storeState = store.getState();
				console.log("MAIN: " + JSON.stringify(storeState));

				api.handleGet("/account/currentuser", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					store.dispatch(actions.receivedCurrentUser(response.user));

					_this.fetchPets();
				});
			},
			writable: true,
			configurable: true
		},
		fetchPets: {
			value: function fetchPets() {
				var _this = this;


				var endpoint = "/api/pet?ownerId=" + this.props.currentUser.id;
				api.handleGet(endpoint, null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					store.dispatch(actions.receivedPets(response.results));

					return;
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var page = null;

				// switch(this.props.page){
				// 	case 'home':
				// 		return page = <Landing />
				// 	case 'account':
				// 		return page = <Account currentUser={this.props.currentUser}/>
				// 	case 'pets':
				// 		return page = <Pets />
				// 	case 'pet':
				// 		return page = <PetProfile slug={this.props.slug} pets={this.props.pets} />
				// 	default:
				// 		return page = null
				// }

				switch (this.props.page) {
					case "home":
						if (this.props.currentUser.id != null) {
							return page = React.createElement(Account, { currentUser: this.props.currentUser });
						}

						return page = React.createElement(Landing, null);
					case "account":
						return page = React.createElement(Account, { currentUser: this.props.currentUser });
					case "pets":
						return page = React.createElement(Pets, null);
					case "pet":
						return page = React.createElement(PetProfile, { slug: this.props.slug, pets: this.props.pets });
					default:
						return page = null;
				}

				return React.createElement(
					"div",
					null,
					page
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
		petsArray: state.petReducer.petsArray,
		pets: state.petReducer.pets };
};

module.exports = connect(stateToProps)(Main);