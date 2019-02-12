import React from 'react';
import { registerRootComponent } from 'expo';
import StorybookUI from './storybook/native/config';

class App extends React.Component {
  state = {};

  render() {
    return (
      <StorybookUI />
    );
  }
}

registerRootComponent(App);
