import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Flex from '../Flex';
import Card from '../Card';

storiesOf('Theme', module)
  .add('color', () => {
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
      margin-right: 16px;
    `;
    return (
      <Flex>
        {
          Object.keys(theme.boxShadow).map((boxShadow, index) => (
            <ShadowCard elevation={index}>
              {index}
            </ShadowCard>
          ))
        }
      </Flex>
    );
  });
