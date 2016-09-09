"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Register = _interopRequire(require("../components/Register"));

var Login = _interopRequire(require("../components/Login"));

var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var Landing = (function (Component) {
    function Landing() {
        _classCallCheck(this, Landing);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Landing, Component);

    _prototypeProperties(Landing, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Nav, null),
                    React.createElement(
                        "section",
                        { id: "slider", className: "slider-parallax full-screen dark", style: { background: "url(\"/images/landing/cover.jpg\") center", overflow: "visible" } },
                        React.createElement(
                            "div",
                            { className: "container vertical-middle clearfix" },
                            React.createElement(
                                "div",
                                { className: "heading-block title-center nobottomborder" },
                                React.createElement(
                                    "h1",
                                    null,
                                    "All your pet health information in one place."
                                ),
                                React.createElement(
                                    "span",
                                    null,
                                    "Managing your pets health information has never been easier."
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "section notopmargin nobottommargin" },
                        React.createElement(
                            "div",
                            { className: "container clearfix" },
                            React.createElement(
                                "div",
                                { className: "fancy-title title-dotted-border" },
                                React.createElement(
                                    "h3",
                                    null,
                                    "Fetch your pet care today!"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third" },
                                React.createElement(
                                    "div",
                                    { className: "feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect" },
                                    React.createElement(
                                        "div",
                                        { className: "fbox-icon" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement(
                                                "i",
                                                { className: "i-alt" },
                                                "1"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Register Your Pet",
                                        React.createElement(
                                            "span",
                                            { className: "subtitle" },
                                            "Step 1"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third" },
                                React.createElement(
                                    "div",
                                    { className: "feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect" },
                                    React.createElement(
                                        "div",
                                        { className: "fbox-icon" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement(
                                                "i",
                                                null,
                                                "2"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Save Health Record",
                                        React.createElement(
                                            "span",
                                            { className: "subtitle" },
                                            "Step 2"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_third col_last" },
                                React.createElement(
                                    "div",
                                    { className: "feature-box fbox-center fbox-bg fbox-outline fbox-dark fbox-effect" },
                                    React.createElement(
                                        "div",
                                        { className: "fbox-icon" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement(
                                                "i",
                                                { className: "i-alt" },
                                                "3"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Find Vets Near You",
                                        React.createElement(
                                            "span",
                                            { className: "subtitle" },
                                            "Step 3"
                                        )
                                    )
                                )
                            ),
                            React.createElement("div", { className: "line" }),
                            React.createElement(Login, { currentUser: this.props.currentUser }),
                            React.createElement(Register, { currentUser: this.props.currentUser }),
                            React.createElement("div", { className: "clear" }),
                            React.createElement("div", { className: "line" }),
                            React.createElement(
                                "div",
                                { className: "col_one_fourth nobottommargin center" },
                                React.createElement("i", { className: "i-plain i-xlarge divcenter nobottommargin icon-fire" }),
                                React.createElement(
                                    "div",
                                    { className: "counter counter-large", style: { color: "#1abc9c" } },
                                    React.createElement("span", { "data-from": "0", "data-to": "65", "data-refresh-interval": "30", "data-speed": "2700" })
                                ),
                                React.createElement(
                                    "h5",
                                    null,
                                    "Percent of US Pet Owners"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_fourth nobottommargin center" },
                                React.createElement("i", { className: "i-plain i-xlarge divcenter nobottommargin icon-gift" }),
                                React.createElement(
                                    "div",
                                    { className: "counter counter-large", style: { color: "#3498db" } },
                                    React.createElement("span", { "data-from": "10", "data-to": "85", "data-refresh-interval": "50", "data-speed": "3500" })
                                ),
                                React.createElement(
                                    "h5",
                                    null,
                                    "Million Pet Cats"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_fourth nobottommargin center" },
                                React.createElement("i", { className: "i-plain i-xlarge divcenter nobottommargin icon-fire" }),
                                React.createElement(
                                    "div",
                                    { className: "counter counter-large", style: { color: "#9b59b6" } },
                                    React.createElement("span", { "data-from": "10", "data-to": "78", "data-refresh-interval": "30", "data-speed": "2700" })
                                ),
                                React.createElement(
                                    "h5",
                                    null,
                                    "Million Pet Dogs"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col_one_fourth nobottommargin center col_last" },
                                React.createElement("i", { className: "i-plain i-xlarge divcenter nobottommargin icon-fire" }),
                                React.createElement(
                                    "div",
                                    { className: "counter counter-large", style: { color: "#F49AC2" } },
                                    React.createElement("span", { "data-from": "100", "data-to": "1288", "data-refresh-interval": "30", "data-speed": "2700" })
                                ),
                                React.createElement(
                                    "h5",
                                    null,
                                    "Dollars Spent on Vet Care a Year"
                                )
                            )
                        )
                    ),
                    React.createElement(Footer, null)
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Landing;
})(Component);

module.exports = Landing;