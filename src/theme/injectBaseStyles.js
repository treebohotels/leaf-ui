/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import injectIconStyles from '../Icon/web/injectIconStyles';

const injectBaseStyles = (
  theme,
  options = {
    icons: true,
  },
) => {
  injectGlobal`
    html {
      line-height: 1.2;
      box-sizing: border-box;
    }

    body {
      background: ${theme.color.greyLighter};
      color: ${theme.color.greyDarker};
      font-size: ${theme.fontSize.s};
      font-weight: ${theme.fontWeight.normal};
      font-family: ${theme.fontFamily.roboto}, system-ui, sans-serif;
      margin: 0;
    }

    *,
    *::after,
    *::before {
      box-sizing: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 0;
      margin: 0;
    }
  `;

  if (options.icons) {
    injectIconStyles(theme);
  }
};

export default injectBaseStyles;
