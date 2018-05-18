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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Flex/web');

var _web4 = _interopRequireDefault(_web3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GalleryContainer = _styledComponents2.default.div.withConfig({
  displayName: 'Gallery__GalleryContainer'
})(['width:', ';height:', ';overflow-x:', ';overflow-y:', ';display:', ';&::-webkit-scrollbar{display:none;}'], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.scrollDirection === 'horizontal' ? 'scroll' : 'hidden';
}, function (props) {
  return props.scrollDirection === 'vertical' ? 'scroll' : 'hidden';
}, function (props) {
  return props.scrollDirection === 'horizontal' ? 'flex' : '';
});

var Gallery = function (_Component) {
  (0, _inherits3.default)(Gallery, _Component);

  function Gallery() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Gallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isGalleryRefSet: false
    }, _this.setGalleryRef = function (ref) {
      _this.galleryRef = ref;
      _this.setState({ isGalleryRefSet: true });
    }, _this.getGalleryRef = function () {
      return _this.galleryRef;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Gallery.prototype.getChildContext = function getChildContext() {
    return {
      getGalleryRef: this.getGalleryRef
    };
  };

  Gallery.prototype.render = function render() {
    var isGalleryRefSet = this.state.isGalleryRefSet;
    var _props = this.props,
        className = _props.className,
        width = _props.width,
        height = _props.height,
        scrollDirection = _props.scrollDirection,
        children = _props.children;


    return _react2.default.createElement(
      GalleryContainer,
      {
        className: className,
        width: width,
        height: height,
        scrollDirection: scrollDirection,
        innerRef: this.setGalleryRef
      },
      isGalleryRefSet ? _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _web2.default,
          { key: child, margin: scrollDirection === 'horizontal' ? [0, 0.5, 0, 0] : [0, 0, 0.5, 0] },
          _react2.default.createElement(
            _web4.default,
            { display: 'inline-flex' },
            child
          )
        );
      }) : null
    );
  };

  return Gallery;
}(_react.Component);

Gallery.childContextTypes = {
  getGalleryRef: _propTypes2.default.func
};

Gallery.propTypes = {
  className: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  scrollDirection: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  children: _propTypes2.default.node
};

Gallery.defaultProps = {
  width: '',
  height: '',
  scrollDirection: 'horizontal'
};

exports.default = Gallery;