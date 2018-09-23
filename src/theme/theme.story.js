import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../theme';
import Flex from '../Flex/web';
import View from '../View/web';
import Size from '../Size/web';

storiesOf('Theme', module)
  .add('colors', () => {
    const ColorView = View.extend`
      display: flex;
      flex-basis: 25%;
      align-items: center;
      justify-content: center;
      height: 120px;
      margin-bottom: 16px;
    `;
    return (
      <Flex flexWrap="wrap">
        <View>
          {
            Object.keys(theme.color).map((color) => (
              <ColorView key={color} backgroundColor={color} elevated>
                {color}
                <br />
                {theme.color[color]}
              </ColorView>
            ))
          }
        </View>
      </Flex>
    );
  })
  .add('spacing', () => {
    const SpacingView = View.extend`
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed red;
      margin-bottom: 16px;
    `;
    return (
      <View>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((space) => (
            <Size key={space} height={space} width={space}>
              <SpacingView>
                {space * 8}
              </SpacingView>
            </Size>
          ))
        }
      </View>
    );
  });
