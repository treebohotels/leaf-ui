import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components';
import theme from '../../src/theme';
import Button from '../../src/components/Button/native';
import Card from '../../src/components/Card/native';
import Divider from '../../src/components/Divider/native';
import Flex from '../../src/components/Flex/native';
import Text from '../../src/components/Text/native';
import Form from '../../src/components/Form/native';
import TextInput from '../../src/components/TextInput/native';
import Tag from '../../src/components/Tag/native';
import Spacer from '../../src/components/Spacer/native';

const View = styled.View`
  margin: 0;
`;

storiesOf('Button', module)
  .add('with text', () => (
    <Spacer margin={[4]}>
      <Button>
        <Text>Default Button</Text>
      </Button>
    </Spacer>
  ))
  .add('kinds', () => (
    <View>
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
    </View>
  ))
  .add('shapes', () => (
    <View>
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
    </View>
  ))
  .add('sizes', () => (
    <View>
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
    </View>
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

storiesOf('Card', module)
  .add('Lagoon', () => (
    <Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={0}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 0</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={1}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 1</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={2}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 2</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={3}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 3</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={4}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 4</Text>
          </Spacer>
        </Card>
      </Spacer>
      <Spacer margin={[0, 0, 5, 0]}>
        <Card color="lagoon" elevation={5}>
          <Spacer padding={2}>
            <Text color="white">Elevation: 5</Text>
          </Spacer>
        </Card>
      </Spacer>
    </Spacer>
  ));

storiesOf('Divider', module)
  .add('Horizontal', () => (
    <Spacer margin={2}>
      <Card color="translucent">
        <Spacer padding={2}>
          <Text>Lorem Ipsum</Text>
        </Spacer>
      </Card>
      <Divider />
      <Card color="translucent">
        <Spacer padding={2}>
          <Text>Treebo Ipsum</Text>
        </Spacer>
      </Card>
    </Spacer>
  ))
  .add('Vertical', () => (
    <Spacer margin={2}>
      <Flex flexDirection="row">
        <Card color="translucent">
          <Spacer padding={2}>
            <Text>Lorem Ipsum</Text>
          </Spacer>
        </Card>
        <Divider vertical />
        <Card color="translucent">
          <Spacer padding={2}>
            <Text>Treebo Ipsum</Text>
          </Spacer>
        </Card>
      </Flex>
    </Spacer>
  ));

storiesOf('Text', module)
  .add('Default', () => (
    <Text>Simple Text</Text>
  ))
  .add('sizes', () => (
    <View>
      {
        Object.keys(theme.fontSize).map((size) => (
          <Spacer margin={[4]} key={size}>
            <Text size={size}>
              {size}: {theme.fontSize[size]}
              Size
            </Text>
          </Spacer>
        ))
      }
    </View>
  ))
  .add('weights', () => (
    <View>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <Spacer margin={[4]} key={weight}>
            <Text weight={weight}>
              {weight}: {theme.fontWeight[weight]}
              Weight
            </Text>
          </Spacer>))
      }
    </View>
  ));

storiesOf('TextInput', module)
  .add('simple', () => (
    <Spacer margin={[2]}>
      <TextInput
        name="name"
        label="Name"
        error="required"
      />
    </Spacer>
  )).add('placeholder', () => (
    <Spacer margin={[2]}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        showPlaceholder
      />
    </Spacer>
  ));

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      validationSchema={
        Form.validation.object().shape({
          email: Form.validation.string().email(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="email"
            label="Email"
          />
        </Spacer>
      )}
    />
  ))
  .add('left icon', () => (
    <Form
      initialValues={{
        name: 'Leaf',
      }}
      validationSchema={
        Form.validation.object().shape({
          name: Form.validation.string().required(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="name"
            label="Name"
            leftIcon={
              <View style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Spacer>
      )}
    />
  ))
  .add('right icon', () => (
    <Form
      initialValues={{
        name: 'Leaf',
      }}
      validationSchema={
        Form.validation.object().shape({
          name: Form.validation.string().required(),
        })
      }
      render={() => (
        <Spacer margin={[2]}>
          <TextInput
            name="Name"
            label="Name"
            rightIcon={
              <View style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Spacer>
      )}
    />
  ));

storiesOf('Tag', module)
  .add('bluntEdged', () => (
    <View>
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
    </View>
  ))
  .add('capsular', () => (
    <View>
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
    </View>
  ))
  .add('sharpEdged', () => (
    <View>
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
    </View>
  ));
