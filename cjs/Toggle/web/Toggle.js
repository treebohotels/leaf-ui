'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function (_React$Component) {
  (0, _inherits3.default)(Toggle, _React$Component);

  function Toggle() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      on: false
    }, _this.setToggle = function (on) {
      _this.setState({ on: on });
    }, _this.toggle = function () {
      _this.setState(function (prevState) {
        return {
          on: !prevState.on
        };
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Toggle.prototype.render = function render() {
    var on = this.state.on;
    var children = this.props.children;

    return children({
      on: on,
      toggle: this.toggle,
      setToggle: this.setToggle
    });
  };

  return Toggle;
}(_react2.default.Component);

Toggle.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = Toggle;