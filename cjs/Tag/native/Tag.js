'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _native = require('../../Text/native');

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  background: function background(props) {
    if (props.kind === 'filled') return props.theme.color[props.color];
    return props.theme.color[props.color + 'Lighter'];
  },
  padding: function padding(props) {
    if (props.size === 'small') return props.theme.px([0.5, 1]);
    return props.theme.px([1, 1.5]);
  },
  borderColor: function borderColor(props) {
    return props.theme.color[props.color];
  },
  borderRadius: function borderRadius(props) {
    if (props.shape === 'capsular') {
      return props.theme.px(10);
    } else if (props.shape === 'sharpEdged') {
      return props.theme.px(0);
    }
    return props.theme.borderRadius;
  }
};

var TagContainer = _styledComponents2.default.View.withConfig({
  displayName: 'Tag__TagContainer'
})(['align-self:flex-start;align-items:center;justify-content:center;border-radius:', ';padding:', ';background:', ';border-width:1;border-color:', ';'], styles.borderRadius, styles.padding, styles.background, styles.borderColor);

var Tag = function Tag(_ref) {
  var color = _ref.color,
      kind = _ref.kind,
      size = _ref.size,
      children = _ref.children,
      shape = _ref.shape;
  return _react2.default.createElement(
    TagContainer,
    {
      color: color,
      kind: kind,
      size: size,
      shape: shape
    },
    _react2.default.createElement(
      _native2.default,
      {
        color: {
          filled: 'white',
          outlined: color
        }[kind],
        size: {
          small: 'xxs',
          medium: 'xs'
        }[size]
      },
      children
    )
  );
};

Tag.propTypes = {
  color: _propTypes2.default.string,
  kind: _propTypes2.default.oneOf(['filled', 'outlined']),
  size: _propTypes2.default.oneOf(['small', 'medium']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'capsular', 'sharpEdged']),
  children: _propTypes2.default.string
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged'
};

exports.default = Tag;