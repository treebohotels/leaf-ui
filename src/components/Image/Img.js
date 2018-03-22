import styled from 'styled-components';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    } else if (props.shape === 'sharpEdged') {
      return '0';
    } else if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
};

export default styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.isLoaded ? 'static' : 'initial'};
  visibility: ${(props) => props.src ? 'initial' : 'hidden'};
  filter: ${(props) => props.grayscale ? 'grayscale(1)' : 'grayscale(0)'};
  background-color: ${(props) => props.isLoaded ? 'transparent' : props.theme.color.translucent};
  border-radius: ${styles.borderRadius};
`;
