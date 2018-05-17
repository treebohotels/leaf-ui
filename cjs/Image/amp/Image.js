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

var _Img = require('./Img');

var _Img2 = _interopRequireDefault(_Img);

var _ImgPlaceholder = require('./ImgPlaceholder');

var _ImgPlaceholder2 = _interopRequireDefault(_ImgPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Image.getCdnUrl = function getCdnUrl() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var searchParams = ['w=' + (width || ''), 'h=' + (height || ''), 'fit=crop', 'auto=compress'].filter(Boolean).join('&');
    return src ? src + '?' + searchParams : src;
  };

  Image.prototype.render = function render() {
    var _props = this.props,
        src = _props.src,
        alt = _props.alt,
        width = _props.width,
        height = _props.height,
        layout = _props.layout,
        shape = _props.shape,
        grayscale = _props.grayscale;


    var integerWidth = Number.parseInt(width, 10);
    var integerHeight = Number.parseInt(height, 10);
    var imageSrc = Image.getCdnUrl(src, integerWidth, integerHeight);

    return _react2.default.createElement(
      _Img2.default,
      {
        src: imageSrc,
        alt: alt,
        width: integerWidth,
        height: integerHeight,
        layout: layout,
        shape: shape,
        grayscale: grayscale
      },
      _react2.default.createElement(_ImgPlaceholder2.default, null)
    );
  };

  return Image;
}(_react.Component);

exports.default = Image;


Image.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.string.isRequired,
  layout: _propTypes2.default.oneOf(['responsive']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  grayscale: _propTypes2.default.bool
};

Image.defaultProps = {
  shape: 'sharpEdged',
  grayscale: false
};