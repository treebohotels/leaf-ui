import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: ${(p) => p.theme.px(2)};
  ${(p) => p.button ? `
    cursor: pointer;

    &:hover,
    &:focus {
      background: ${p.theme.color.blackTranslucent};
    }

    ${p.disabled ? `
      color: ${p.theme.color.smoke};
      pointer-events: none;
      opacity: 0.5;
    ` : ''}
  ` : ''}
`;

ListItem.propTypes = {
  button: PropTypes.bool,
  disabled: PropTypes.bool,
};

ListItem.defaultProps = {
  button: false,
  disabled: false,
};

export default ListItem;
