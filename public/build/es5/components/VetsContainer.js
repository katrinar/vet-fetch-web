"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var shouldPureComponentUpdate = _interopRequire(require("react-pure-render/function"));

var HomeButton = _interopRequire(require("../components/HomeButton"));

var GoogleMap = _interopRequire(require("google-map-react"));

var api = _interopRequire(require("../utils/api"));

var VetsContainer = (function (Component) {
	function VetsContainer(props, context) {
		_classCallCheck(this, VetsContainer);

		_get(Object.getPrototypeOf(VetsContainer.prototype), "constructor", this).call(this, props, context);
		this.searchZip = this.searchZip.bind(this);
		this.submitZip = this.submitZip.bind(this);
		this.state = {
			vet: {
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
					vet: vetSearch
				});
			},
			writable: true,
			configurable: true
		},
		searchZip: {
			value: function searchZip(event) {
				event.preventDefault();
				console.log("SEARCH ZIP PARAMS " + JSON.stringify(this.state.vet));

				api.handlePost("/api/vet", this.state.vet, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}
					console.log("SEARCH ZIP RESPONSE " + JSON.stringify(response.result));
					var vet = response.result

					// this.setState({
					// 	vet: vet
					// })
					// console.log('SEARCH ZIP STATE '+JSON.stringify(this.state.vet))
					;
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
						React.createElement(GoogleMap, {
							defaultCenter: this.props.center,
							defaultZoom: this.props.zoom, style: this.props.style, yesIWantToUseGoogleMapApiInternals: true })
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
	center: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
	zoom: React.PropTypes.number.isRequired
};

VetsContainer.defaultProps = {
	center: { lat: 40.7058316, lng: -74.2581956 },
	zoom: 9,
	style: { height: 500, width: 500, position: "absolute" }
};

module.exports = VetsContainer;