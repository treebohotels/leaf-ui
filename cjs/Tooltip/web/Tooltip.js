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

var _reactOverlays = require('react-overlays');

var _reactChildrenByType = require('../../utils/reactChildrenByType');

var _reactChildrenByType2 = _interopRequireDefault(_reactChildrenByType);

var _web = require('../../Flex/web');

var _web2 = _interopRequireDefault(_web);

var _TooltipTrigger = require('./TooltipTrigger');

var _TooltipTrigger2 = _interopRequireDefault(_TooltipTrigger);

var _TooltipContent = require('./TooltipContent');

var _TooltipContent2 = _interopRequireDefault(_TooltipContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.setTooltipTriggerRef = function (ref) {
      _this.tooltipTriggerRef = ref;
    }, _this.open = function () {
      _this.setState({ show: true });
    }, _this.close = function () {
      _this.setState({ show: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tooltip.prototype.render = function render() {
    var show = this.state.show;
    var _props = this.props,
        placement = _props.placement,
        children = _props.children;

    var tooltipChildrenByType = (0, _reactChildrenByType2.default)(children);

    return _react2.default.createElement(
      _web2.default,
      { display: 'inline-block' },
      _react2.default.cloneElement(tooltipChildrenByType[_TooltipTrigger2.default], {
        ref: this.setTooltipTriggerRef,
        onMouseEnter: this.open,
        onMouseLeave: this.close
      }),
      _react2.default.createElement(
        _reactOverlays.Overlay,
        {
          show: show,
          placement: placement,
          target: this.tooltipTriggerRef
        },
        tooltipChildrenByType[_TooltipContent2.default]
      )
    );
  };

  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes = {
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  children: _propTypes2.default.node
};

Tooltip.defaultProps = {
  placement: 'bottom'
};

Tooltip.Trigger = _TooltipTrigger2.default;
Tooltip.Content = _TooltipContent2.default;

exports.default = Tooltip;