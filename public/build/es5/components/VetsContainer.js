"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var HomeButton = _interopRequire(require("../components/HomeButton"));

var Markers = _interopRequire(require("../components/Markers"));

var GoogleMap = _interopRequire(require("google-map-react"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var api = _interopRequire(require("../utils/api"));

var request = _interopRequire(require("superagent"));

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
				// console.log('SEARCH ZIP PARAMS/ SEARCH STATE = '+JSON.stringify(this.state.search))
				var searchResponse = Object.assign({}, this.state.search);

				api.handlePost("/api/vet", this.state.search, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					console.log("SEARCH ZIP RESPONSE.result = " + JSON.stringify(response.result));
					searchResponse = response.result;
					console.log("SEARCH ZIP UPDATED SEARCH STATE GEO= " + JSON.stringify(searchResponse.geo));
					_this.searchVets(searchResponse.geo[0], searchResponse.geo[1]);
					store.dispatch(actions.receivedSearch(searchResponse));
				});
			},
			writable: true,
			configurable: true
		},
		searchVets: {
			value: function searchVets(lat, lng) {
				event.preventDefault();

				// console.log('searchVets lat, lng = '+JSON.stringify(lat+', '+lng))
				var lat = lat;
				var lng = lng;


				// request.get(GOOGLE_API_URL+"location="+lat+","+lng)
				//                    // .query({location: location})
				//                    .query({radius: '1000'})
				//                    .query({keyword: 'vet'})
				//                    .query({key: GOOGLE_API_KEY})
				//                    .end(function(err, response){
				//                    	if (err){
				//                    		console.error(err)
				//                    	}

				//                    	console.log('SearchVets response = '+JSON.stringify(response))
				//                    })


				request.get(GOOGLE_API_URL + "location=" + lat + "," + lng).query({ radius: "1000" }).query({ keyword: "vet" }).query({ key: GOOGLE_API_KEY }).end(function (err, response) {
					if (err) {
						console.error(err);
					}

					if (response.status == "OK") {
						console.log("search response = " + JSON.stringify(response));
					}
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
							React.createElement("br", null),
							React.createElement(
								"button",
								{ onClick: this.searchZip },
								"Search"
							)
						)
					),
					React.createElement(
						"div",
						null,
						React.createElement(
							GoogleMap,
							{
								center: this.props.search.geo,
								defaultZoom: this.props.zoom,
								style: this.props.style,
								yesIWantToUseGoogleMapApiInternals: true },
							React.createElement(Markers, _extends({}, this.props.search.geo, { text: "A" }))
						)
					)
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
	style: { height: 500, width: 500, position: "absolute" }
};

module.exports = VetsContainer;
// defaultCenter={this.props.center}