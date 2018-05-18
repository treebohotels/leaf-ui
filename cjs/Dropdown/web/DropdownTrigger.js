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

var DropdownTrigger = function (_React$Component) {
  (0, _inherits3.default)(DropdownTrigger, _React$Component);

  function DropdownTrigger() {
    (0, _classCallCheck3.default)(this, DropdownTrigger);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  DropdownTrigger.prototype.render = function render() {
    var _props = this.props,
        _onClick = _props.onClick,
        children = _props.children;

    return _react2.default.cloneElement(children, {
      onClick: function onClick() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (children.props.onClick) children.props.onClick.apply(children, args);
        _onClick.apply(children, args);
      }
    });
  };

  return DropdownTrigger;
}(_react2.default.Component);

DropdownTrigger.propTypes = {
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = DropdownTrigger;