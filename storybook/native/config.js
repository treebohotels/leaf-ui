/* eslint-disable global-require */
import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme';

const isAndroid = Platform.OS === 'android';

theme.fontFamily = {
  normal: isAndroid ? 'roboto-normal' : 'sfprodisplay-normal',
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
  require('../../src/Text/native/Text.story');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Regular': require('./fonts/Roboto.ttf'),
      'Roboto-Medium': require('./fonts/Roboto_medium.ttf'),
      'SFProDisplay-Regular': require('./fonts/SFProDisplay-Regular.otf'),
      'SFProDisplay-Medium': require('./fonts/SFProDisplay-Medium.otf'),
      'SFProDisplay-Semibold': require('./fonts/SFProDisplay-Semibold.otf'),
      'Averta-Bold': require('./fonts/Averta-Bold.otf'),
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
