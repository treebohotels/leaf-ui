'use strict';

exports.__esModule = true;
exports.I = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = require('../../Flex/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  color: function color(props) {
    if (props.color) {
      return props.theme.color[props.color];
    } else if (props.disabled) {
      return props.theme.color.greyLight;
    }
    return '';
  }
};

var I = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      name = _ref.name,
      right = _ref.right,
      hasChildren = _ref.hasChildren,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'name', 'right', 'hasChildren']);
  return _react2.default.createElement('i', props);
}).attrs({
  className: function className(props) {
    return props.className ? 'material-icons ' + props.className : 'material-icons';
  },
  children: function children(props) {
    return props.name;
  }
}).withConfig({
  displayName: 'Icon__I'
})(['color:', ';margin-left:', ';margin-right:', ';font-size:', ';cursor:', ';pointer-events:', ';opacity:', ';&:hover{background:', ';}'], styles.color, function (props) {
  return props.hasChildren && props.right ? props.theme.px(1) : '';
}, function (props) {
  return props.hasChildren ? props.theme.px(1) : '';
}, function (props) {
  return props.hasChildren ? 'inherit !important' : '';
}, function (props) {
  return props.onClick ? 'pointer' : '';
}, function (props) {
  return props.disabled ? 'none' : '';
}, function (props) {
  return props.disabled ? '0.5' : '';
}, function (props) {
  return props.onClick ? props.theme.color.translucent : '';
});

exports.I = I;
var Icon = function Icon(_ref2) {
  var color = _ref2.color,
      name = _ref2.name,
      right = _ref2.right,
      onClick = _ref2.onClick,
      children = _ref2.children,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['color', 'name', 'right', 'onClick', 'children']);
  return _react2.default.createElement(
    _web2.default,
    { alignItems: 'center' },
    right ? children : null,
    _react2.default.createElement(I, (0, _extends3.default)({
      color: color,
      name: name,
      right: right,
      onClick: onClick,
      hasChildren: !!children
    }, props)),
    !right ? children : null
  );
};

Icon.propTypes = {
  color: _propTypes2.default.string,
  name: _propTypes2.default.string,
  right: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.node
};

Icon.defaultProps = {
  name: 'fiber_manual_record',
  right: false,
  disabled: false
};

exports.default = Icon;