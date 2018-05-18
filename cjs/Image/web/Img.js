'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = _styledComponents2.default.img.withConfig({
  displayName: 'Img'
})(['width:', ';height:', ';position:', ';visibility:', ';filter:', ';'], function (props) {
  return props.width || '';
}, function (props) {
  return props.height || '';
}, function (props) {
  return props.isLoaded ? 'static' : 'initial';
}, function (props) {
  return props.src ? 'initial' : 'hidden';
}, function (props) {
  return props.grayscale ? 'grayscale(1)' : 'grayscale(0)';
});

Img.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  grayscale: _propTypes2.default.bool,
  isLoaded: _propTypes2.default.bool
};

Img.defaultProps = {
  width: '',
  height: '',
  grayscale: false,
  isLoaded: false
};

exports.default = Img;