"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var HomeButton = _interopRequire(require("../components/HomeButton"));

var VetSearchResultsList = _interopRequire(require("../components/VetSearchResultsList"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var api = _interopRequire(require("../utils/api"));

var GOOGLE_API_KEY = "AIzaSyBqcuqe2FA3czjR1JlSlkUSnagT1BGKmJI";
var GOOGLE_API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

var VetsContainer = (function (Component) {
	function VetsContainer(props, context) {
		_classCallCheck(this, VetsContainer);

		_get(Object.getPrototypeOf(VetsContainer.prototype), "constructor", this).call(this, props, context);
		this.searchZip = this.searchZip.bind(this);
		this.submitZip = this.submitZip.bind(this);
		this.searchVets = this.searchVets.bind(this);
		this.state = {
			search: {
				zipcode: "",
				geo: []
			}
		};
	}

	_inherits(VetsContainer, Component);

	_prototypeProperties(VetsContainer, null, {
		submitZip: {
			value: function submitZip(event) {
				event.preventDefault();
				var vetSearch = Object.assign({}, this.state.vet);
				vetSearch[event.target.id] = event.target.value;
				this.setState({
					search: vetSearch
				});
			},
			writable: true,
			configurable: true
		},
		searchZip: {
			value: function searchZip(event) {
				event.preventDefault();
				var _this = this;

				var searchResponse = Object.assign({}, this.state.search);

				api.handlePost("/api/vet", this.state.search, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					console.log("SEARCH ZIP RESPONSE.result = " + JSON.stringify(response.result));
					searchResponse = response.result;
					console.log("SEARCH ZIP UPDATED SEARCH RESPONSE= " + JSON.stringify(searchResponse.geo));

					store.dispatch(actions.receivedSearch(searchResponse));
					_this.searchVets();
				});
			},
			writable: true,
			configurable: true
		},
		searchVets: {
			value: function searchVets() {
				event.preventDefault();
				console.log("SEARCH VETS : " + JSON.stringify(this.props.search.id));
				var endpoint = "/api/vet/" + this.props.search.id;
				console.log("SEARCH VETS endpoint = " + JSON.stringify(endpoint));

				api.handlePut(endpoint, this.props.search, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					var vetResults = response.result;
					console.log("SEARCH VETS: PUT RESPONSE RECEIVED ");
					store.dispatch(actions.receivedSearchResults(vetResults));
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
					React.createElement(HomeButton, null),
					React.createElement(
						"div",
						null,
						React.createElement(
							"h2",
							null,
							"Find a vet!"
						),
						React.createElement(
							"form",
							null,
							React.createElement("input", { type: "text", onChange: this.submitZip, id: "zipcode", placeholder: "Zipcode" }),
							React.createElement("br", null)
						),
						React.createElement(
							"button",
							{ onClick: this.searchZip },
							"Search"
						),
						React.createElement(VetSearchResultsList, { search: this.props.search })
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return VetsContainer;
})(Component);

module.exports = VetsContainer;