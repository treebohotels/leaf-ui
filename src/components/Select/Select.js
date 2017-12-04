import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import pluralize from '../../utils/pluralize';
import Flex from '../Flex';
import List from '../List';
import Text from '../Text';
import Spacer from '../Spacer';
import Checkbox from '../Checkbox';

const Trigger = Flex.extend`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: ${(p) => p.theme.px(20)};
  padding: ${(p) => p.theme.px(1)};
  border: 1px solid ${(p) => p.theme.color.slate};
  border-radius: ${(p) => p.theme.borderRadius};
`;

const TriggerArrows = styled.svg`
  flex: none;
  width: ${(p) => p.theme.px(3)};
  height: ${(p) => p.theme.px(3)};
`;

const OptionListContainer = styled.div`
  position: relative;
`;

const OptionList = List.extend`
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1050;
  background: ${(p) => p.theme.color.white};
  min-width: ${(p) => p.theme.px(25)};
  max-height: ${(p) => p.theme.px(25)};
  border: 1px solid ${(p) => p.theme.color.smoke};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow[2]};
`;

const Option = List.Item.extend`
  ${(p) => p.isActive || p.isSelected ? `
    background: ${p.theme.color.blackTranslucent};

    &:hover,
    &:focus {
      background: ${p.theme.color.blackTranslucent};
    }
  ` : ''}
`;

class Select extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedOptions: this.getDefaultSelected(props, context),
    };
  }

  onChange = (newSelectedOptions) => {
    const { name, onChange } = this.props;
    const { formik } = this.context;
    if (formik) {
      formik.setFieldValue(name, newSelectedOptions);
      formik.setFieldTouched(name);
    }
    if (onChange) {
      onChange(newSelectedOptions);
    }
  }

  onStateChange = () => {
    const { name } = this.props;
    const { formik } = this.context;
    if (formik) {
      formik.setFieldTouched(name);
    }
  }

  onSelect = (selectedOption) => {
    const { selectedOptions } = this.state;
    const { multiple } = this.props;

    if (multiple) {
      if (selectedOptions.includes(selectedOption)) {
        this.removeOption(selectedOption);
      } else {
        this.addOption(selectedOption);
      }
    } else {
      this.setState({
        selectedOptions: [selectedOption],
      }, () => this.onChange(selectedOption));
    }
  }

  getDefaultSelected = (props, context) => {
    const { name, defaultSelected } = props;
    const { formik } = context;
    if (formik) {
      return [].concat(formik.values[name] || []);
    }
    return [].concat(defaultSelected || []);
  }

  getButtonText = (selectedOptions) => {
    const { label } = this.props;
    if (selectedOptions.length > 1) {
      return pluralize(selectedOptions.length, label, true);
    } else if (selectedOptions.length === 1) {
      return selectedOptions[0].value;
    }
    return label;
  }

  addOption = (selectedOption) => {
    const { selectedOptions } = this.state;

    const newSelectedOptions = [
      ...selectedOptions,
      selectedOption,
    ];

    this.setState({
      selectedOptions: newSelectedOptions,
    }, () => this.onChange(newSelectedOptions));
  }

  removeOption = (selectedOption) => {
    const { selectedOptions } = this.state;

    const newSelectedOptions =
      selectedOptions.filter((option) => option.value !== selectedOption.value);

    this.setState({
      selectedOptions: newSelectedOptions,
    }, () => this.onChange(newSelectedOptions));
  }

  itemToString = (option) =>
    option == null ? '' : String(option.value)

  render() {
    const {
      selectedOptions,
    } = this.state;

    const {
      className,
      name,
      multiple,
      options,
      error: errorMessage,
    } = this.props;

    const {
      formik,
    } = this.context;

    const error = formik
      ? formik.touched[name] && formik.errors[name]
      : errorMessage;

    return (
      <Downshift
        selectedItem={selectedOptions}
        onSelect={this.onSelect}
        itemToString={this.itemToString}
        render={({
          isOpen,
          getButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedOptions,
        }) => (
          <div className={className}>
            <Trigger {...getButtonProps()}>
              <Text truncate>{this.getButtonText(dsSelectedOptions)}</Text>
              <TriggerArrows viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M13 8l-3-3-3 3h6zm-.1 4L10 14.9 7.1 12h5.8z" />
              </TriggerArrows>
            </Trigger>
            <OptionListContainer>
              {
                isOpen ? (
                  <OptionList>
                    {
                      options.map((option, index) => (
                        <Option
                          key={option.value}
                          button
                          {...getItemProps({
                            index,
                            item: option,
                            isActive: highlightedIndex === index,
                            isSelected: dsSelectedOptions.includes(option),
                          })}
                        >
                          {
                            multiple ? (
                              <Spacer padding={0}>
                                <Checkbox
                                  readOnly
                                  label={option.label}
                                  checked={dsSelectedOptions.includes(option)}
                                />
                              </Spacer>
                            ) : (
                              <Text>
                                {option.label}
                              </Text>
                            )
                          }
                        </Option>
                      ))
                    }
                  </OptionList>
                ) : null
              }
            </OptionListContainer>
            {
              error ? (
                <Text color="dangerDark" size="xxs">
                  {error}
                </Text>
              ) : null
            }
          </div>
        )}
      />
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  multiple: false,
};

Select.contextTypes = {
  formik: PropTypes.object,
};

export default Select;
