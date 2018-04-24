import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  color: ${(props) => props.disabled ? props.theme.color.greyLight : ''};
  padding: ${(props) => props.theme.px(2)};
  cursor: ${(props) => props.clickable ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};

  &:hover,
  &:focus {
    background: ${(props) => props.clickable ? props.theme.color.translucent : ''};
  }
`;

ListItem.propTypes = {
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
};

ListItem.defaultProps = {
  clickable: false,
  disabled: false,
};

export default ListItem;
