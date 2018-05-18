'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  borderColor: function borderColor(props) {
    if (props.isOpen) {
      return props.theme.color.primary;
    } else if (props.disabled) {
      return props.theme.color.greyLight;
    } else if (props.error) {
      return props.theme.color.red;
    }
    return props.theme.color.greyLight;
  },
  backgroundColor: function backgroundColor(props) {
    if (props.isOpen) {
      return props.theme.color.white;
    } else if (props.disabled) {
      return props.theme.color.greyLighter;
    } else if (props.error) {
      return props.theme.color.redLighter;
    }
    return props.theme.color.white;
  }
};

var Trigger = _styledComponents2.default.button.withConfig({
  displayName: 'Trigger'
})(['position:relative;display:flex;justify-content:space-between;align-items:center;cursor:pointer;border-width:1px;border-style:solid;border-color:', ';border-radius:', ';background-color:', ';pointer-events:', ';width:', ';padding:0;outline:none;&:focus{border-color:', ';background-color:', ';}'], styles.borderColor, function (props) {
  return props.theme.borderRadius;
}, styles.backgroundColor, function (props) {
  return props.disabled ? 'none' : '';
}, function (props) {
  return props.block ? '100%' : props.theme.px(25);
}, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.color.white;
});

exports.default = Trigger;