/* eslint-disable global-require */
import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme';

const isAndroid = Platform.OS === 'android';

theme.fontFamily = {
  regular: isAndroid ? 'roboto-regular' : 'sfprodisplay-regular',
  medium: isAndroid ? 'roboto-medium' : 'sfprodisplay-medium',
  semibold: isAndroid ? 'roboto-medium' : 'sfprodisplay-semibold',
  bold: 'averta-bold',
};

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
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-regular': require('../../assets/fonts/Roboto.ttf'),
      'roboto-medium': require('../../assets/fonts/Roboto_medium.ttf'),
      'sfprodisplay-regular': require('../../assets/fonts/SFProDisplay-Regular.otf'),
      'sfprodisplay-medium': require('../../assets/fonts/SFProDisplay-Medium.otf'),
      'sfprodisplay-semibold': require('../../assets/fonts/SFProDisplay-Semibold.otf'),
      'averta-bold': require('../../assets/fonts/Averta-Bold.otf'),
    });

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return <StorybookUIRoot />;
    }
    return null;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
