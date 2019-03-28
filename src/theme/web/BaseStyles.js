import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.color.greyLighter};
    color: ${(props) => props.theme.color.greyDarker};
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-family: ${(props) => props.theme.fontFamily.roboto}, system-ui, sans-serif;
    margin: 0;
  }

  *,
  *::after,
  *::before {
    line-height: 1.2;
    box-sizing: inherit;
  }
`;

export default BaseStyles;
