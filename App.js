import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import StorybookUI from './storybook/native/config';

// eslint-disable-next-line react/prefer-stateless-function
class AwakeInDevApp extends React.Component {
  render() {
    return React.createElement(
      View,
      {
        style: {
          flex: 1,
        },
      },
      React.createElement(StorybookUI, this.props),
      React.createElement(process.env.NODE_ENV === 'development' ? Expo.KeepAwake : View),
    );
  }
}

Expo.registerRootComponent(AwakeInDevApp);
