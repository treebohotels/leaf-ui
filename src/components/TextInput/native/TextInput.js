import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/native';
import Text from '../../Text/native';

const modifierColor = (focused = 'green', valid = 'grey', invalid = 'red', disabled = 'grey') => (props) => {
  if (props.isFocused) return props.theme.color[focused];
  if (props.disabled) return props.theme.color[disabled];
  return props.error ? props.theme.color[invalid] : props.theme.color[valid];
};

const labelColor = (props) => {
  if (props.isFocused) return props.theme.color.green;
  return props.error && !props.isEmptyInput ? props.theme.color.red : props.theme.color.grey;
};

const InputContainer = styled.View`
  padding: ${(p) => p.theme.px([3, 0])};
`;

const Label = Text.extend`
  position: absolute;
  top: ${(p) => p.theme.px(3)};
  left: ${(p) => p.theme.px(2)};
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
  height: ${(p) => p.theme.px(13)};
  flex-direction: row;
  align-items: center;
`;

const RelativeFlexView = styled.View`
  position: relative;
  flex: 1;
`;

const Input = styled.TextInput`
  padding: ${(p) => p.isLabelVisible ? p.theme.px([4, 2, 0, 2]) : p.theme.px(2)};
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.color.greyDarker};
  height: ${(p) => p.theme.px(13)};
  flex: 1;
`;

const ErrorText = Text.extend`
  color: ${(p) => p.theme.color.red};
  font-size: ${(p) => p.theme.fontSize.xs};
  margin-top: ${(p) => p.theme.px(2)};
`;

class TextInput extends Component {
  constructor(props, { formik }) {
    super(props);
    const { name, theme } = this.props;
    this.state = {
      labelTranslateValue: formik && formik.values[name] ?
        new Animated.Value(0) : new Animated.Value(theme.pxScale * 2),
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
    // eslint-disable-next-line no-underscore-dangle
    if (!showPlaceholder && !value) {
      Animated.timing(labelTranslateValue, {
        toValue: theme.pxScale * 2,
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
      ...props
    } = this.props;
    const { formik } = this.context;
    const { labelTranslateValue, isFocused } = this.state;

    const inputProps = { name };
    let error = errorMessage;
    const labelFontSize = labelTranslateValue.interpolate({
      inputRange: [0, theme.pxScale * 2],
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
          {...props}
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
              {...inputProps}
              {...props}
            />
          </RelativeFlexView>
          {
            rightIcon
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
  name: PropTypes.string,
  label: PropTypes.string,
  showPlaceholder: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

TextInput.defaultProps = {
  name: '',
  label: '',
  showPlaceholder: false,
  error: '',
};

TextInput.contextTypes = {
  formik: PropTypes.object,
};

export default withTheme(TextInput);
