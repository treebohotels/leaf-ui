import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import pluralize from '../../utils/pluralize';
import Text from '../Text';
import Spacer from '../Spacer';
import Checkbox from '../Checkbox';
import Trigger from './Trigger';
import TriggerArrows from './TriggerArrows';
import OptionList from './OptionList';
import Option from './Option';

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
      return selectedOptions[0].label;
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
      block,
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
            <Trigger
              block={block}
              {...getButtonProps()}
            >
              <Text truncate>
                {this.getButtonText(dsSelectedOptions)}
              </Text>
              <TriggerArrows />
            </Trigger>
            <div style={{ position: 'relative' }}>
              {
                isOpen ? (
                  <OptionList block={block}>
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
            </div>
            {
              error ? (
                <Text color="red" size="xxs">
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
  block: PropTypes.bool,
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
