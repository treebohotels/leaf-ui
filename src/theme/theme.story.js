import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Aux from '../Aux';
import Flex from '../Flex';
import Card from '../Card';
import Spacer from '../Spacer';

storiesOf('Theme', module)
  .add('colors', () => {
    const ColorCard = Card.extend`
      display: flex;
      flex-basis: 25%;
      align-items: center;
      justify-content: center;
      height: 120px;
      margin-bottom: 16px;
    `;
    return (
      <Flex flexWrap="wrap">
        {
          Object.keys(theme.color).map((color) => (
            <ColorCard elevation={1} backgroundColor={color}>
              {color}<br />
              {theme.color[color]}
            </ColorCard>
          ))
        }
      </Flex>
    );
  })
  .add('shadows', () => {
    const ShadowCard = Card.extend`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      width: 120px;
      margin-bottom: 16px;
    `;
    return (
      <Aux>
        {
          Object.keys(theme.boxShadow).map((boxShadow, index) => (
            <ShadowCard elevation={index}>
              {index}
            </ShadowCard>
          ))
        }
      </Aux>
    );
  })
  .add('spacing', () => {
    const SpacingCard = Card.extend`
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed red;
      margin-bottom: 16px;
    `;
    return (
      <Aux>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((space) => (
            <Spacer height={`${space * 8}px`} width={`${space * 8}px`}>
              <SpacingCard>
                {space * 8}
              </SpacingCard>
            </Spacer>
          ))
        }
      </Aux>
    );
  });
