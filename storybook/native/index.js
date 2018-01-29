import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import theme from '../../src/theme';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));

configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
