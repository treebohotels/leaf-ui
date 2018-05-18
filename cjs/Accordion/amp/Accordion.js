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

var _AccordionSection = require('./AccordionSection');

var _AccordionSection2 = _interopRequireDefault(_AccordionSection);

var _AccordionSectionTrigger = require('./AccordionSectionTrigger');

var _AccordionSectionTrigger2 = _interopRequireDefault(_AccordionSectionTrigger);

var _AccordionSectionContent = require('./AccordionSectionContent');

var _AccordionSectionContent2 = _interopRequireDefault(_AccordionSectionContent);

var _reactChildrenGroupByType = require('../../utils/reactChildrenGroupByType');

var _reactChildrenGroupByType2 = _interopRequireDefault(_reactChildrenGroupByType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groupIndex = 0;

var Accordion = function (_Component) {
  (0, _inherits3.default)(Accordion, _Component);

  function Accordion(props) {
    (0, _classCallCheck3.default)(this, Accordion);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.getGroupName = function () {
      groupIndex += 1;
      return '__LEAF_UI__accordion-group-' + groupIndex;
    };

    _this.groupName = _this.getGroupName();
    return _this;
  }

  Accordion.prototype.render = function render() {
    var _this2 = this;

    var children = this.props.children;

    var accordionChildrenGroupByType = (0, _reactChildrenGroupByType2.default)(children);
    var noOtherSiblingSections = accordionChildrenGroupByType[_AccordionSection2.default] && accordionChildrenGroupByType[_AccordionSection2.default].length === 1;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.Children.map(children, function (child) {
        return child && child.type === _AccordionSection2.default ? _react2.default.cloneElement(child, {
          groupName: _this2.groupName,
          noOtherSiblingSections: noOtherSiblingSections
        }) : child;
      })
    );
  };

  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  children: _propTypes2.default.node
};

Accordion.Section = _AccordionSection2.default;
Accordion.Section.Trigger = _AccordionSectionTrigger2.default;
Accordion.Section.Content = _AccordionSectionContent2.default;

exports.default = Accordion;