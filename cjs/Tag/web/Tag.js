'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  color: function color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    } else if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    }
    return '';
  },
  background: function background(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      return props.theme.color[props.color + 'Lighter'];
    }
    return '';
  },
  borderRadius: function borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'capsular') {
      return props.theme.px(10);
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  fontSize: function fontSize(props) {
    if (props.size === 'small') {
      return props.theme.fontSize.xxxs;
    } else if (props.size === 'medium') {
      return props.theme.fontSize.xs;
    }
    return '';
  },
  padding: function padding(props) {
    if (props.size === 'small') {
      return props.theme.px([0.375, 1]);
    } else if (props.size === 'medium') {
      return props.theme.px([0.5, 1.5]);
    }
    return '';
  }
};

var Tag = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      kind = _ref.kind,
      shape = _ref.shape,
      size = _ref.size,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'kind', 'shape', 'size']);
  return _react2.default.createElement('div', props);
}).withConfig({
  displayName: 'Tag'
})(['display:inline-flex;align-items:center;justify-content:center;color:', ';background:', ';border:1px solid ', ';border-radius:', ';font-size:', ';padding:', ';'], styles.color, styles.background, function (props) {
  return props.theme.color[props.color];
}, styles.borderRadius, styles.fontSize, styles.padding);

Tag.propTypes = {
  color: _propTypes2.default.string,
  kind: _propTypes2.default.oneOf(['filled', 'outlined']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'capsular']),
  size: _propTypes2.default.oneOf(['small', 'medium'])
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'filled',
  shape: 'bluntEdged',
  size: 'medium'
};

exports.default = Tag;