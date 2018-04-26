import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Flex from '../Flex/web';
import Card from '../Card/web';
import Spacer from '../Spacer/web';

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
            <ColorCard key={color} elevation={1} color={color}>
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
      <div>
        {
          Object.keys(theme.boxShadow).map((boxShadow, index) => (
            <ShadowCard key={boxShadow} elevation={index}>
              {index}
            </ShadowCard>
          ))
        }
      </div>
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
      <div>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((space) => (
            <Spacer key={space} height={space} width={space}>
              <SpacingCard>
                {space * 8}
              </SpacingCard>
            </Spacer>
          ))
        }
      </div>
    );
  });
