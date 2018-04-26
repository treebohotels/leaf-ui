import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Spacer from '../../Spacer/native';
import Text from '../../Text/native';
import Button from '../native';

storiesOf('Button', module)
  .add('with text', () => (
    <Spacer margin={[4]}>
      <Button>
        <Text>Default Button</Text>
      </Button>
    </Spacer>
  ))
  .add('kinds', () => (
    <Spacer>
      <Spacer margin={[4]}>
        <Button kind="filled">
          <Text>Filled Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={[4]}>
        <Button kind="outlined">
          <Text>Outlined Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('shapes', () => (
    <Spacer>
      <Spacer margin={[4]}>
        <Button shape="bluntEdged">
          <Text>Blunt Edged Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={[4]}>
        <Button shape="sharpEdged">
          <Text>Sharp Edged Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={[4]}>
        <Button shape="capsular">
          <Text>Capsular Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('sizes', () => (
    <Spacer>
      <Spacer margin={[4]}>
        <Button size="small">
          <Text>Small Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={[4]}>
        <Button size="medium">
          <Text>Default Button</Text>
        </Button>
      </Spacer>
      <Spacer margin={[4]}>
        <Button size="large">
          <Text>Large Button</Text>
        </Button>
      </Spacer>
    </Spacer>
  ))
  .add('block', () => (
    <Spacer margin={[4]}>
      <Button block>
        <Text>Block Button</Text>
      </Button>
    </Spacer>
  ))
  .add('disabled', () => (
    <Spacer margin={[4]}>
      <Button disabled>
        <Text>Disabled Button</Text>
      </Button>
    </Spacer>
  ));
