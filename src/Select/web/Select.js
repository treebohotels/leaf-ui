import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { getIn } from 'formik';
import pluralize from '../../utils/pluralize';
import Text from '../../Text/web';
import Space from '../../Space/web';
import Checkbox from '../../Checkbox/web';
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

  onChange = (selectedOptions) => {
    const { name, onChange } = this.props;
    const { formik } = this.context;
    if (formik && name) {
      formik.setFieldValue(name, selectedOptions);
      formik.setFieldTouched(name, true);
    }
    onChange(selectedOptions);
  }

  onSelect = (selectedOption) => {
    const { selectedOptions } = this.state;
    const { multiple } = this.props;

    if (multiple) {
      let newSelectedOptions = [];
      if (this.isOptionSelected(selectedOptions, selectedOption)) {
        // multiple: remove option
        newSelectedOptions = selectedOptions
          .filter((option) => option.value !== selectedOption.value);
      } else {
        // multiple: add option
        newSelectedOptions = [
          ...selectedOptions,
          selectedOption,
        ];
      }
      this.setState({
        selectedOptions: newSelectedOptions,
      }, () => this.onChange(newSelectedOptions));
    } else {
      // single: select option
      this.setState({
        selectedOptions: [selectedOption],
      }, () => this.onChange(selectedOption));
    }
  }

  getDefaultSelected = (props, context) => {
    const { name, defaultSelected } = props;
    const { formik } = context;
    let defaultSelectedOptions = [];

    if (defaultSelected) {
      defaultSelectedOptions = defaultSelected.length
        ? defaultSelectedOptions.concat(defaultSelected.map(this.makeOption))
        : defaultSelectedOptions.concat(this.makeOption(defaultSelected));
    } else if (formik && name) {
      defaultSelectedOptions = defaultSelectedOptions.concat(getIn(formik.values, name) || []);
    }

    if (formik && name && defaultSelected) {
      formik.setFieldValue(name, defaultSelected);
    }

    return defaultSelectedOptions;
  }

  getTriggerText = (selectedOptions) => {
    const { label, placeholder, multiple } = this.props;
    if (!selectedOptions.length) {
      return placeholder;
    } else if (multiple) {
      return `${selectedOptions.length} ${pluralize(selectedOptions.length, label)}`;
    }
    return selectedOptions[0].label;
  }

  isOptionSelected = (selectedOptions, option) =>
    selectedOptions
      .map(({ value }) => value)
      .includes(option.value);

  makeOption = (option) => {
    if (typeof option === 'object') {
      return option;
    }
    return {
      label: option,
      value: option,
    };
  };

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
      error: errorMessage,
    } = this.props;

    let {
      options,
    } = this.props;

    const {
      formik,
    } = this.context;

    const error = formik
      ? formik.touched[name] && formik.errors[name]
      : errorMessage;

    options = options.map(this.makeOption);

    return (
      <Downshift
        selectedItem={selectedOptions}
        onSelect={this.onSelect}
        itemToString={this.itemToString}
      >{({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedOptions,
        }) => (
          <div className={className}>
            <Label htmlFor={name}>
              {label}
            </Label>
            <Trigger
              {...getToggleButtonProps({
                isOpen,
                block,
                disabled,
                error,
              })}
            >
              <Space padding={[1.5, 0, 1.5, 1.5]}>
                <Text
                  color={!dsSelectedOptions.length ? 'grey' : ''}
                  size="s"
                  truncate
                >
                  {this.getTriggerText(dsSelectedOptions)}
                </Text>
              </Space>
              <TriggerArrows />
            </Trigger>
            <div style={{ position: 'relative' }}>
              {
                isOpen ? (
                  <OptionList>
                    <VirtualList
                      width={block ? '100%' : 25 * 8}
                      height={27 * 8}
                      itemCount={options.length}
                      itemSize={48}
                      renderItem={({ index, style }) => (
                        <Option
                          style={style}
                          {...getItemProps({
                            key: options[index].value,
                            index,
                            item: options[index],
                            isActive: highlightedIndex === index,
                            isSelected: this.isOptionSelected(dsSelectedOptions, options[index]),
                          })}
                        >
                          {
                            multiple ? (
                              <Space padding={[0]}>
                                <Checkbox
                                  label={<Text truncate>{options[index].label}</Text>}
                                  checked={this.isOptionSelected(dsSelectedOptions, options[index])}
                                />
                              </Space>
                            ) : (
                              <Text truncate>
                                {options[index].label}
                              </Text>
                            )
                          }
                        </Option>
                      )}
                    />
                  </OptionList>
                ) : null
              }
            </div>
            {
              error ? (
                <Space margin={[0.5, 0, 0, 0]}>
                  <Text color="red" size="xxs">
                    {error}
                  </Text>
                </Space>
              ) : null
            }
          </div>
        )}
      </Downshift>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  error: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
};

Select.contextTypes = {
  formik: PropTypes.object,
};

export default Select;
