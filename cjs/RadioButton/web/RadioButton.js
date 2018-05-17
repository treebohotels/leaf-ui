'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Text/web');

var _web4 = _interopRequireDefault(_web3);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function RadioButton(_ref, _ref2) {
  var formik = _ref2.formik;
  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      disabled = _ref.disabled,
      errorMessage = _ref.error,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'name', 'label', 'value', 'disabled', 'error']);

  var inputProps = { name: name };
  var error = errorMessage;

  if (formik) {
    inputProps.checked = formik.values[name] === value;
    inputProps.onChange = formik.handleChange;
    inputProps.onBlur = formik.handleBlur;
    error = formik.touched[name] && formik.errors[name];
  }

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _Label2.default,
      { htmlFor: name + '-' + value },
      _react2.default.createElement(_Input2.default, (0, _extends3.default)({
        id: name + '-' + value
      }, inputProps, props, {
        value: value,
        disabled: disabled,
        error: error
      })),
      _react2.default.createElement(_Circle2.default, null),
      label
    ),
    error ? _react2.default.createElement(
      _web2.default,
      { margin: [0.5, 0, 0, 0] },
      _react2.default.createElement(
        _web4.default,
        { color: 'red', size: 'xxs' },
        error
      )
    ) : null
  );
};

RadioButton.propTypes = {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.string
};

RadioButton.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  value: 'defaultValue',
  disabled: false,
  error: ''
};

RadioButton.contextTypes = {
  formik: _propTypes2.default.object
};

exports.default = RadioButton;