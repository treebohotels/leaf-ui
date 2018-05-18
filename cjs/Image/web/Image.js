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

var _isInViewport = require('../../utils/isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _ImgContainer = require('./ImgContainer');

var _ImgContainer2 = _interopRequireDefault(_ImgContainer);

var _Img = require('./Img');

var _Img2 = _interopRequireDefault(_Img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_Component) {
  (0, _inherits3.default)(Image, _Component);

  function Image() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      shouldFetch: typeof window === 'undefined',
      isLoaded: typeof window === 'undefined'
    }, _this.onImageLoaded = function () {
      _this.setState({ isLoaded: true });
    }, _this.setImageRef = function (ref) {
      _this.imageRef = ref;
    }, _this.handleScroll = function () {
      var isLoaded = _this.state.isLoaded;
      var getGalleryRef = _this.context.getGalleryRef;

      if (!isLoaded && (0, _isInViewport2.default)(_this.imageRef)) {
        _this.setState({ shouldFetch: true });
        if (getGalleryRef && getGalleryRef()) {
          getGalleryRef().removeEventListener('scroll', _this.handleScroll, { passive: true });
        }
        window.removeEventListener('scroll', _this.handleScroll, { passive: true });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Image.getCdnUrl = function getCdnUrl() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var integerWidth = Number.parseInt(width, 10);
    var integerHeight = Number.parseInt(height, 10);
    var searchParams = ['w=' + (integerWidth || ''), 'h=' + (integerHeight || ''), 'fit=crop', 'auto=compress', typeof window === 'undefined' ? 'blur=550' : '', typeof window === 'undefined' ? 'q=0' : ''].filter(Boolean).join('&');
    return src ? src + '?' + searchParams : src;
  };

  Image.prototype.componentDidMount = function componentDidMount() {
    var getGalleryRef = this.context.getGalleryRef;

    if (getGalleryRef && getGalleryRef()) {
      getGalleryRef().addEventListener('scroll', this.handleScroll, { passive: true });
      window.setTimeout(this.handleScroll);
    }
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.setTimeout(this.handleScroll);
  };

  Image.prototype.componentDidUpdate = function componentDidUpdate() {
    var isLoaded = this.state.isLoaded;

    if (!isLoaded) window.setTimeout(this.handleScroll);
  };

  Image.prototype.componentWillUnmount = function componentWillUnmount() {
    var getGalleryRef = this.context.getGalleryRef;

    if (getGalleryRef && getGalleryRef()) {
      getGalleryRef().removeEventListener('scroll', this.handleScroll, { passive: true });
    }
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  };

  Image.prototype.render = function render() {
    var _state = this.state,
        isLoaded = _state.isLoaded,
        shouldFetch = _state.shouldFetch;
    var _props = this.props,
        className = _props.className,
        src = _props.src,
        alt = _props.alt,
        width = _props.width,
        height = _props.height,
        grayscale = _props.grayscale,
        shape = _props.shape,
        lazy = _props.lazy,
        shouldFetchFromCdn = _props.shouldFetchFromCdn;


    var source = !lazy || shouldFetch ? src : '';
    var imageSrc = shouldFetchFromCdn ? Image.getCdnUrl(source, width, height) : source;

    return _react2.default.createElement(
      _ImgContainer2.default,
      {
        className: className,
        width: width,
        height: height,
        shape: shape,
        isLoaded: isLoaded
      },
      _react2.default.createElement(_Img2.default, {
        innerRef: this.setImageRef,
        src: imageSrc,
        alt: alt,
        width: width,
        height: height,
        grayscale: grayscale,
        isLoaded: isLoaded,
        onLoad: this.onImageLoaded
      })
    );
  };

  return Image;
}(_react.Component);

Image.contextTypes = {
  getGalleryRef: _propTypes2.default.func
};

Image.propTypes = {
  className: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  grayscale: _propTypes2.default.bool,
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'circular']),
  lazy: _propTypes2.default.bool,
  shouldFetchFromCdn: _propTypes2.default.bool
};

Image.defaultProps = {
  className: '',
  width: '',
  height: '',
  grayscale: false,
  shape: 'sharpEdged',
  lazy: true,
  shouldFetchFromCdn: true
};

exports.default = Image;