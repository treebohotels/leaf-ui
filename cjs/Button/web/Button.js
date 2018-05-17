'use strict';

exports.__esModule = true;

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

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

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
  backgroundColor: function backgroundColor(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      return 'transparent';
    }
    return '';
  },
  fontSize: function fontSize(props) {
    if (props.size === 'small') {
      return props.theme.fontSize.xs;
    } else if (props.size === 'medium') {
      return props.theme.fontSize.s;
    } else if (props.size === 'large') {
      return props.theme.fontSize.s;
    }
    return '';
  },
  padding: function padding(props) {
    if (props.size === 'small') {
      return props.theme.px([1, 2]);
    } else if (props.size === 'medium') {
      return props.theme.px([1.625, 2]);
    } else if (props.size === 'large') {
      return props.theme.px([2.25, 2]);
    }
    return '';
  },
  borderColor: function borderColor(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      return props.theme.color[props.color];
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
  pointerEvents: function pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity: function opacity(props) {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },

  hover: {
    color: function color(props) {
      if (props.kind === 'filled') {
        return props.theme.color.white;
      } else if (props.kind === 'outlined') {
        return props.theme.color.white;
      }
      return '';
    },
    backgroundColor: function backgroundColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[props.color + 'Dark'];
      } else if (props.kind === 'outlined') {
        return props.theme.color[props.color];
      }
      return '';
    },
    borderColor: function borderColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[props.color + 'Dark'];
      } else if (props.kind === 'outlined') {
        return props.theme.color[props.color];
      }
      return '';
    }
  }
};

var StyledButton = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      kind = _ref.kind,
      size = _ref.size,
      shape = _ref.shape,
      block = _ref.block,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'kind', 'size', 'shape', 'block']);
  return _react2.default.createElement('button', props);
}).withConfig({
  displayName: 'Button__StyledButton'
})(['display:inline-flex;align-items:center;justify-content:center;cursor:pointer;text-transform:uppercase;color:', ';font-size:', ';background-color:', ';padding:', ';width:', ';border-width:1px;border-style:solid;border-color:', ';border-radius:', ';pointer-events:', ';opacity:', ';&:hover{color:', ';background-color:', ';border-color:', ';}'], styles.color, styles.fontSize, styles.backgroundColor, styles.padding, function (props) {
  return props.block ? '100%' : '';
}, styles.borderColor, styles.borderRadius, styles.pointerEvents, styles.opacity, styles.hover.color, styles.hover.backgroundColor, styles.hover.borderColor);

var Button = function Button(props, context) {
  return _react2.default.createElement(StyledButton, (0, _extends3.default)({}, props, {
    disabled: props.disabled || props.type === 'submit' && context.formik && !context.formik.isValid
  }));
};

Button.propTypes = {
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  kind: _propTypes2.default.oneOf(['filled', 'outlined']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  block: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false
};

Button.contextTypes = {
  formik: _propTypes2.default.object
};

exports.default = Button;