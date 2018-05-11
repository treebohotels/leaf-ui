import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import theme from '../theme';

export default (storiesOf, {
  Flex,
  Space,
  View,
  Tag,
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
      <Flex alignItems="flex-start">
        <View>
          <Tag kind="outlined">
            outlined
          </Tag>
          <Space margin={[1, 0, 0, 0]}>
            <Tag kind="filled">
              filled
            </Tag>
          </Space>
        </View>
      </Flex>
    ))
    .add('size', () => (
      <Flex alignItems="flex-start">
        <View>
          <Tag size="small">
            small
          </Tag>
          <Space margin={[1, 0, 0, 0]}>
            <Tag>
              medium
            </Tag>
          </Space>
        </View>
      </Flex>
    ));
