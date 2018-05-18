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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionSectionContent = (0, _styledComponents2.default)(function (_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    props,
    children
  );
}).withConfig({
  displayName: 'AccordionSectionContent'
})(['height:0;overflow:hidden;']);

AccordionSectionContent.propTypes = {
  children: _propTypes2.default.node
};

exports.default = AccordionSectionContent;