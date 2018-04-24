import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import pluralize from '../../../utils/pluralize';
import Text from '../../Text/web';
import Spacer from '../../Spacer/web';
import Checkbox from '../../Checkbox/web';
import Container from './Container';
import Trigger from './Trigger';
import Label from './Label';
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

  getTriggerText = (selectedOptions) => {
    const { label, multiple } = this.props;
    if (!selectedOptions.length) {
      return <span>&nbsp;</span>;
    } else if (multiple) {
      return `${selectedOptions.length} ${pluralize(selectedOptions.length, label)}`;
    }
    return selectedOptions[0].label;
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
      label,
      disabled,
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
          getRootProps,
          getButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedOptions,
        }) => (
          <Container className={className} {...getRootProps({ refKey: 'innerRef' })}>
            <Trigger
              isOpen={isOpen}
              block={block}
              disabled={disabled}
              error={error}
              {...getButtonProps()}
            >
              <Label
                isOpen={isOpen}
                hasValue={dsSelectedOptions.length}
                disabled={disabled}
                error={error}
              >
                {label}
              </Label>
              <Text truncate>
                {this.getTriggerText(dsSelectedOptions)}
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
                          {...getItemProps({
                            index,
                            item: option,
                            isActive: highlightedIndex === index,
                            isSelected: dsSelectedOptions.includes(option),
                          })}
                        >
                          {
                            multiple ? (
                              <Spacer padding={[0]}>
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
          </Container>
        )}
      />
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
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
  disabled: false,
  multiple: false,
};

Select.contextTypes = {
  formik: PropTypes.object,
};

export default Select;
