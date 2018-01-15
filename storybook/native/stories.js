import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import theme from '../../src/theme';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';
import Form from '../../src/components/Form';
import TextInput from '../../src/components/TextInput/native';

const Container = styled.View`
  marginVertical: 8;
  marginHorizontal: 8;
`;

const View = styled.View``;

storiesOf('Button', module)
  .add('default', () => (
    <Button>
      <Text>Default Button</Text>
    </Button>
  ))
  .add('kinds', () => (
    <View>
      <Container>
        <Button kind="solid">
          <Text>Solid Button</Text>
        </Button>
      </Container>
      <Container>
        <Button kind="outlined">
          <Text>Outlined Button</Text>
        </Button>
      </Container>
      <Container>
        <Button kind="transparent">
          <Text>Transparent Button</Text>
        </Button>
      </Container>
    </View>
  ))
  .add('shapes', () => (
    <View>
      <Container>
        <Button shape="default">
          <Text>Default Button</Text>
        </Button>
      </Container>
      <Container>
        <Button shape="flat">
          <Text>Flat Button</Text>
        </Button>
      </Container>
      <Container>
        <Button shape="rounded">
          <Text>Rounded Button</Text>
        </Button>
      </Container>
    </View>
  ))
  .add('sizes', () => (
    <View>
      <Container>
        <Button size="small">
          <Text>Small Button</Text>
        </Button>
      </Container>
      <Container>
        <Button size="regular">
          <Text>Default Button</Text>
        </Button>
      </Container>
      <Container>
        <Button size="large">
          <Text>Large Button</Text>
        </Button>
      </Container>
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
          <Container>
            <Text size={size}>
              {size}: {theme.fontSize[size]}
              Size
            </Text>
          </Container>
        ))
      }
    </View>
  ))
  .add('weights', () => (
    <View>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <Container>
            <Text weight={weight}>
              {weight}: {theme.fontWeight[weight]}
              Weight
            </Text>
          </Container>
        ))
      }
    </View>
  ));

storiesOf('TextInput', module)
  .add('simple', () => (
    <View style={{ paddingHorizontal: 16 }}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        autoFocus={false}
      />
    </View>
  )).add('placeholder', () => (
    <View style={{ paddingHorizontal: 16 }}>
      <TextInput
        name="name"
        label="Name"
        error="required"
        showPlaceholder
        autoFocus={false}
      />
    </View>
  ));

storiesOf('Form', module)
  .add('simple', () => (
    <Form
      initialValues={{
        name: 'Leaf',
      }}
      validationSchema={
        Form.validation.object().shape({
          name: Form.validation.string().required(),
          email: Form.validation.string().email(),
        })
      }
      render={(props) => (
        <Container>
          <TextInput
            name="email"
            label="Email"
            autoFocus={false}
          />
          <Button onPress={props.handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </Container>
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
          email: Form.validation.string().email(),
        })
      }
      render={(props) => (
        <Container>
          <TextInput
            name="name"
            label="Name"
            autoFocus={false}
            leftIcon={
              <View style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
          <Button onPress={props.handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </Container>
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
          email: Form.validation.string().email(),
        })
      }
      render={(props) => (
        <Container>
          <TextInput
            name="name"
            label="Name"
            autoFocus={false}
            rightIcon={
              <View style={{ width: 48, height: 48, backgroundColor: 'red' }} />
            }
          />
          <Button onPress={props.handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </Container>
      )}
    />
  ));
