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

var _web = require('../../Flex/web');

var _web2 = _interopRequireDefault(_web);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _TitleContainer = require('./TitleContainer');

var _TitleContainer2 = _interopRequireDefault(_TitleContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      selectedTabIndex: _react2.default.Children.map(_this.props.children, function (tab, index) {
        return tab.props.defaultSelected ? index : null;
      }).find(function (index) {
        return index !== null;
      }) || 0
    }, _this.onTabClick = function (index) {
      return function () {
        var selectedTabIndex = _this.state.selectedTabIndex;

        if (index !== selectedTabIndex) {
          _this.setState({ selectedTabIndex: index });
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tabs.prototype.render = function render() {
    var _this2 = this;

    var selectedTabIndex = this.state.selectedTabIndex;
    var children = this.props.children;


    return _react2.default.createElement(
      _web2.default,
      { flexDirection: 'column' },
      _react2.default.createElement(
        _TitleContainer2.default,
        null,
        _react2.default.Children.map(children, function (tab, index) {
          return _react2.default.createElement(
            _Title2.default,
            {
              isSelected: index === selectedTabIndex,
              onClick: _this2.onTabClick(index)
            },
            tab.props.title
          );
        })
      ),
      children[selectedTabIndex]
    );
  };

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node
};

Tabs.Tab = _Tab2.default;

exports.default = Tabs;