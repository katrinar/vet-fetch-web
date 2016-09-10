"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Markers = _interopRequire(require("../components/Markers"));

var GoogleMap = _interopRequire(require("google-map-react"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var MapContainer = (function (Component) {
	function MapContainer(props, context) {
		_classCallCheck(this, MapContainer);

		_get(Object.getPrototypeOf(MapContainer.prototype), "constructor", this).call(this, props, context);
		this.state = {};
	}

	_inherits(MapContainer, Component);

	_prototypeProperties(MapContainer, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(GoogleMap, {
						defaultCenter: this.props.center,
						defaultZoom: this.props.zoom,
						style: this.props.style })
				);
			},
			writable: true,
			configurable: true
		}
	});

	return MapContainer;
})(Component);

MapContainer.propTypes = {
	center: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
	zoom: React.PropTypes.number.isRequired
};

MapContainer.defaultProps = {
	center: [40.7144522, -73.9601094],
	zoom: 10,
	style: { height: 500, width: 500, position: "absolute" }
};

module.exports = MapContainer;
// center={this.props.search.geo}