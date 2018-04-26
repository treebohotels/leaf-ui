import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.px([0, 7])};
  background: ${(props) => props.theme.color.lagoon};
`;

export default TitleContainer;
