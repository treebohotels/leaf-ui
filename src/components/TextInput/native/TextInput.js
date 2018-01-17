import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/native';
import Text from '../../Text/native';

const modifierColor = (focused = 'green', valid = 'greyLight', invalid = 'red', disabled = 'grey') => (props) => {
  if (props.isFocused) return props.theme.color[focused];
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const labelColor = (props) => {
  if (props.isFocused) return props.theme.color.green;
  return props.error && !props.isEmptyInput ? props.theme.color.red : props.theme.color.grey;
};

const InputContainer = styled.View`
  padding: ${(p) => p.theme.px([2, 0])};
`;

const Label = Text.extend`
  position: absolute;
  top: ${(p) => p.theme.px(1.5)};
  left: ${(p) => p.theme.px(1.5)};
  color: ${labelColor};
  font-size: ${(p) => p.theme.fontSize.xxs};
  background-color: ${(p) => p.theme.color.transparent};
`;

const AnimatedLabel = Animated.createAnimatedComponent(Label);

const BorderedContainer = styled.View`
  position: relative;
  background: ${modifierColor('transparent', 'transparent', 'redLighter', 'transparent')};
  border-color: ${modifierColor()};
  border-width: 1;
  border-radius: 2;
  height: ${(p) => p.theme.px(6.5)};
  flex-direction: row;
  align-items: center;
`;

const RelativeFlexView = styled.View`
  position: relative;
  flex: 1;
`;

const Input = styled.TextInput`
  padding: ${(p) => p.isLabelVisible ? p.theme.px([2.3, 0, 0, 1.5]) : p.theme.px([1.5, 0, 1.5, 1.5])};
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.color.greyDarker};
  height: ${(p) => p.theme.px(6.5)};
  flex: 1;
`;

const ErrorText = Text.extend`
  color: ${(p) => p.theme.color.red};
  font-size: ${(p) => p.theme.fontSize.xs};
  margin-top: ${(p) => p.theme.px(1)};
`;

class TextInput extends Component {
  constructor(props, { formik }) {
    super(props);
    const { name, theme } = this.props;
    this.state = {
      labelTranslateValue: formik && formik.values[name] ?
        new Animated.Value(0) : new Animated.Value(theme.pxScale * 0.8),
      isFocused: false,
    };
  }

  onFocus = () => {
    const { showPlaceholder, theme } = this.props;
    const { labelTranslateValue, isFocused } = this.state;
    if (!showPlaceholder) {
      Animated.timing(labelTranslateValue, {
        toValue: 0,
        duration: theme.labelAnimationDuration,
      }).start();
    }
    if (!isFocused) {
      this.setState({ isFocused: true });
    }
  };

  handleTextChange = (value) => {
    const { name } = this.props;
    const { formik } = this.context;
    if (formik) {
      formik.setFieldValue(name, value);
    }
  };

  handleBlur = () => {
    const { name, showPlaceholder, theme } = this.props;
    const { formik } = this.context;
    const { labelTranslateValue, isFocused } = this.state;
    let value = '';
    if (formik) {
      formik.setFieldTouched(name, true);
      value = formik.values[name];
    }
    if (!showPlaceholder && !value) {
      Animated.timing(labelTranslateValue, {
        toValue: theme.pxScale * 0.8,
        duration: theme.labelAnimationDuration,
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
      showPlaceholder,
      error: errorMessage,
      style,
      theme,
      leftIcon,
      rightIcon,
      showRightIconWhenFocusedOnly,
      testID,
      accessibilityLabel,
      ...props
    } = this.props;
    const { formik } = this.context;
    const { labelTranslateValue, isFocused } = this.state;

    const inputProps = { name };
    let error = errorMessage;
    const labelFontSize = labelTranslateValue.interpolate({
      inputRange: [0, theme.pxScale * 0.8],
      outputRange: [parseInt(theme.fontSize.xxs, 10), parseInt(theme.fontSize.s, 10)],
      extrapolate: 'clamp',
    });

    inputProps.onChangeText = this.handleTextChange;
    inputProps.onBlur = this.handleBlur;
    inputProps.onFocus = this.onFocus;
    if (formik) {
      inputProps.value = formik.values[name];
      error = formik.touched[name] && formik.errors[name];
    }

    return (
      <InputContainer style={style}>
        <BorderedContainer
          error={error}
          isFocused={isFocused}
        >
          {
            leftIcon
          }
          <RelativeFlexView>
            {
              !showPlaceholder ? (
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
              ) : null
            }
            <Input
              id={name}
              placeholder={showPlaceholder ? label : ''}
              underlineColorAndroid={theme.color.transparent}
              selectionColor={theme.color.green}
              isLabelVisible={!showPlaceholder}
              testID={testID}
              accessibilityLabel={accessibilityLabel}
              {...inputProps}
              {...props}
            />
          </RelativeFlexView>
          {
            !showRightIconWhenFocusedOnly || isFocused ? rightIcon : null
          }
        </BorderedContainer>
        {
          error ? (
            <ErrorText>
              {error}
            </ErrorText>
          ) : null
        }
      </InputContainer>
    );
  }
}

TextInput.propTypes = {
  ...Input.propTypes,
  name: PropTypes.string,
  label: PropTypes.string,
  showPlaceholder: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  showRightIconWhenFocusedOnly: PropTypes.bool,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string,
};

TextInput.defaultProps = {
  name: '',
  label: '',
  showPlaceholder: false,
  error: '',
  showRightIconWhenFocusedOnly: true,
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(TextInput);
