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

var HomeContainer = _interopRequire(require("../components/HomeContainer"));

var Pets = _interopRequire(require("../components/Pets"));

var PetProfile = _interopRequire(require("../components/PetProfile"));

var RegisterPet = _interopRequire(require("../components/RegisterPet"));

var VetProfile = _interopRequire(require("../components/VetProfile"));

var VetsContainer = _interopRequire(require("../components/VetsContainer"));

var ComingSoon = _interopRequire(require("../components/ComingSoon"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var connect = require("react-redux").connect;
var Main = (function (Component) {
	function Main(props, context) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props, context);
		this.fetchPets = this.fetchPets.bind(this);
		this.fetchVetResults = this.fetchVetResults.bind(this);
	}

	_inherits(Main, Component);

	_prototypeProperties(Main, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;

				api.handleGet("/account/currentuser", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					if (response.confirmation == "Success") {
						store.dispatch(actions.receivedCurrentUser(response.user));
						_this.fetchPets();
						_this.fetchVetResults();
					}
				});
			},
			writable: true,
			configurable: true
		},
		fetchPets: {
			value: function fetchPets() {
				var user = this.props.currentUser || {};
				//  var storeState = store.getState()
				// var user = storeState.accountReducer.currentUser || {}

				if (user.id != null) {
					var endpoint = "/api/pet?ownerId=" + user.id;
					api.handleGet(endpoint, null, function (err, response) {
						if (err) {
							alert(err.message);
							return;
						}

						store.dispatch(actions.receivedPets(response.results));

						return;
					});
				}
			},
			writable: true,
			configurable: true
		},
		fetchVetResults: {
			value: function fetchVetResults() {
				var user = this.props.currentUser || {};


				if (user.id != null && this.props.page == "vet") {
					var endpoint = "/api/vet?currentUserId=" + user.id;
					console.log("FETCH_VET_RESULTS ENDPOINT: " + JSON.stringify(endpoint));
					api.handleGet(endpoint, null, function (err, response) {
						if (err) {
							alert(err.message);
							return;
						}

						if (response.confirmation == "Success") {
							console.log("VET SEARCH RESULTS: " + JSON.stringify(response.results));
							store.dispatch(actions.receivedUserSearchHistory(response.results));
						}
					});
				}
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var page = null;
				var currentUser = this.props.currentUser || {};

				switch (this.props.page) {
					case "home":
						if (currentUser.id != null) {
							return page = React.createElement(HomeContainer, { currentUser: this.props.currentUser });
						}

						return page = React.createElement(Landing, { currentUser: this.props.currentUser });
					case "account":
						return page = React.createElement(Account, { currentUser: this.props.currentUser, showEditProfile: this.props.showEditProfile });
					case "pets":
						return page = React.createElement(Pets, { currentUser: this.props.currentUser, petsArray: this.props.petsArray, showRegisterPet: this.props.showRegisterPet });
					case "pet":
						return page = React.createElement(PetProfile, { currentUser: this.props.currentUser, pets: this.props.pets, slug: this.props.slug, displayEditPet: this.props.displayEditPet });
					case "register-pet":
						return page = React.createElement(RegisterPet, { currentUser: this.props.currentUser });
					case "vets":
						return page = React.createElement(VetsContainer, { currentUser: this.props.currentUser, search: this.props.search, pets: this.props.pets, slug: this.props.slug });
					case "vet":
						return page = React.createElement(VetProfile, { currentUser: this.props.currentUser, searchHistory: this.props.searchHistory, slug: this.props.slug });
					case "insurance":
						return page = React.createElement(ComingSoon, null);
					default:
						return page = null;
				}

				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						null,
						page
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Main;
})(Component);

var stateToProps = function (state) {
	console.log("STATE_TO_PROPS_MAIN: ");

	return {
		currentUser: state.accountReducer.currentUser,
		petsArray: state.petReducer.petsArray,
		pets: state.petReducer.pets,
		search: state.searchReducer.search,
		searchHistory: state.searchReducer.searchHistory,
		displayEditPet: state.displayReducer.displayEditPet,
		showRegisterPet: state.displayReducer.showRegisterPet,
		showEditProfile: state.displayReducer.showEditProfile
	};
};

module.exports = connect(stateToProps)(Main);