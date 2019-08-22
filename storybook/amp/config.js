import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import theme, { BaseStyles } from '../../src/theme';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Leaf-UI',
      brandUrl: 'https://github.com/treebohotels/leaf-ui',
    }),
    panelPosition: 'right',
  },
});

addDecorator(withKnobs);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <BaseStyles />
    {story()}
  </ThemeProvider>
));

configure(
  [
    require.context('../../src', true, /\.story\.js$/),
  ],
  module,
);
