'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _styledComponents = require('styled-components');

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Card/web');

var _web4 = _interopRequireDefault(_web3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownContent = function (_React$Component) {
  (0, _inherits3.default)(DropdownContent, _React$Component);

  function DropdownContent() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropdownContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.styles = {
      dropdown: {
        position: 'absolute',
        padding: _this.props.theme.px(1)
      },

      dropdownArrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderStyle: 'solid'
      },

      placement: {
        top: {
          arrow: {
            bottom: 1,
            marginLeft: _this.props.theme.px(-1),
            borderWidth: _this.props.theme.px([1, 1, 0]),
            borderTopColor: _this.props.theme.color.white
          }
        },
        right: {
          arrow: {
            left: 1,
            marginTop: _this.props.theme.px(-1),
            borderWidth: _this.props.theme.px([1, 1, 1, 0]),
            borderRightColor: _this.props.theme.color.white
          }
        },
        bottom: {
          arrow: {
            top: 1,
            marginLeft: _this.props.theme.px(-1),
            borderWidth: _this.props.theme.px([0, 1, 1]),
            borderBottomColor: _this.props.theme.color.white
          }
        },
        left: {
          arrow: {
            right: 1,
            marginTop: _this.props.theme.px(-1),
            borderWidth: _this.props.theme.px([1, 0, 1, 1]),
            borderLeftColor: _this.props.theme.color.white
          }
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DropdownContent.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        placement = _props.placement,
        _props$arrowOffsetLef = _props.arrowOffsetLeft,
        left = _props$arrowOffsetLef === undefined ? this.styles.placement[placement].arrow.left : _props$arrowOffsetLef,
        _props$arrowOffsetTop = _props.arrowOffsetTop,
        top = _props$arrowOffsetTop === undefined ? this.styles.placement[placement].arrow.top : _props$arrowOffsetTop,
        children = _props.children;


    return _react2.default.createElement(
      'div',
      { style: (0, _extends3.default)({}, this.styles.dropdown, style) },
      _react2.default.createElement('div', {
        style: (0, _extends3.default)({}, this.styles.dropdownArrow, this.styles.placement[placement].arrow, {
          left: left,
          top: top
        })
      }),
      _react2.default.createElement(
        _web2.default,
        { minWidth: 25 },
        _react2.default.createElement(
          _web4.default,
          { elevated: true },
          children
        )
      )
    );
  };

  return DropdownContent;
}(_react2.default.Component);

DropdownContent.propTypes = {
  theme: _propTypes2.default.object,
  style: _propTypes2.default.object,
  placement: _propTypes2.default.string,
  arrowOffsetLeft: _propTypes2.default.string,
  arrowOffsetTop: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = (0, _styledComponents.withTheme)(DropdownContent);