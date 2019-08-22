import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.px([0, 3])};
  border-bottom: 1px solid ${(props) => props.theme.color.greyLight};
`;

export default TitleContainer;
