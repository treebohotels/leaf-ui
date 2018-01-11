import React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import Button from '../../src/components/Button/native';
import Text from '../../src/components/Text/native';
import theme from '../../src/theme';

const ButtonContainer = styled.View`
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
      <ButtonContainer>
        <Button kind="solid">
          <Text>Solid Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button kind="outlined">
          <Text>Outlined Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button kind="transparent">
          <Text>Transparent Button</Text>
        </Button>
      </ButtonContainer>
    </View>
  ))
  .add('shapes', () => (
    <View>
      <ButtonContainer>
        <Button shape="default">
          <Text>Default Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button shape="flat">
          <Text>Flat Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button shape="rounded">
          <Text>Rounded Button</Text>
        </Button>
      </ButtonContainer>
    </View>
  ))
  .add('sizes', () => (
    <View>
      <ButtonContainer>
        <Button size="small">
          <Text>Small Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button size="regular">
          <Text>Default Button</Text>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button size="large">
          <Text>Large Button</Text>
        </Button>
      </ButtonContainer>
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
          <ButtonContainer>
            <Text size={size}>
              {size}: {theme.fontSize[size]}
              Size
            </Text>
          </ButtonContainer>
        ))
      }
    </View>
  ))
  .add('weights', () => (
    <View>
      {
        Object.keys(theme.fontWeight).map((weight) => (
          <ButtonContainer>
            <Text weight={weight}>
              {weight}: {theme.fontWeight[weight]}
              Weight
            </Text>
          </ButtonContainer>
        ))
      }
    </View>
  ));
