import React from 'react';
import { storiesOf } from '@storybook/react';
import Space from '../Space';
import View from '../View';
import Text from './Text';
import theme from '../theme';

storiesOf('Text', module).addParameters({
  component: Text,
})
  .add('sizes', () => (
    <Space margin={[2]}>
      <View>
        {Object.keys(theme.fontSize).map((size) => (
          <Space padding={[1]} key={size}>
            <Text size={size}>
              {`size="${size}" (${theme.fontSize[size]})`}
            </Text>
          </Space>
        ))}
      </View>
    </Space>
  ))
  .add('weights', () => (
    <Space margin={[2]}>
      <View>
        {Object.keys(theme.fontWeight).map((weight) => (
          <Space padding={[1]} key={weight}>
            <Text size="xl" weight={weight}>
              {`weight="${weight}" (${theme.fontWeight[weight]})`}
            </Text>
          </Space>
        ))}
      </View>
    </Space>
  ));
