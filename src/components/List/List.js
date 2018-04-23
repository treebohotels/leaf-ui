import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = styled.ul`
  list-style-type: ${(props) => props.bulletType || 'none'};
  list-style-position: ${(props) => props.bulletType ? 'inside' : ''};

  + ${/* sc-selector */ListItem} {
    padding: ${(props) => props.bulletType ? '8px 8px 8px 0px' : props.theme.px(2)};
  }
`;

List.propTypes = {
  bulletType: PropTypes.oneOf(['', 'disc']),
  disabled: PropTypes.bool,
};

List.defaultProps = {
  bulletType: '',
};

List.Item = ListItem;

export default List;
