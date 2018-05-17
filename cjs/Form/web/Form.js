'use strict';

exports.__esModule = true;

var _formik = require('formik');

var _yup = require('yup');

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _formik.Formik;

Form.Form = _formik.Form;

Form.Field = _formik.Field;

Form.validation = _yup2.default;

exports.default = Form;