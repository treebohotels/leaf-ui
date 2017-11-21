import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import injectBaseStyles from '../src/theme/injectBaseStyles';
import injectIconStyles from '../src/components/Icon/injectIconStyles';
import theme from '../src/theme';

setOptions({
  name: 'Leaf-UI',
  url: 'https://github.com/treebohotels/leaf-ui',
  downPanelInRight: true,
});

addDecorator(withKnobs);

addDecorator((story) => {
  injectBaseStyles();
  injectIconStyles();
  return (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  );
});

function loadStories() {
  const req = require.context('../src', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
