"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = _interopRequire(require("../components/Nav"));

var Footer = _interopRequire(require("../components/Footer"));

var HomeContainer = (function (Component) {
    function HomeContainer(props, context) {
        _classCallCheck(this, HomeContainer);

        _get(Object.getPrototypeOf(HomeContainer.prototype), "constructor", this).call(this, props, context);
    }

    _inherits(HomeContainer, Component);

    _prototypeProperties(HomeContainer, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
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
                                "Welcome, ",
                                this.props.currentUser.username
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
                                { id: "portfolio", className: "portfolio-1 clearfix" },
                                React.createElement(
                                    "article",
                                    { className: "portfolio-item pf-media pf-icons clearfix" },
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-image" },
                                        React.createElement("img", { src: "/images/iphone-on-desk-2.png", alt: "Pet Dashboard" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-desc" },
                                        React.createElement(
                                            "h3",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "/pets" },
                                                "Pet Dashboard"
                                            )
                                        ),
                                        React.createElement(
                                            "ul",
                                            { className: "iconlist" },
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "Register Pet"
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "My Pets"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "article",
                                    { className: "portfolio-item pf-media pf-icons clearfix" },
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-image" },
                                        React.createElement("img", { src: "/images/writing.png", alt: "Vet Insurance" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-desc" },
                                        React.createElement(
                                            "h3",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "/vets" },
                                                "Vet Search"
                                            )
                                        ),
                                        React.createElement(
                                            "ul",
                                            { className: "iconlist" },
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "Find Vets"
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "Coming Soon: Bookmarked Vets"
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "article",
                                    { className: "portfolio-item pf-media pf-icons clearfix" },
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-image" },
                                        React.createElement("img", { src: "/images/woman-at-desk.png", alt: "Pet Insurance" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-desc" },
                                        React.createElement(
                                            "h3",
                                            null,
                                            React.createElement(
                                                "a",
                                                { href: "/insurance" },
                                                "Pet Insurance"
                                            )
                                        ),
                                        React.createElement(
                                            "ul",
                                            { className: "iconlist" },
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "Coming Soon: Insurance 101"
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement("i", { className: "icon-ok" }),
                                                "Coming Soon: Find a Plan for your Pet"
                                            )
                                        )
                                    )
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

    return HomeContainer;
})(Component);

module.exports = HomeContainer;