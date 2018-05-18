'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  font-size: ', ';\n  color: ', ';\n  background-color: ', ';\n'], ['\n  position: absolute;\n  top: ', ';\n  left: ', ';\n  font-size: ', ';\n  color: ', ';\n  background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _native = require('../../Text/native');

var _native2 = _interopRequireDefault(_native);

var _native3 = require('../../Spacer/native');

var _native4 = _interopRequireDefault(_native3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelAnimationDuration = 300;

var modifierColor = function modifierColor() {
  var focused = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'green';
  var valid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'greyLight';
  var invalid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';
  var disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'grey';
  return function (props) {
    if (props.isFocused) return props.theme.color[focused];
    if (props.disabled) return props.theme.color[disabled];
    return props.error ? props.theme.color[invalid] : props.theme.color[valid];
  };
};

var labelColor = function labelColor(props) {
  if (props.isFocused) return props.theme.color.green;
  return props.error && !props.isEmptyInput ? props.theme.color.red : props.theme.color.grey;
};

var InputContainerWrapper = _styledComponents2.default.View.withConfig({
  displayName: 'TextInput__InputContainerWrapper'
})(['padding:', ';'], function (p) {
  return p.theme.px([2, 0]);
});

// TODO: create and use position component to create label component
var Label = _native2.default.extend(_templateObject, function (p) {
  return p.theme.px(1.3);
}, function (p) {
  return p.theme.px(1.5);
}, function (p) {
  return p.theme.fontSize.xxs;
}, labelColor, function (p) {
  return p.theme.color.transparent;
});

var AnimatedLabel = _reactNative.Animated.createAnimatedComponent(Label);

var InputContainer = _styledComponents2.default.View.withConfig({
  displayName: 'TextInput__InputContainer'
})(['position:relative;flex-direction:row;align-items:center;background:', ';border-color:', ';border-width:1;border-radius:', ';height:', ';'], modifierColor('transparent', 'transparent', 'redLighter', 'transparent'), modifierColor(), function (p) {
  return p.theme.borderRadius;
}, function (p) {
  return p.theme.px(6.75);
});

var RelativeFlexView = _styledComponents2.default.View.withConfig({
  displayName: 'TextInput__RelativeFlexView'
})(['position:relative;flex:1;']);

var Input = _styledComponents2.default.TextInput.withConfig({
  displayName: 'TextInput__Input'
})(['flex:1;padding:', ';font-size:', ';color:', ';height:', ';'], function (p) {
  return p.theme.px([2.1, 0, 0, 1.5]);
}, function (p) {
  return p.theme.fontSize.s;
}, function (p) {
  return p.theme.color.greyDarker;
}, function (p) {
  return p.theme.px(6.75);
});

var TextInput = function (_Component) {
  (0, _inherits3.default)(TextInput, _Component);

  function TextInput(props, _ref) {
    var formik = _ref.formik;
    (0, _classCallCheck3.default)(this, TextInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        name = _this$props.name,
        theme = _this$props.theme;

    _this.state = {
      labelTranslateValue: formik && formik.values[name] ? new _reactNative.Animated.Value(0) : new _reactNative.Animated.Value(theme.pxScale),
      isFocused: false
    };
    return _this;
  }

  TextInput.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        label = _props.label,
        placeholder = _props.placeholder,
        errorMessage = _props.error,
        theme = _props.theme,
        leftIcon = _props.leftIcon,
        rightIcon = _props.rightIcon,
        style = _props.style,
        props = (0, _objectWithoutProperties3.default)(_props, ['name', 'label', 'placeholder', 'error', 'theme', 'leftIcon', 'rightIcon', 'style']);
    var formik = this.context.formik;
    var _state = this.state,
        labelTranslateValue = _state.labelTranslateValue,
        isFocused = _state.isFocused;

    var inputProps = {
      name: name,
      onChangeText: this.handleTextChange,
      onBlur: this.handleBlur,
      onFocus: this.onFocus
    };
    var error = errorMessage;
    if (formik) {
      inputProps.value = formik.values[name];
      error = formik.touched[name] && formik.errors[name];
    }
    var labelFontSize = labelTranslateValue.interpolate({
      inputRange: [0, theme.pxScale],
      outputRange: [parseInt(theme.fontSize.xxs, 10), parseInt(theme.fontSize.s, 10)],
      extrapolate: 'clamp'
    });

    return _react2.default.createElement(
      InputContainerWrapper,
      { style: style },
      _react2.default.createElement(
        InputContainer,
        {
          error: error,
          isFocused: isFocused
        },
        this.getIconComponent(leftIcon, isFocused),
        _react2.default.createElement(
          RelativeFlexView,
          null,
          _react2.default.createElement(
            AnimatedLabel,
            {
              error: error,
              isFocused: isFocused,
              isEmptyInput: !inputProps.value,
              style: {
                fontSize: labelFontSize,
                transform: [{ translateY: labelTranslateValue }, { perspective: 1000 }]
              }
            },
            label
          ),
          _react2.default.createElement(Input, (0, _extends3.default)({
            id: name,
            placeholder: isFocused ? placeholder : '',
            underlineColorAndroid: theme.color.transparent,
            selectionColor: theme.color.green
          }, inputProps, props))
        ),
        this.getIconComponent(rightIcon, isFocused)
      ),
      error ? _react2.default.createElement(
        _native4.default,
        { margin: [1, 0, 0, 0] },
        _react2.default.createElement(
          _native2.default,
          { color: 'red', size: 'xs' },
          error
        )
      ) : null
    );
  };

  return TextInput;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onFocus = function () {
    var _state2 = _this2.state,
        labelTranslateValue = _state2.labelTranslateValue,
        isFocused = _state2.isFocused;

    _reactNative.Animated.timing(labelTranslateValue, {
      toValue: 0,
      duration: labelAnimationDuration
    }).start();
    if (!isFocused) {
      _this2.setState({ isFocused: true });
    }
  };

  this.getIconComponent = function (icon, isFocused) {
    if (icon === null) {
      return null;
    }
    if (_react2.default.isValidElement(icon)) {
      return icon;
    }
    return icon.showOnlyOnFocus && !isFocused ? null : icon.component;
  };

  this.handleTextChange = function (value) {
    var name = _this2.props.name;
    var formik = _this2.context.formik;

    if (formik) {
      formik.setFieldValue(name, value);
    }
  };

  this.handleBlur = function () {
    var _props2 = _this2.props,
        name = _props2.name,
        theme = _props2.theme;
    var formik = _this2.context.formik;
    var _state3 = _this2.state,
        labelTranslateValue = _state3.labelTranslateValue,
        isFocused = _state3.isFocused;

    var value = '';
    if (formik) {
      formik.setFieldTouched(name, true);
      value = formik.values[name];
    }
    if (!value) {
      _reactNative.Animated.timing(labelTranslateValue, {
        toValue: theme.pxScale,
        duration: labelAnimationDuration
      }).start();
    }
    if (isFocused) {
      _this2.setState({ isFocused: false });
    }
  };
};

TextInput.propTypes = (0, _extends3.default)({}, Input.propTypes, {
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  error: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  leftIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
    component: _propTypes2.default.node,
    showOnlyOnFocus: _propTypes2.default.bool
  })]),
  rightIcon: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
    component: _propTypes2.default.node,
    showOnlyOnFocus: _propTypes2.default.bool
  })]),
  style: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
});

TextInput.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  error: '',
  leftIcon: null,
  rightIcon: null
};

TextInput.contextTypes = {
  formik: _propTypes2.default.object
};

exports.default = (0, _styledComponents.withTheme)(TextInput);