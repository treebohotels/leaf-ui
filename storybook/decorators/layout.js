import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const layoutDecorator = (story) => (
  <Container>
    <div>{story()}</div>
  </Container>
);

export default layoutDecorator;
