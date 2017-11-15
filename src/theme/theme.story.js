import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Flex from '../Flex';
import Card from '../Card';

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
      margin-right: 16px;
    `;
    return (
      <Flex>
        <ShadowCard color="white">elevation 0</ShadowCard>
        <ShadowCard color="white" elevation={1}>elevation 1</ShadowCard>
        <ShadowCard color="white" elevation={2}>elevation 2</ShadowCard>
      </Flex>
    );
  });
