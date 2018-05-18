'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = require('../../Text/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = 0;
var getUniqueId = function getUniqueId() {
  index += 1;
  return '__LEAF_UI__more-or-less-input-' + index;
};

var MoreOrLessContainer = (0, _styledComponents2.default)(function (_ref) {
  var id = _ref.id,
      initialHeight = _ref.initialHeight,
      labelForMore = _ref.labelForMore,
      labelForLess = _ref.labelForLess,
      props = (0, _objectWithoutProperties3.default)(_ref, ['id', 'initialHeight', 'labelForMore', 'labelForLess']);
  return _react2.default.createElement('div', props);
}).withConfig({
  displayName: 'MoreOrLess__MoreOrLessContainer'
})(['> div{height:', ';overflow:hidden;}> label::before{content:\'', '\';}#', '{display:none;&:checked{+ div{height:auto;}~ label::before{content:\'', '\';}}}'], function (props) {
  return props.initialHeight;
}, function (props) {
  return props.labelForMore;
}, function (props) {
  return props.id;
}, function (props) {
  return props.labelForLess;
});

var MoreOrLess = function (_Component) {
  (0, _inherits3.default)(MoreOrLess, _Component);

  function MoreOrLess(props) {
    (0, _classCallCheck3.default)(this, MoreOrLess);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.id = getUniqueId();
    return _this;
  }

  MoreOrLess.prototype.render = function render() {
    var _props = this.props,
        initialHeight = _props.initialHeight,
        labelForMore = _props.labelForMore,
        labelForLess = _props.labelForLess,
        children = _props.children,
        props = (0, _objectWithoutProperties3.default)(_props, ['initialHeight', 'labelForMore', 'labelForLess', 'children']);


    return _react2.default.createElement(
      MoreOrLessContainer,
      (0, _extends3.default)({
        id: this.id,
        initialHeight: initialHeight,
        labelForMore: labelForMore,
        labelForLess: labelForLess
      }, props),
      _react2.default.createElement('input', { type: 'checkbox', id: this.id }),
      _react2.default.createElement(
        'div',
        null,
        children
      ),
      _react2.default.createElement(_web2.default, {
        component: 'label',
        htmlFor: this.id,
        color: 'blue',
        size: 's'
      })
    );
  };

  return MoreOrLess;
}(_react.Component);

MoreOrLess.propTypes = {
  initialHeight: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  labelForMore: _propTypes2.default.string,
  labelForLess: _propTypes2.default.string
};

MoreOrLess.defaultProps = {
  labelForMore: 'Show More',
  labelForLess: 'Show Less'
};

exports.default = MoreOrLess;