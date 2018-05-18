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

var _AccordionSectionTrigger = require('./AccordionSectionTrigger');

var _AccordionSectionTrigger2 = _interopRequireDefault(_AccordionSectionTrigger);

var _AccordionSectionContent = require('./AccordionSectionContent');

var _AccordionSectionContent2 = _interopRequireDefault(_AccordionSectionContent);

var _amp = require('../../Icon/amp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputIndex = 0;

var AccordionSectionContainer = (0, _styledComponents2.default)(function (_ref) {
  var inputId = _ref.inputId,
      props = (0, _objectWithoutProperties3.default)(_ref, ['inputId']);
  return _react2.default.createElement('div', props);
}).withConfig({
  displayName: 'AccordionSection__AccordionSectionContainer'
})(['#', '{display:none;&:checked{~ ', '{height:auto;}+ ', '{', '{transform:rotate(180deg);}}}}'], function (props) {
  return props.inputId;
}, /* sc-selector */_AccordionSectionContent2.default, /* sc-selector */_AccordionSectionTrigger2.default, /* sc-selector */_amp.I);

var AccordionSection = function (_Component) {
  (0, _inherits3.default)(AccordionSection, _Component);

  function AccordionSection(props) {
    (0, _classCallCheck3.default)(this, AccordionSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.getInputId = function () {
      inputIndex += 1;
      return '__LEAF_UI__accordion-trigger-input-' + inputIndex;
    };

    _this.getInputType = function (noOtherSiblingSections) {
      return noOtherSiblingSections ? 'checkbox' : 'radio';
    };

    _this.inputId = _this.getInputId();
    return _this;
  }

  AccordionSection.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        groupName = _props.groupName,
        noOtherSiblingSections = _props.noOtherSiblingSections,
        children = _props.children,
        props = (0, _objectWithoutProperties3.default)(_props, ['groupName', 'noOtherSiblingSections', 'children']);


    return _react2.default.createElement(
      AccordionSectionContainer,
      (0, _extends3.default)({
        inputId: this.inputId
      }, props),
      _react2.default.createElement('input', {
        type: this.getInputType(noOtherSiblingSections),
        name: groupName,
        id: this.inputId
      }),
      _react2.default.Children.map(children, function (child) {
        return child && child.type === _AccordionSectionTrigger2.default ? _react2.default.cloneElement(child, {
          htmlFor: _this2.inputId
        }) : child;
      })
    );
  };

  return AccordionSection;
}(_react.Component);

AccordionSection.propTypes = {
  children: _propTypes2.default.node,
  groupName: _propTypes2.default.string,
  noOtherSiblingSections: _propTypes2.default.bool
};

exports.default = AccordionSection;