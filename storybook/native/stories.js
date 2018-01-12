import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';
import theme from '../../src/theme';
import Spacer from '../../src/components/Spacer/native/Spacer';

storiesOf('Button', module)
  .add('default', () => (
    <Button>
      <Text>Default Button</Text>
    </Button>
  ))
  .add('kinds', () => (
    <Spacer>
      <Spacer margin={4}>
        <Button kind="solid">
          <Text>Solid Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button kind="outlined">
          <Text>Outlined Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button kind="transparent">
          <Text>Transparent Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('shapes', () => (
    <Spacer>
      <Spacer margin={4}>
        <Button shape="default">
          <Text>Default Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button shape="flat">
          <Text>Flat Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button shape="rounded">
          <Text>Rounded Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('sizes', () => (
    <Spacer>
      <Spacer margin={4}>
        <Button size="small">
          <Text>Small Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button size="regular">
          <Text>Default Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={4}>
        <Button size="large">
          <Text>Large Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('block', () => (
    <Button block>
      <Text>Block Button</Text>
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      <Text>Disabled Button</Text>
    </Button>
  ));

storiesOf('Text', module)
  .add('Default', () => (
    <Text>Simple Text</Text>
  ))
  .add('sizes', () => (
    <Spacer>
      {
        Object.keys(theme.fontSize).map((size) => (
          <Spacer margin={4}>
            <Text size={size}>
              {size}: {theme.fontSize[size]}
              Size
            </Text>
          </Spacer>
        ))
      }
    </Spacer>
  ))
  .add('weights', () => (
    <Spacer>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <Spacer margin={4}>
            <Text weight={weight}>
              {weight}: {theme.fontWeight[weight]}
              Weight
            </Text>
          </Spacer>
        ))
      }
    </Spacer>
  ));
