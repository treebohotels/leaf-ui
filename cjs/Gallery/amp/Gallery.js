'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _GalleryContainer = require('./GalleryContainer');

var _GalleryContainer2 = _interopRequireDefault(_GalleryContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gallery = function Gallery(props) {
  var width = props.width,
      height = props.height,
      type = props.type,
      children = props.children;


  var integerWidth = Number.parseInt(width, 10);
  var integerHeight = Number.parseInt(height, 10);

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('script', { async: '', 'custom-element': 'amp-carousel', src: 'https://cdn.ampproject.org/v0/amp-carousel-0.1.js' })
    ),
    _react2.default.createElement(
      _GalleryContainer2.default,
      {
        width: integerWidth,
        height: integerHeight,
        type: type
      },
      children
    )
  );
};

Gallery.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['carousel', 'slides']).isRequired,
  children: _propTypes2.default.node
};

exports.default = Gallery;