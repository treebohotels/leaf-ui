import React from 'react';

export default (storiesOf, {
  Flex,
  Space,
  View,
  Tag,
}) =>
  storiesOf('Tag', module)
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
                sharpEdged small filled
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
