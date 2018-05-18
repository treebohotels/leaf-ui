'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Tick = require('./Tick');

var _Tick2 = _interopRequireDefault(_Tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  checked: {
    Box: {
      borderColor: function borderColor(props) {
        if (props.disabled) {
          return props.theme.color.greyLight;
        } else if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      },
      backgroundColor: function backgroundColor(props) {
        if (props.disabled) {
          return props.theme.color.greyLight;
        } else if (props.error) {
          return props.theme.color.red;
        }
        return props.theme.color.primary;
      }
    }
  },
  Box: {
    borderColor: function borderColor(props) {
      if (props.disabled) {
        return props.theme.color.greyLight;
      } else if (props.error) {
        return props.theme.color.red;
      }
      return props.theme.color.greyLight;
    },
    backgroundColor: function backgroundColor(props) {
      if (props.disabled) {
        return props.theme.color.greyLighter;
      } else if (props.error) {
        return props.theme.color.redLighter;
      }
      return props.theme.color.white;
    }
  }
};

var Input = _styledComponents2.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: 'Input'
})(['position:absolute;width:1px;height:1px;padding:0;margin:0;overflow:hidden;clip:rect(0,0,0,0);clip-path:inset(1px 0 0 0);border:0;visibility:visible;white-space:nowrap;+ ', '{border-color:', ';background-color:', ';}&:focus{+ ', '{border-color:', ';background-color:', ';}}&:checked{+ ', '{border-color:', ';background-color:', ';', '{display:block;}}}'], /* sc-selector */_Box2.default, styles.Box.borderColor, styles.Box.backgroundColor, /* sc-selector */_Box2.default, function (props) {
  return props.theme.color.primary;
}, function (props) {
  return props.theme.color.white;
}, /* sc-selector */_Box2.default, styles.checked.Box.borderColor, styles.checked.Box.backgroundColor, /* sc-selector */_Tick2.default);

exports.default = Input;