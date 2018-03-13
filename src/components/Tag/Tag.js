import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    } else if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    }
    return '';
  },
  background(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    } else if (props.kind === 'outlined') {
      return props.theme.color[`${props.color}Lighter`];
    }
    return '';
  },
  fontSize(props) {
    if (props.size === 'small') {
      return props.theme.fontSize.xxs;
    } else if (props.size === 'medium') {
      return props.theme.fontSize.xs;
    }
    return '';
  },
  padding(props) {
    if (props.size === 'small') {
      return props.theme.px(0.5);
    } else if (props.size === 'medium') {
      return props.theme.px([1, 1.5]);
    }
    return '';
  },
};

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.color[props.color]};
  color: ${styles.color};
  background: ${styles.background};
  font-size: ${styles.fontSize};
  padding: ${styles.padding};
`;

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'outlined',
  size: 'medium',
};

export default Tag;
