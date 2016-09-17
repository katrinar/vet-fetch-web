"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var text = _interopRequire(require("../utils/text"));

var EditProfile = _interopRequire(require("../components/EditProfile"));

var AccountContent = _interopRequire(require("../components/AccountContent"));

var AccountLanding = _interopRequire(require("../components/AccountLanding"));

var Account = (function (Component) {
	function Account() {
		_classCallCheck(this, Account);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Account, Component);

	_prototypeProperties(Account, null, {
		render: {
			value: function render() {
				var loggedIn = this.props.currentUser || {};
				console.log("ACCOUNT user: " + JSON.stringify(loggedIn));
				var content = null;

				if (loggedIn.id != null) {
					switch (this.props.showEditProfile) {
						case false:
							return content = React.createElement(AccountContent, { showEditProfile: this.props.showEditProfile, currentUser: this.props.currentUser });
						case true:
							return content = React.createElement(EditProfile, { showEditProfile: this.props.showEditProfile, currentUser: this.props.currentUser });
					}
				} else {
					content = React.createElement(AccountLanding, { currentUser: this.props.currentUser, showEditProfile: this.props.showEditProfile });
				}



				return React.createElement(
					"div",
					null,
					content
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Account;
})(Component);

module.exports = Account;