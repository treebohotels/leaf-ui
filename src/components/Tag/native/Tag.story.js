import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Tag, Text, Spacer } from '../../../native';

storiesOf('Tag', module)
  .add('bluntEdged', () => (
    <Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium</Text>
        <Tag>
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small</Text>
        <Tag color="lagoon" size="small">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium, kind: outlined</Text>
        <Tag kind="outlined">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small, kind: outlined</Text>
        <Tag color="lagoon" size="small" kind="outlined">
          Tag
        </Tag>
      </Spacer>
    </Spacer>
  ))
  .add('capsular', () => (
    <Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium</Text>
        <Tag shape="capsular">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small</Text>
        <Tag shape="capsular" color="lagoon" size="small">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium, kind: outlined</Text>
        <Tag shape="capsular" kind="outlined">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small, kind: outlined</Text>
        <Tag shape="capsular" color="lagoon" size="small" kind="outlined">
          Tag
        </Tag>
      </Spacer>
    </Spacer>
  ))
  .add('sharpEdged', () => (
    <Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium</Text>
        <Tag shape="sharpEdged">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small</Text>
        <Tag shape="sharpEdged" color="lagoon" size="small">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: primary, size: medium, kind: outlined</Text>
        <Tag shape="sharpEdged" kind="outlined">
          Tag
        </Tag>
      </Spacer>
      <Spacer margin={[2, 2, 0, 2]}>
        <Text>color: lagoon, size: small, kind: outlined</Text>
        <Tag shape="sharpEdged" color="lagoon" size="small" kind="outlined">
          Tag
        </Tag>
      </Spacer>
    </Spacer>
  ));
