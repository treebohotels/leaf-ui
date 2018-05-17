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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryContainer = (0, _styledComponents2.default)(function (_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className']);

  var carouselProps = (0, _extends3.default)({
    layout: 'responsive'
  }, props);
  if (props.type === 'slides') carouselProps.controls = '';
  return _react2.default.createElement('amp-carousel', carouselProps);
}).withConfig({
  displayName: 'GalleryContainer'
})(['', ''], '');

GalleryContainer.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  type: _propTypes2.default.oneOf(['carousel', 'slides']).isRequired
};

exports.default = GalleryContainer;