export default {
  borderRadius: '2px',

  boxShadow: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(114, 113, 113, 0.08)',
    '0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 3px 6px 0 rgba(174, 174, 174, 0.16)',
    '0 10px 20px 0 rgba(0, 0, 0, 0.12), 0 6px 6px 0 rgba(0, 0, 0, 0.16)',
    '0 14px 28px 0 rgba(0, 0, 0, 0.12), 0 10px 10px 0 rgba(0, 0, 0, 0.16)',
    '0 19px 38px 0 rgba(0, 0, 0, 0.16), 0 15px 12px 0 rgba(0, 0, 0, 0.16)',
  ],

  color: {
    leafLighter: '#d2e8da',
    leafLight: '#78bb91',
    leaf: '#088337',
    leafDark: '#06682c',
    lagoonLighter: '#d0e6e9',
    lagoonLight: '#5ca9b3',
    lagoon: '#007989',
    lagoonDark: '#00606d',
    chillLighter: '#f2f8f7',
    chillLight: '#d4e8e4',
    chill: '#bcdcd6',
    chillDark: '#96b0ab',
    inkLighter: '#d7d9e3',
    inkLight: '#757a9e',
    ink: '#272f67',
    inkDark: '#1b2552',
    royalLighter: '#e0e3fb',
    royalLight: '#949ef1',
    royal: '#5768e9',
    royalDark: '#4553ba',
    rioLighter: '#f6f7d0',
    rioLight: '#dfe45c',
    rio: '#ced500',
    rioDark: '#8a8f00',
    black: '#4a4a4a',
    blackTranslucent: 'rgba(0, 0, 0, 0.1)',
    slate: '#717171',
    rock: '#aeaeae',
    smoke: '#d9d9d9',
    cloud: '#e6e6e6',
    snow: '#ebebeb',
    white: '#ffffff',
    infoLighter: '#d0ede9',
    infoLight: '#5cc2b5',
    info: '#00a08b',
    infoDark: '#008070',
    warningLighter: '#fcf0cd',
    warningLight: '#ffea8a',
    warning: '#edc200',
    warningDark: '#9c6f19',
    dangerLighter: '#fbeae5',
    dangerLight: '#fdac9a',
    danger: '#ed6347',
    dangerDark: '#bf0711',
    successLighter: '#e3f1df',
    successLight: '#bbe5b3',
    success: '#50b83c',
    successDark: '#108043',
  },

  fontFamily: {
    roboto: 'Roboto',
    averta: 'Averta',
  },

  fontSize: {
    xxxl: '28px',
    xxl: '24px',
    xl: '20px',
    l: '18px',
    m: '16px',
    s: '14px',
    xs: '12px',
    xxs: '10px',
  },

  fontWeight: {
    normal: 400,
    semibold: 500,
    bold: 700,
  },

  px(value) {
    const values = Array.isArray(value) ? value : [value];
    return values
      .map((v) => typeof v === 'string' ? v : `${v * this.pxScale}px`)
      .join(' ');
  },

  pxScale: 8,
};
