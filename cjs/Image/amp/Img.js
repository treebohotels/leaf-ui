'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  borderRadius: function borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  }
};

var Img = (0, _styledComponents2.default)(function (_ref) {
  var shape = _ref.shape,
      grayscale = _ref.grayscale,
      borderRadius = _ref.borderRadius,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['shape', 'grayscale', 'borderRadius', 'className']);
  return _react2.default.createElement('amp-img', (0, _extends3.default)({ 'class': className }, props));
}).withConfig({
  displayName: 'Img'
})(['filter:', ';border-radius:', ';'], function (props) {
  return props.grayscale ? 'grayscale(1)' : 'grayscale(0)';
}, styles.borderRadius);

Img.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  layout: _propTypes2.default.oneOf(['responsive']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  grayscale: _propTypes2.default.bool,
  borderRadius: _propTypes2.default.string
};

Img.defaultProps = {
  shape: 'sharpEdged',
  grayscale: false
};

exports.default = Img;