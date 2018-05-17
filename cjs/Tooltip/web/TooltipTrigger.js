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

var TooltipTrigger = function (_React$Component) {
  (0, _inherits3.default)(TooltipTrigger, _React$Component);

  function TooltipTrigger() {
    (0, _classCallCheck3.default)(this, TooltipTrigger);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  TooltipTrigger.prototype.render = function render() {
    var _props = this.props,
        _onMouseEnter = _props.onMouseEnter,
        _onMouseLeave = _props.onMouseLeave,
        children = _props.children;

    return _react2.default.cloneElement(children, {
      onMouseEnter: function onMouseEnter() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (children.props.onMouseEnter) children.props.onMouseEnter.apply(children, args);
        _onMouseEnter.apply(children, args);
      },
      onMouseLeave: function onMouseLeave() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (children.props.onMouseLeave) children.props.onMouseLeave.apply(children, args);
        _onMouseLeave.apply(children, args);
      }
    });
  };

  return TooltipTrigger;
}(_react2.default.Component);

TooltipTrigger.propTypes = {
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  children: _propTypes2.default.node
};

exports.default = TooltipTrigger;