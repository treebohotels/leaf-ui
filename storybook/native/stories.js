import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import theme from '../../src/theme';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';
import Form from '../../src/components/Form';
import TextInput from '../../src/components/TextInput/native';
import Spacer from '../../src/components/Spacer/native';

const View = styled.View`
  margin: 0;
`;

storiesOf('Button', module)
  .add('with text', () => (
    <Button>
      <Text>Default Button</Text>
    </Button>
  ))
  .add('kinds', () => (
    <View>
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
    </View>
  ))
  .add('shapes', () => (
    <View>
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
    </View>
  ))
  .add('sizes', () => (
    <View>
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
    </View>
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
    <View>
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
    </View>
  ))
  .add('weights', () => (
    <View>
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
    </View>
  ));

storiesOf('TextInput', module)
  .add('simple', () => (
    <Spacer margin={2}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        autoFocus={false}
      />
    </Spacer>
  )).add('placeholder', () => (
    <Spacer margin={2}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        showPlaceholder
        autoFocus={false}
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
        <Spacer margin={2}>
          <TextInput
            name="email"
            label="Email"
            autoFocus={false}
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
        <Spacer margin={2}>
          <TextInput
            name="name"
            label="Name"
            autoFocus={false}
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
        <Spacer margin={2}>
          <TextInput
            name="Name"
            label="Name"
            autoFocus={false}
            rightIcon={
              <View style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
        </Spacer>
      )}
    />
  ));
