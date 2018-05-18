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

var _DropdownTrigger = require('./DropdownTrigger');

var _DropdownTrigger2 = _interopRequireDefault(_DropdownTrigger);

var _DropdownContent = require('./DropdownContent');

var _DropdownContent2 = _interopRequireDefault(_DropdownContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.setDropdownTriggerRef = function (ref) {
      _this.dropdownTriggerRef = ref;
    }, _this.open = function () {
      if (!_this.state.show) {
        document.addEventListener('click', _this.close);
        _this.setState({ show: true });
      }
    }, _this.close = function () {
      if (_this.state.show) {
        document.removeEventListener('click', _this.close);
        _this.setState({ show: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Dropdown.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.close);
  };

  Dropdown.prototype.render = function render() {
    var show = this.state.show;
    var _props = this.props,
        placement = _props.placement,
        children = _props.children;

    var dropdownChildrenByType = (0, _reactChildrenByType2.default)(children);

    return _react2.default.createElement(
      _web2.default,
      { display: 'inline-block' },
      _react2.default.cloneElement(dropdownChildrenByType[_DropdownTrigger2.default], {
        ref: this.setDropdownTriggerRef,
        onClick: this.open
      }),
      _react2.default.createElement(
        _reactOverlays.Overlay,
        {
          show: show,
          placement: placement,
          target: this.dropdownTriggerRef
        },
        dropdownChildrenByType[_DropdownContent2.default]
      )
    );
  };

  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  children: _propTypes2.default.node
};

Dropdown.defaultProps = {
  placement: 'bottom'
};

Dropdown.Trigger = _DropdownTrigger2.default;
Dropdown.Content = _DropdownContent2.default;

exports.default = Dropdown;