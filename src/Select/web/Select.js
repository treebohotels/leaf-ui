import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { getIn } from 'formik';
import pluralize from '../../utils/pluralize';
import isEqual from '../../utils/isEqual';
import Text from '../../Text/web';
import Space from '../../Space/web';
import Checkbox from '../../Checkbox/web';
import Trigger from './Trigger';
import Label from './Label';
import TriggerArrows from './TriggerArrows';
import OptionList from './OptionList';
import OptionListItem from './OptionListItem';

class Select extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedOptions: this.getDefaultSelected(props, context),
    };
  }

  componentDidMount() {
    const { name, defaultSelected, multiple } = this.props;
    const { formik } = this.context;

    if (formik && name) {
      if (defaultSelected == null || defaultSelected === '') {
        formik.setFieldValue(name, multiple ? [] : '');
      } else {
        formik.setFieldValue(name, defaultSelected);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { formik } = this.context;
    let newSelectedOptions = [];

    if (formik && nextProps.name) {
      const formikValues = getIn(formik.values, nextProps.name);
      if (formikValues == null || formikValues === '') {
        newSelectedOptions = [];
      } else {
        newSelectedOptions = Array.isArray(formikValues)
          ? newSelectedOptions.concat(formikValues.map(this.remakeOption))
          : newSelectedOptions.concat(this.remakeOption(formikValues));
      }
      this.setState((prevState) => {
        if (!isEqual(prevState.selectedOptions, newSelectedOptions)) {
          return { selectedOptions: newSelectedOptions };
        }
        return null;
      });
    }
  }

  onChange = (selectedValues) => {
    const { name, onChange } = this.props;
    const { formik } = this.context;
    if (formik && name) {
      formik.setFieldValue(name, selectedValues);
      formik.setFieldTouched(name, true);
    }
    onChange(selectedValues);
  }

  onSelect = (selectedOption) => {
    const { selectedOptions } = this.state;
    const { multiple } = this.props;

    if (multiple) {
      let newSelectedOptions = [];
      if (this.isOptionSelected(selectedOptions, selectedOption)) {
        // multiple: remove option
        newSelectedOptions = selectedOptions
          .filter((option) => !isEqual(option.value, selectedOption.value));
      } else {
        // multiple: add option
        newSelectedOptions = [
          ...selectedOptions,
          selectedOption,
        ];
      }
      this.setState({
        selectedOptions: newSelectedOptions,
      }, () => this.onChange(this.getOptionsValue(newSelectedOptions)));
    } else {
      // single: select option
      this.setState({
        selectedOptions: [selectedOption],
      }, () => this.onChange(this.getOptionsValue(selectedOption)));
    }
  }

  getDefaultSelected = (props, context) => {
    const { name, defaultSelected } = props;
    const { formik } = context;
    let defaultSelectedOptions = [];

    if (defaultSelected == null || defaultSelected === '') {
      defaultSelectedOptions = [];
    } else if (defaultSelected != null) {
      defaultSelectedOptions = Array.isArray(defaultSelected)
        ? defaultSelectedOptions.concat(defaultSelected.map(this.remakeOption))
        : defaultSelectedOptions.concat(this.remakeOption(defaultSelected));
    } else if (formik && name && getIn(formik.values, name) != null) {
      const formikValues = getIn(formik.values, name);
      defaultSelectedOptions = Array.isArray(formikValues)
        ? defaultSelectedOptions.concat(formikValues.map(this.remakeOption))
        : defaultSelectedOptions.concat(this.remakeOption(formikValues));
    }

    return defaultSelectedOptions;
  }

  getTriggerText = (selectedOptions) => {
    const { label, placeholder, multiple } = this.props;
    if (!selectedOptions.length) {
      return placeholder || '';
    }
    if (multiple) {
      return `${selectedOptions.length} ${pluralize(selectedOptions.length, label)}`;
    }
    return selectedOptions[0].label;
  }

  getOptionsValue = (options) =>
    Array.isArray(options)
      ? options.map((option) => option.value)
      : options.value

  isOptionSelected = (selectedOptions, option) =>
    selectedOptions
      .map(({ value }) => value)
      .includes(option.value);

  makeOption = (option) => ({
    label: (option && option.label) || option,
    value: (option && option.value) || option,
  });

  remakeOption = (value) => {
    const { options } = this.props;
    const fullOptions = options.map(this.makeOption);
    return fullOptions.find((option) => isEqual(option.value, value));
  };

  itemToString = (option) =>
    String(option.value)

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
    } = this.props;

    let {
      options,
      error,
    } = this.props;

    const {
      formik,
    } = this.context;

    if (formik && name) {
      error = getIn(formik.touched, name) && getIn(formik.errors, name);
    }

    options = options.map(this.makeOption);

    return (
      <Downshift
        selectedItem={selectedOptions}
        onSelect={this.onSelect}
        itemToString={this.itemToString}
      >
        {({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedOptions,
        }) => (
          <div className={className}>
            {
              label ? (
                <Label htmlFor={name}>
                  {label}
                </Label>
              ) : null
            }
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
                  color={!dsSelectedOptions.length ? 'grey' : undefined}
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
                  <OptionList block={block}>
                    <VirtualList
                      width={block ? '100%' : 25 * 8}
                      height={options.length < 5 ? options.length * 48 : 27 * 8}
                      itemCount={options.length}
                      itemSize={48}
                      renderItem={({ index, style }) => (
                        <OptionListItem
                          style={style}
                          {...getItemProps({
                            key: options[index].label,
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
                                {`${options[index].label}`}
                              </Text>
                            )
                          }
                        </OptionListItem>
                      )}
                    />
                  </OptionList>
                ) : null
              }
            </div>
            {
              error ? (
                <Space margin={[0.5, 0, 0, 0]}>
                  <Text color="red" size="xs">
                    {`${error}`}
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
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.any,
  ]),
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
