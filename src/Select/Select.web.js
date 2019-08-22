import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { getIn } from 'formik';
import pluralize from '../utils/pluralize';
import isEqual from '../utils/isEqual';
import Text from '../Text';
import View from '../View';
import Space from '../Space';
import Checkbox from '../Checkbox';
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
    const { name, defaultSelected, multiple, options } = this.props;
    const { formik } = this.context;

    if (formik && name) {
      if (defaultSelected == null || defaultSelected === '') {
        formik.setFieldValue(name, multiple ? [] : '');
      } else if (defaultSelected === 'selectAll') {
        formik.setFieldValue(name, options);
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
      } else if (Array.isArray(formikValues)) {
        newSelectedOptions = newSelectedOptions.concat(formikValues.map(this.remakeOption));
        if (newSelectedOptions.length === nextProps.options.length) {
          newSelectedOptions = [{
            label: 'Select all',
            value: 'selectAll',
          }].concat(newSelectedOptions);
        }
      } else {
        newSelectedOptions = newSelectedOptions.concat(this.remakeOption(formikValues));
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
    const { name, onChange, multiple } = this.props;
    const { formik } = this.context;
    if (multiple) {
      // eslint-disable-next-line
      selectedValues = selectedValues.filter((value) => value !== 'selectAll');
    }
    if (formik && name) {
      formik.setFieldValue(name, selectedValues);
      formik.setFieldTouched(name, true);
    }
    onChange(selectedValues);
  }

  onSelect = (selectedOption) => {
    const { selectedOptions } = this.state;
    const { multiple, options } = this.props;

    if (multiple) {
      let newSelectedOptions = [];
      if (this.isOptionSelected(selectedOptions, selectedOption)) {
        if (selectedOption.value === 'selectAll') {
          newSelectedOptions = [];
        } else {
          // multiple: remove option
          newSelectedOptions = selectedOptions
            .filter((option) => !isEqual(option.value, selectedOption.value));

          const newSelectedOptionsCount = newSelectedOptions.filter((option) => option.value !== 'selectAll').length;
          if (newSelectedOptionsCount !== options.length) {
            newSelectedOptions = newSelectedOptions.filter((option) => option.value !== 'selectAll');
          }
        }
      } else if (selectedOption.value === 'selectAll') {
        newSelectedOptions = this.makeOptions();
      } else {
        newSelectedOptions = [
          ...selectedOptions,
          selectedOption,
        ];
        if (newSelectedOptions.length === options.length) {
          newSelectedOptions = [{
            label: 'Select all',
            value: 'selectAll',
          }].concat(newSelectedOptions);
        }
      }
      this.setState({
        selectedOptions: newSelectedOptions,
      }, () => {
        this.onChange(this.getOptionsValue(newSelectedOptions));
      });
    } else {
      // single: select option
      this.setState({
        selectedOptions: [selectedOption],
      }, () => this.onChange(this.getOptionsValue(selectedOption)));
    }
  }

  getDefaultSelected = (props, context) => {
    const { name, defaultSelected, options } = props;
    const { formik } = context;
    let defaultSelectedOptions = [];

    if (defaultSelected == null || defaultSelected === '') {
      defaultSelectedOptions = [];
    } else if (defaultSelected === 'selectAll') {
      defaultSelectedOptions = this.makeOptions();
    } else if (defaultSelected != null) {
      if (Array.isArray(defaultSelected)) {
        defaultSelectedOptions = defaultSelectedOptions
          .concat(defaultSelected.map(this.remakeOption));
        if (defaultSelectedOptions.length === options.length) {
          defaultSelectedOptions = [{
            label: 'Select all',
            value: 'selectAll',
          }].concat(defaultSelectedOptions);
        }
      } else {
        defaultSelectedOptions = defaultSelectedOptions.concat(this.remakeOption(defaultSelected));
      }
    } else if (formik && name && getIn(formik.values, name) != null) {
      const formikValues = getIn(formik.values, name);
      if (Array.isArray(formikValues)) {
        defaultSelectedOptions = defaultSelectedOptions
          .concat(formikValues.map(this.remakeOption));
        if (defaultSelectedOptions.length === options.length) {
          defaultSelectedOptions = [{
            label: 'Select all',
            value: 'selectAll',
          }].concat(defaultSelectedOptions);
        }
      } else {
        defaultSelectedOptions = defaultSelectedOptions.concat(this.remakeOption(formikValues));
      }
    }

    return defaultSelectedOptions;
  }

  getTriggerText = (selectedOptions) => {
    const { label, placeholder, multiple } = this.props;
    if (!selectedOptions.length) {
      return placeholder || '';
    }
    if (multiple) {
      // eslint-disable-next-line
      selectedOptions = selectedOptions.filter((option) => option.value !== 'selectAll');
      return `${selectedOptions.length} ${pluralize(selectedOptions.length, label)}`;
    }
    return selectedOptions[0] ? selectedOptions[0].label : (placeholder || '');
  }

  getOptionsValue = (options) =>
    Array.isArray(options)
      ? options.map((option) => option.value)
      : options.value

  isOptionSelected = (selectedOptions, option) =>
    selectedOptions
      .map(({ value }) => value)
      .includes(option.value);

  makeOptions = () => {
    const { multiple } = this.props;
    let { options } = this.props;
    if (multiple) {
      options = [{
        label: 'Select all',
        value: 'selectAll',
      }].concat(options);
    }
    return options.map((option) => ({
      label: (option && option.label) || option,
      value: (option && option.value) || option,
    }));
  }

  remakeOption = (value) => {
    const fullOptions = this.makeOptions();
    return fullOptions.find((option) => isEqual(option.value, value));
  };

  itemToString = (option) =>
    String(option.value)

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: this.props.multiple,
        };
      default:
        return changes;
    }
  }

  render() {
    const {
      selectedOptions,
    } = this.state;

    const {
      className,
      name,
      label,
      multiple,
      disabled,
      size,
      hint,
      required,
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
      error = error && error.replace(name, label || name);
    }

    options = this.makeOptions();

    return (
      <Downshift
        stateReducer={this.stateReducer}
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
          <div
            style={{ width: typeof size === 'string' ? size : size * 8 }}
            className={className}
          >
            {
              label ? (
                <Label htmlFor={name}>
                  {label}
                  {
                    required ? (
                      <Text component="span" color="red">
                        {' *'}
                      </Text>
                    ) : null
                  }
                </Label>
              ) : null
            }
            <Trigger
              {...getToggleButtonProps({
                isOpen,
                disabled,
                error,
              })}
            >
              <Space padding={[1.5, 0, 1.5, 1.5]}>
                <Text
                  color={!dsSelectedOptions.length ? 'greyLight' : undefined}
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
                      width="100%"
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
                              <View style={{ pointerEvents: 'none' }}>
                                <Space padding={[0]}>
                                  <Checkbox
                                    label={<Text truncate>{options[index].label}</Text>}
                                    checked={
                                      this.isOptionSelected(dsSelectedOptions, options[index])
                                    }
                                  />
                                </Space>
                              </View>
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
              error || hint ? (
                <Space margin={[0.5, 0, 0, 0]}>
                  <Text color={error ? 'red' : 'grey'} size="xs">
                    {`${error || hint}`}
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
  multiple: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultSelected: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.any,
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
};

Select.defaultProps = {
  size: 25,
  onChange: () => {},
};

Select.contextTypes = {
  formik: PropTypes.object,
};

export default Select;
