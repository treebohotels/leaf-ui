import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../Flex';
import Space from '../Space';
import View from '../View';
import Tag from './Tag';

storiesOf('Tag', module).addParameters({
  component: Tag,
})
  .add('shape', () => (
    <Flex alignItems="flex-start">
      <Space margin={[2]}>
        <View>
          <Tag
            shape="bluntEdged"
            size="small"
            color="teal"
            kind="outlined"
          >
              bluntEdged small outlined
          </Tag>
          <Space margin={[2, 0, 0, 0]}>
            <Tag color="teal" size="medium">
                bluntEdged medium filled
            </Tag>
          </Space>
          <Space margin={[4, 0, 0, 0]}>
            <Tag
              shape="capsular"
              size="small"
              color="teal"
            >
                capsular small filled
            </Tag>
          </Space>
          <Space margin={[2, 0, 0, 0]}>
            <Tag
              shape="capsular"
              color="teal"
              kind="outlined"
            >
                capsular medium outlined
            </Tag>
          </Space>
          <Space margin={[4, 0, 0, 0]}>
            <Tag
              shape="sharpEdged"
              size="small"
              color="teal"
              kind="outlined"
            >
                sharpEdged small outlined
            </Tag>
          </Space>
          <Space margin={[2, 0, 0, 0]}>
            <Tag shape="sharpEdged" color="teal">
                sharpEdged medium filled
            </Tag>
          </Space>
        </View>
      </Space>
    </Flex>
  ))
  .add('kind', () => (
    <Flex alignItems="flex-start">
      <Space margin={[2]}>
        <View>
          <Tag kind="outlined" color="teal">
              outlined
          </Tag>
          <Space margin={[2, 0, 0, 0]}>
            <Tag kind="filled" color="teal">
                filled
            </Tag>
          </Space>
        </View>
      </Space>
    </Flex>
  ))
  .add('size', () => (
    <Flex alignItems="flex-start">
      <Space margin={[2]}>
        <View>
          <Tag size="small" color="teal">
              small
          </Tag>
          <Space margin={[2, 0, 0, 0]}>
            <Tag color="teal">
                medium
            </Tag>
          </Space>
        </View>
      </Space>
    </Flex>
  ));
