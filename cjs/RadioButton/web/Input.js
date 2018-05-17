'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Circle = require('./Circle');

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  focus: {
    Circle: {
      boxShadow: function boxShadow(props) {
        if (props.disabled) {
          return '0 0 0 1px ' + props.theme.color.grey;
        } else if (props.error) {
          return '0 0 0 1px ' + props.theme.color.red;
        }
        return '0 0 0 1px ' + props.theme.color.primary;
      }
    }
  },
  checked: {
    Circle: {
      background: function background(props) {
        if (props.disabled) {
          return props.theme.color.grey;
        } else if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      }
    }
  },
  Circle: {
    border: function border(props) {
      if (props.disabled) {
        return '1px solid ' + props.theme.color.grey;
      } else if (props.error) {
        return '1px solid ' + props.theme.color.greyDark;
      }
      return '1px solid ' + props.theme.color.greyDark;
    }
  }
};

var Input = _styledComponents2.default.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: 'Input'
})(['position:absolute;width:1px;height:1px;padding:0;margin:0;overflow:hidden;clip:rect(0,0,0,0);clip-path:inset(1px 0 0 0);border:0;visibility:visible;white-space:nowrap;+ ', '{border:', ';}&:focus{+ ', '{box-shadow:', ';}}&:checked{+ ', '{&::before{content:\'\';width:', ';height:', ';border-radius:50%;background:', ';}}}'], /* sc-selector */_Circle2.default, styles.Circle.border, /* sc-selector */_Circle2.default, styles.focus.Circle.boxShadow, /* sc-selector */_Circle2.default, function (props) {
  return props.theme.px(1);
}, function (props) {
  return props.theme.px(1);
}, styles.checked.Circle.background);

exports.default = Input;