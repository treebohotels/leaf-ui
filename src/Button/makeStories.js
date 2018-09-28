import React from 'react';

export default (storiesOf, {
  Flex,
  View,
  Space,
  Button,
}) =>
  storiesOf('Button', module)
    .add('kinds', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button kind="filled">
            Filled Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button kind="outlined">
              Outlined Button
            </Button>
          </Space>
        </View>
      </Flex>
    ))
    .add('shapes', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button shape="bluntEdged">
            Blunt Edged Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="sharpEdged">
              Sharp Edged Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="capsular">
              Capsular Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button shape="circular">
              C
            </Button>
          </Space>
        </View>
      </Flex>
    ))
    .add('sizes', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button size="small">
            Small Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="medium">
              Medium Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="large">
              Large Button
            </Button>
          </Space>
        </View>
      </Flex>
    ))
    .add('block', () => (
      <Button block>
        Block Button
      </Button>
    ))
    .add('disabled', () => (
      <Button disabled>
        Disabled Button
      </Button>
    ))
    .add('loading', () => (
      <Flex alignItems="flex-start">
        <View>
          <Button size="small" isLoading>
            Small Button
          </Button>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="medium" isLoading>
              Medium Button
            </Button>
          </Space>
          <Space margin={[1, 0, 0, 0]}>
            <Button size="large" isLoading>
              Large Button
            </Button>
          </Space>
        </View>
      </Flex>
    ));
