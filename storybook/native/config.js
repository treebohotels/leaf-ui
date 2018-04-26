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
  require('../../src/Button/native/Button.story');
  require('../../src/Card/native/Card.story');
  require('../../src/Divider/native/Divider.story');
  require('../../src/Form/native/Form.story');
  require('../../src/Tag/native/Tag.story');
  require('../../src/Text/native/Text.story');
  require('../../src/TextInput/native/TextInput.story');
}, module);

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-normal': require('./fonts/Roboto.ttf'),
      'roboto-medium': require('./fonts/Roboto_medium.ttf'),
      'sfprodisplay-normal': require('./fonts/SFProDisplay-Regular.otf'),
      'sfprodisplay-medium': require('./fonts/SFProDisplay-Medium.otf'),
      'sfprodisplay-semibold': require('./fonts/SFProDisplay-Semibold.otf'),
      'averta-bold': require('./fonts/Averta-Bold.otf'),
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
