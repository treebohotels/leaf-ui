import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import theme, { injectBaseStyles } from '../../src/theme';
import injectIconStyles from '../../src/components/Icon/web/injectIconStyles';

setOptions({
  name: 'Leaf-UI',
  url: 'https://github.com/treebohotels/leaf-ui',
  addonPanelInRight: true,
});

addDecorator(withKnobs);

addDecorator((story) => {
  injectBaseStyles(theme);
  injectIconStyles();
  return (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  );
});

configure(() => {
  const req = require.context('../../src', true, /amp\.story\.js$/);
  req.keys().forEach((filename) => req(filename));
}, module);
