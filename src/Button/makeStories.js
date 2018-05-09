import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import theme from '../theme';

export default (storiesOf, {
  Button,
  Spacer,
  Flex,
}) =>
  storiesOf('Button', module)
    .add('playground', () => (
      <Button
        color={select('color', Object.keys(theme.color), 'primary')}
        kind={select('kind', ['filled', 'outlined'], 'filled')}
        shape={select('shape', ['bluntEdged', 'sharpEdged', 'capsular', 'circular'], 'bluntEdged')}
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        block={boolean('block', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
      >
        {text('children', 'Button')}
      </Button>
    ))
    .add('kinds', () => (
      <Spacer width="200px">
        <Flex flexDirection="column" >
          <Button kind="filled">
          Filled Button
          </Button>
          <Spacer margin={[1, 0, 0, 0]}>
            <Button kind="outlined">
            Outlined Button
            </Button>
          </Spacer>
        </Flex>
      </Spacer>
    ))
    .add('shapes', () => (
      <Spacer width="200px">
        <Flex flexDirection="column" >
          <Button shape="bluntEdged">
            Blunt Edged Button
          </Button>
          <Spacer margin={[1, 0, 0, 0]}>
            <Button shape="sharpEdged">
              Sharp Edged Button
            </Button>
          </Spacer>
          <Spacer margin={[1, 0, 0, 0]}>
            <Button shape="capsular">
              Capsular Button
            </Button>
          </Spacer>
          <Spacer margin={[1, 0, 0, 0]} width="45px">
            <Button shape="circular">
            C
            </Button>
          </Spacer>
        </Flex>
      </Spacer>
    ))
    .add('sizes', () => (
      <Spacer width="200px">
        <Flex flexDirection="column" >
          <Button size="small">
          Small Button
          </Button>
          <Spacer margin={[1, 0, 0, 0]}>
            <Button size="medium">
            Medium Button
            </Button>
          </Spacer>
          <Spacer margin={[1, 0, 0, 0]}>
            <Button size="large">
            Large Button
            </Button>
          </Spacer>
        </Flex>
      </Spacer>
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
    ));
