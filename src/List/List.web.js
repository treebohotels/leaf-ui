import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const styles = {
  listStyleType(props) {
    if (props.type === 'unordered') {
      return 'disc';
    }
    if (props.type === 'ordered') {
      return 'decimal';
    }
    return 'none';
  },
};

const List = styled(
  ({
    type,
    ...props
  }) => React.createElement(
    props.type === 'ordered' ? 'ol' : 'ul',
    props,
  ),
)`
  margin: 0;
  padding: ${(props) => props.type ? props.theme.px([0, 0, 0, 2]) : '0'};
  list-style-type: ${styles.listStyleType};
  list-style-position: ${(props) => props.type ? 'outside' : ''};

  ${/* sc-selector */ListItem} {
    padding: ${(props) => props.type ? props.theme.px([1, 1, 1, 0]) : props.theme.px(2)};
  }
`;

List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'unordered']),
};

List.Item = ListItem;

export default List;
