import styled from 'styled-components';
import THead from './THead';
import TBody from './TBody';
import TH from './TH';
import TR from './TR';
import TD from './TD';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

Table.THead = THead;

Table.TBody = TBody;

Table.TH = TH;

Table.TR = TR;

Table.TD = TD;

export default Table;
