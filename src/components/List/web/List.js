import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = styled.ul`
  list-style-type: ${(props) => props.bulletType || 'none'};
  list-style-position: ${(props) => props.bulletType ? 'inside' : ''};

  > ${/* sc-selector */ListItem} {
    padding: ${(props) => props.bulletType ? props.theme.px([1, 1, 1, 0]) : props.theme.px(2)};
  }
`;

List.propTypes = {
  bulletType: PropTypes.oneOf(['disc']),
};

List.Item = ListItem;

export default List;
