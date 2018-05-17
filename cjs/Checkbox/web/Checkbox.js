'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Text/web');

var _web4 = _interopRequireDefault(_web3);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Tick = require('./Tick');

var _Tick2 = _interopRequireDefault(_Tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Checkbox.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        name = _props.name,
        defaultChecked = _props.defaultChecked;
    var formik = this.context.formik;


    if (formik) {
      formik.setFieldValue(name, !!defaultChecked);
    }
  };

  Checkbox.prototype.render = function render() {
    var _props2 = this.props,
        className = _props2.className,
        name = _props2.name,
        label = _props2.label,
        disabled = _props2.disabled,
        errorMessage = _props2.error,
        props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'name', 'label', 'disabled', 'error']);
    var formik = this.context.formik;


    var inputProps = (0, _extends3.default)({}, props);
    var error = errorMessage;

    if (formik) {
      inputProps.checked = !!formik.values[name];
      delete inputProps.defaultChecked;
      inputProps.onChange = function () {
        formik.handleChange.apply(formik, arguments);
        props.onChange.apply(props, arguments);
      };
      inputProps.onBlur = function () {
        formik.handleBlur.apply(formik, arguments);
        props.onBlur.apply(props, arguments);
      };
      error = formik.touched[name] && formik.errors[name];
    }

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(
        _Label2.default,
        { htmlFor: name },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({
          id: name,
          name: name,
          disabled: disabled,
          error: error
        }, inputProps)),
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(_Tick2.default, null)
        ),
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

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func
};

Checkbox.defaultProps = {
  name: 'defaultName',
  label: 'defaultLabel',
  disabled: false,
  error: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {}
};

Checkbox.contextTypes = {
  formik: _propTypes2.default.object
};

exports.default = Checkbox;