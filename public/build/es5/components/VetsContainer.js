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

var api = _interopRequire(require("../utils/api"));

var VetSearchResultsList = _interopRequire(require("../components/VetSearchResultsList"));

var TopBar = _interopRequire(require("../components/TopBar"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var MapContainer = _interopRequire(require("../components/MapContainer"));

var GoogleMap = _interopRequire(require("google-map-react"));

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
				geo: [],
				currentUserId: null
			}
		};
	}

	_inherits(VetsContainer, Component);

	_prototypeProperties(VetsContainer, null, {
		submitZip: {
			value: function submitZip(event) {
				event.preventDefault();
				var user = this.props.currentUser || {};
				var vetSearch = Object.assign({}, this.state.vet);
				vetSearch[event.target.id] = event.target.value;
				vetSearch.currentUserId = user.id;
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
					searchResponse = response.result;
					// console.log('response: '+JSON.stringify(searchResponse))

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

				var endpoint = "/api/vet/" + this.props.search.id;

				api.handlePut(endpoint, this.props.search, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					var vetResults = response.result;

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
					React.createElement(TopBar, null),
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
								"Vet Dashboard"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin nobg" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ className: "fancy-title title-double-border" },
								React.createElement(
									"h2",
									null,
									"Find Vets Near You"
								)
							),
							React.createElement(
								"form",
								null,
								React.createElement("input", { type: "text", onChange: this.submitZip, id: "zipcode", placeholder: "Zipcode" }),
								React.createElement("br", null)
							),
							React.createElement(
								"a",
								{ href: "#", onClick: this.searchZip, className: "button button-3d button-small button-rounded button-aqua" },
								"Search"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin nobg" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(VetSearchResultsList, { search: this.props.search })
						)
					),
					React.createElement("div", { className: "clear" }),
					React.createElement(
						"div",
						{ className: "section notopmargin nobottommargin nobg" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(GoogleMap, {
								center: this.props.search.geo,
								defaultZoom: this.props.zoom,
								style: this.props.style })
						)
					),
					React.createElement(Footer, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return VetsContainer;
})(Component);

VetsContainer.propTypes = {
	center: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
	zoom: React.PropTypes.number.isRequired
};

VetsContainer.defaultProps = {
	center: [40.7144522, -73.9601094],
	zoom: 10,
	style: { height: 500, width: 500, position: "relative" }
};

module.exports = VetsContainer;
// defaultCenter={this.props.center}