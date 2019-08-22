import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../Flex';
import Space from '../Space';
import Size from '../Size';
import View from '../View';
import Text from '../Text';
import Card from '../Card';
import theme from './theme';

storiesOf('Theme', module)
  .add('colors', () => (
    <Flex flexDirection="row" flexWrap="wrap">
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
                    <Card backgroundColor={color} shape="sharpEdged">
                      <Card shape="sharpEdged" backgroundColor="greyLighter">
                        <Text size="xxs">
                          {`${color}\n${theme.color[color]}`}
                        </Text>
                      </Card>
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
            <View>
              <Text size="xs">{space * 8}</Text>
              <Space key={space} margin={[0, 0, 2, 0]}>
                <Size height={space} width={space}>
                  <Card borderColor="red" borderStyle="dashed" />
                </Size>
              </Space>
            </View>
          ))
        }
    </View>
  ));
