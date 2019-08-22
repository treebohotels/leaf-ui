import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Text from '../Text';
import Space from '../Space';

const labelAnimationDuration = 300;

const modifierColor = (focused = 'green', valid = 'greyLight', invalid = 'red', disabled = 'grey') => (props) => {
  if (props.isFocused) return props.theme.color[focused];
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const labelColor = (props) => {
  if (props.isFocused) return props.theme.color.green;
  return props.error && !props.isEmptyInput ? props.theme.color.red : props.theme.color.greyDark;
};

const InputContainerWrapper = styled.View`
  padding: ${(p) => p.theme.px([2, 0])};
`;

// TODO: create and use position component to create label component
const Label = Text.extend`
  position: absolute;
  top: ${(p) => p.theme.px(1.3)};
  left: ${(p) => p.theme.px(1.5)};
  font-size: ${(p) => p.theme.fontSize.xxs};
  color: ${labelColor};
  background-color: ${(p) => p.theme.color.transparent};
`;

const AnimatedLabel = Animated.createAnimatedComponent(Label);

const InputContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  background: ${modifierColor('transparent', 'transparent', 'redLighter', 'transparent')};
  border-color: ${modifierColor()};
  border-width: 1;
  border-radius: ${(p) => p.theme.borderRadius};
  height: ${(p) => p.theme.px(6.75)};
`;

const RelativeFlexView = styled.View`
  position: relative;
  flex: 1;
`;

const Input = styled.TextArea`
  flex: 1;
  padding: ${(p) => p.theme.px([2.1, 0, 0, 1.5])};
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.color.greyDarker};
  height: ${(p) => p.theme.px(6.75)};
`;

class TextArea extends Component {
  constructor(props, { formik }) {
    super(props);
    const { name, theme } = this.props;
    this.state = {
      labelTranslateValue: formik && formik.values[name]
        ? new Animated.Value(0) : new Animated.Value(theme.pxScale),
      isFocused: false,
    };
  }

  onFocus = () => {
    const { labelTranslateValue, isFocused } = this.state;
    Animated.timing(labelTranslateValue, {
      toValue: 0,
      duration: labelAnimationDuration,
    }).start();
    if (!isFocused) {
      this.setState({ isFocused: true });
    }
  };

  getIconComponent = (icon, isFocused) => {
    if (icon === null) {
      return null;
    }
    if (React.isValidElement(icon)) {
      return icon;
    }
    return icon.showOnlyOnFocus && !isFocused ? null : icon.component;
  };

  handleTextChange = (value) => {
    const { name } = this.props;
    const { formik } = this.context;
    if (formik && name) {
      formik.setFieldValue(name, value);
    }
  };

  handleBlur = () => {
    const { name, theme } = this.props;
    const { formik } = this.context;
    const { labelTranslateValue, isFocused } = this.state;
    let value = '';
    if (formik && name) {
      formik.setFieldTouched(name, true);
      value = formik.values[name];
    }
    if (!value) {
      Animated.timing(labelTranslateValue, {
        toValue: theme.pxScale,
        duration: labelAnimationDuration,
      }).start();
    }
    if (isFocused) {
      this.setState({ isFocused: false });
    }
  };

  render() {
    const {
      name,
      label,
      placeholder,
      error: errorMessage,
      theme,
      leftIcon,
      rightIcon,
      style,
      ...props
    } = this.props;
    const { formik } = this.context;
    const { labelTranslateValue, isFocused } = this.state;
    const inputProps = {
      name,
      onChangeText: this.handleTextChange,
      onBlur: this.handleBlur,
      onFocus: this.onFocus,
    };
    let error = errorMessage;
    if (formik && name) {
      inputProps.value = formik.values[name];
      error = formik.touched[name] && formik.errors[name];
    }
    const labelFontSize = labelTranslateValue.interpolate({
      inputRange: [0, theme.pxScale],
      outputRange: [parseInt(theme.fontSize.xxs, 10), parseInt(theme.fontSize.s, 10)],
      extrapolate: 'clamp',
    });

    return (
      <InputContainerWrapper style={style}>
        <InputContainer
          error={error}
          isFocused={isFocused}
        >
          {this.getIconComponent(leftIcon, isFocused)}
          <RelativeFlexView>
            <AnimatedLabel
              error={error}
              isFocused={isFocused}
              isEmptyInput={!inputProps.value}
              style={{
                fontSize: labelFontSize,
                transform: [
                  { translateY: labelTranslateValue },
                  { perspective: 1000 },
                ],
              }}
            >
              {label}
            </AnimatedLabel>
            <Input
              id={name}
              placeholder={isFocused ? placeholder : ''}
              underlineColorAndroid={theme.color.transparent}
              selectionColor={theme.color.green}
              {...inputProps}
              {...props}
            />
          </RelativeFlexView>
          {this.getIconComponent(rightIcon, isFocused)}
        </InputContainer>
        {
          error ? (
            <Space margin={[1, 0, 0, 0]}>
              <Text color="red" size="xs">{error}</Text>
            </Space>
          ) : null
        }
      </InputContainerWrapper>
    );
  }
}

TextArea.propTypes = {
  ...Input.propTypes,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  theme: PropTypes.object,
  leftIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      component: PropTypes.node,
      showOnlyOnFocus: PropTypes.bool,
    }),
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      component: PropTypes.node,
      showOnlyOnFocus: PropTypes.bool,
    }),
  ]),
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

TextArea.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  error: '',
  leftIcon: null,
  rightIcon: null,
};

TextArea.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(TextArea);
