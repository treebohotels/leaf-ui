'use strict';

exports.__esModule = true;

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

var ImgContainer = _styledComponents2.default.div.withConfig({
  displayName: 'ImgContainer'
})(['width:', ';height:', ';background-color:', ';position:', ';border-radius:', ';'], function (props) {
  return props.width || '';
}, function (props) {
  return props.height || '';
}, function (props) {
  return props.isLoaded ? 'transparent' : props.theme.color.translucent;
}, function (props) {
  return props.isLoaded ? 'static' : 'initial';
}, styles.borderRadius);

ImgContainer.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  isLoaded: _propTypes2.default.bool,
  borderRadius: _propTypes2.default.string
};

ImgContainer.defaultProps = {
  width: '',
  height: '',
  shape: 'sharpEdged',
  isLoaded: false
};

exports.default = ImgContainer;