'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _THead = require('./THead');

var _THead2 = _interopRequireDefault(_THead);

var _TBody = require('./TBody');

var _TBody2 = _interopRequireDefault(_TBody);

var _TH = require('./TH');

var _TH2 = _interopRequireDefault(_TH);

var _TR = require('./TR');

var _TR2 = _interopRequireDefault(_TR);

var _TD = require('./TD');

var _TD2 = _interopRequireDefault(_TD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'Table'
})(['width:100%;border-collapse:collapse;']);

Table.THead = _THead2.default;

Table.TBody = _TBody2.default;

Table.TH = _TH2.default;

Table.TR = _TR2.default;

Table.TD = _TD2.default;

exports.default = Table;