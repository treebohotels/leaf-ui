import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../theme';

export default (storiesOf, {
  Tag,
  Spacer,
  Flex,
}) =>
  storiesOf('Tag', module)
    .add('playground', () => (
      <Tag
        color={select('color', Object.keys(theme.color), 'primary')}
        kind={select('kind', ['filled', 'outlined'], 'filled')}
        shape={select('shape', ['bluntEdged', 'sharpEdged', 'capsular'], 'bluntEdged')}
        size={select('size', ['small', 'medium'], 'medium')}
      >
        {text('children', 'Tag')}
      </Tag>
    ))
    .add('kinds', () => (
      <Spacer width="100px">
        <Flex flexDirection="column" >
          <Tag kind="outlined">
            outlined
          </Tag>
          <Spacer margin={[1, 0, 0, 0]}>
            <Tag kind="filled">
              filled
            </Tag>
          </Spacer>
        </Flex>
      </Spacer>
    ))
    .add('size', () => (
      <Spacer width="100px">
        <Flex flexDirection="column" >
          <Tag size="small">
            small
          </Tag>
          <Spacer margin={[1, 0, 0, 0]}>
            <Tag>
              medium
            </Tag>
          </Spacer>
        </Flex>
      </Spacer>
    ));
