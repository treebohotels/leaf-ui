'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _downshift = require('downshift');

var _downshift2 = _interopRequireDefault(_downshift);

var _pluralize = require('../../utils/pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _web = require('../../Text/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Spacer/web');

var _web4 = _interopRequireDefault(_web3);

var _web5 = require('../../Checkbox/web');

var _web6 = _interopRequireDefault(_web5);

var _Trigger = require('./Trigger');

var _Trigger2 = _interopRequireDefault(_Trigger);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _TriggerArrows = require('./TriggerArrows');

var _TriggerArrows2 = _interopRequireDefault(_TriggerArrows);

var _OptionList = require('./OptionList');

var _OptionList2 = _interopRequireDefault(_OptionList);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select(props, context) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      selectedOptions: _this.getDefaultSelected(props, context)
    };
    return _this;
  }

  Select.prototype.render = function render() {
    var _this2 = this;

    var selectedOptions = this.state.selectedOptions;
    var _props = this.props,
        className = _props.className,
        name = _props.name,
        label = _props.label,
        disabled = _props.disabled,
        block = _props.block,
        multiple = _props.multiple,
        options = _props.options,
        errorMessage = _props.error;
    var formik = this.context.formik;


    var error = formik ? formik.touched[name] && formik.errors[name] : errorMessage;

    return _react2.default.createElement(_downshift2.default, {
      selectedItem: selectedOptions,
      onSelect: this.onSelect,
      itemToString: this.itemToString,
      render: function render(_ref) {
        var isOpen = _ref.isOpen,
            getButtonProps = _ref.getButtonProps,
            getItemProps = _ref.getItemProps,
            highlightedIndex = _ref.highlightedIndex,
            dsSelectedOptions = _ref.selectedItem;
        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement(
            _Label2.default,
            { htmlFor: name },
            label
          ),
          _react2.default.createElement(
            _Trigger2.default,
            getButtonProps({
              isOpen: isOpen,
              block: block,
              disabled: disabled,
              error: error
            }),
            _react2.default.createElement(
              _web4.default,
              { padding: [1.5, 0, 1.5, 1.5] },
              _react2.default.createElement(
                _web2.default,
                {
                  color: !dsSelectedOptions.length ? 'grey' : '',
                  size: 's',
                  truncate: true
                },
                _this2.getTriggerText(dsSelectedOptions)
              )
            ),
            _react2.default.createElement(_TriggerArrows2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' } },
            isOpen ? _react2.default.createElement(
              _OptionList2.default,
              {
                isOpen: isOpen,
                block: block
              },
              options.map(function (option, index) {
                return _react2.default.createElement(
                  _Option2.default,
                  getItemProps({
                    key: option.value,
                    index: index,
                    item: option,
                    isActive: highlightedIndex === index,
                    isSelected: dsSelectedOptions.includes(option)
                  }),
                  multiple ? _react2.default.createElement(
                    _web4.default,
                    { padding: [0] },
                    _react2.default.createElement(_web6.default, {
                      readOnly: true,
                      label: option.label,
                      checked: dsSelectedOptions.includes(option)
                    })
                  ) : _react2.default.createElement(
                    _web2.default,
                    null,
                    option.label
                  )
                );
              })
            ) : null
          ),
          error ? _react2.default.createElement(
            _web4.default,
            { margin: [0.5, 0, 0, 0] },
            _react2.default.createElement(
              _web2.default,
              { color: 'red', size: 'xxs' },
              error
            )
          ) : null
        );
      }
    });
  };

  return Select;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (selectedOptions) {
    var _props2 = _this3.props,
        name = _props2.name,
        onChange = _props2.onChange;
    var formik = _this3.context.formik;

    if (formik) {
      formik.setFieldValue(name, selectedOptions);
      formik.setFieldTouched(name, true);
    }
    onChange(selectedOptions);
  };

  this.onSelect = function (selectedOption) {
    var selectedOptions = _this3.state.selectedOptions;
    var multiple = _this3.props.multiple;


    if (multiple) {
      var newSelectedOptions = [];
      if (selectedOptions.includes(selectedOption)) {
        // multiple: remove option
        newSelectedOptions = selectedOptions.filter(function (option) {
          return option.value !== selectedOption.value;
        });
      } else {
        // multiple: add option
        newSelectedOptions = [].concat(selectedOptions, [selectedOption]);
      }
      _this3.setState({
        selectedOptions: newSelectedOptions
      }, function () {
        return _this3.onChange(newSelectedOptions);
      });
    } else {
      // single: select option
      _this3.setState({
        selectedOptions: [selectedOption]
      }, function () {
        return _this3.onChange(selectedOption);
      });
    }
  };

  this.getDefaultSelected = function (props, context) {
    var name = props.name,
        defaultSelected = props.defaultSelected;
    var formik = context.formik;

    var defaultSelectedOptions = [];

    if (defaultSelected) {
      defaultSelectedOptions = defaultSelectedOptions.concat(defaultSelected || []);
    } else if (formik) {
      defaultSelectedOptions = defaultSelectedOptions.concat(formik.values[name] || []);
    }

    if (formik && defaultSelected) {
      formik.setFieldValue(name, defaultSelected);
    }

    return defaultSelectedOptions;
  };

  this.getTriggerText = function (selectedOptions) {
    var _props3 = _this3.props,
        label = _props3.label,
        placeholder = _props3.placeholder,
        multiple = _props3.multiple;

    if (!selectedOptions.length) {
      return placeholder;
    } else if (multiple) {
      return selectedOptions.length + ' ' + (0, _pluralize2.default)(selectedOptions.length, label);
    }
    return selectedOptions[0].label;
  };

  this.itemToString = function (option) {
    return option == null ? '' : String(option.value);
  };
};

Select.propTypes = {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array.isRequired,
  defaultSelected: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
  onChange: _propTypes2.default.func,
  error: _propTypes2.default.string
};

Select.defaultProps = {
  onChange: function onChange() {}
};

Select.contextTypes = {
  formik: _propTypes2.default.object
};

exports.default = Select;