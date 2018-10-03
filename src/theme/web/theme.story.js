import React from 'react';
import { storiesOf } from '@storybook/react';
import theme from './theme';
import Flex from '../../Flex/web';
import Space from '../../Space/web';
import Size from '../../Size/web';
import View from '../../View/web';
import Card from '../../Card/web';

storiesOf('Theme', module)
  .add('colors', () => (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
    >
      <View>
        {
          Object.keys(theme.color).map((color) => (
            <Flex
              key={color}
              flexBasis="25%"
              alignItems="center"
              justifyContent="center"
            >
              <Space margin={[0, 0, 2, 0]}>
                <Size height={10}>
                  <Card
                    backgroundColor={color}
                    elevated
                  >
                    {color}
                    <br />
                    {theme.color[color]}
                  </Card>
                </Size>
              </Space>
            </Flex>
          ))
        }
      </View>
    </Flex>
  ))
  .add('spacing', () => (
    <View>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map((space) => (
          <Space
            key={space}
            margin={[0, 0, 2, 0]}
          >
            <Size
              height={space}
              width={space}
            >
              <Card
                borderColor="red"
                borderStyle="dashed"
              >
                {space * 8}
              </Card>
            </Size>
          </Space>
        ))
      }
    </View>
  ));
