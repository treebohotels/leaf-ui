import React from 'react';

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Maecenas at elit eget diam convallis ultricies in a ligula. \
Nunc rutrum est ut risus laoreet laoreet. \
Donec convallis massa at pretium tincidunt.
Quisque quis tellus quis odio venenatis bibendum.`;

export default (storiesOf, {
  Card,
  Space,
  View,
  Text,
}) =>
  storiesOf('Card', module)
    .add('simple', () => (
      <View>
        <Space padding={[1]} margin={[1, 0]}>
          <Card>
            <Text>
              <Text weight="bold">Simple Card:</Text>
              {' '}
              {sampleText}
            </Text>
          </Card>
        </Space>
        <Space padding={[1]} margin={[1, 0]}>
          <Card elevated>
            <Text>
              <Text weight="bold">Elevated Card:</Text>
              {' '}
              {sampleText}
            </Text>
          </Card>
        </Space>
      </View>
    ));
