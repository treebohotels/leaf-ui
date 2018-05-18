'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  listStyleType: function listStyleType(props) {
    if (props.type === 'unordered') {
      return 'disc';
    } else if (props.type === 'ordered') {
      return 'decimal';
    }
    return 'none';
  }
};

var listComponent = function listComponent(type) {
  return type === 'ordered' ? 'ol' : 'ul';
};

var List = (0, _styledComponents2.default)(function (_ref) {
  var type = _ref.type,
      props = (0, _objectWithoutProperties3.default)(_ref, ['type']);
  return _react2.default.createElement(listComponent(props.type), props);
}).withConfig({
  displayName: 'List'
})(['margin:0;padding:', ';list-style-type:', ';list-style-position:', ';> ', '{padding:', ';}'], function (props) {
  return props.type ? props.theme.px([0, 0, 0, 2]) : '0';
}, styles.listStyleType, function (props) {
  return props.type ? 'outside' : '';
}, /* sc-selector */_ListItem2.default, function (props) {
  return props.type ? props.theme.px([1, 1, 1, 0]) : props.theme.px(2);
});

List.propTypes = {
  type: _propTypes2.default.oneOf(['ordered', 'unordered'])
};

List.Item = _ListItem2.default;

exports.default = List;