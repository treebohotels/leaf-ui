import React from 'react';
import theme from '../theme';

export default (storiesOf, { Text, View, Space }) =>
  storiesOf('Text', module)
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
