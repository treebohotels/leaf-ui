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
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'capsular') {
      return props.theme.px(10);
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  fontSize(props) {
    if (props.size === 'small') {
      return props.theme.fontSize.xxxs;
    } else if (props.size === 'medium') {
      return props.theme.fontSize.xs;
    }
    return '';
  },
  padding(props) {
    if (props.size === 'small') {
      return props.theme.px([0.375, 1]);
    } else if (props.size === 'medium') {
      return props.theme.px([0.5, 1.5]);
    }
    return '';
  },
};

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${styles.color};
  background: ${styles.background};
  border: 1px solid ${(props) => props.theme.color[props.color]};
  border-radius: ${styles.borderRadius};
  font-size: ${styles.fontSize};
  padding: ${styles.padding};
`;

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular']),
  size: PropTypes.oneOf(['small', 'medium']),
};

Tag.defaultProps = {
  color: 'primary',
  kind: 'filled',
  shape: 'bluntEdged',
  size: 'medium',
};

export default Tag;
