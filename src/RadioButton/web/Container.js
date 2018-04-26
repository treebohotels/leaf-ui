import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: ${(props) => props.theme.px([2, 0])};
`;

export default Container;
