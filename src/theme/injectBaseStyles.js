import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  html {
    box-sizing: border-box;
  }

  body {
    background: ${(p) => p.theme.color.rock};
    color: ${(p) => p.theme.color.black};
    font-size: ${(p) => p.theme.fontSize.s};
    font-weight: ${(p) => p.theme.fontWeight.normal};
    font-family: ${(p) => p.theme.fontFamily.roboto}, system-ui;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ol {
    list-style: decimal inside;
    padding: 0;
    margin: 0;
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
