import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import THead from './THead';
import TBody from './TBody';
import TH from './TH';
import TR from './TR';
import TD from './TD';

const Table = styled.table`
  border-collapse: collapse;
  background-color: ${(props) => props.color ? props.theme.color[props.color] : ''};
`;

Table.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
};

Table.defaultProps = {
  color: 'white',
};

Table.THead = THead;

Table.TBody = TBody;

Table.TH = TH;

Table.TR = TR;

Table.TD = TD;

export default Table;
