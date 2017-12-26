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
    greenLighter: '#e6f7ed',
    greenLight: '#6ed396',
    green: '#0eb550',
    greenDark: '#00893d',

    blueLighter: '#eeeffc',
    blueLight: '#9aa4f2',
    blue: '#5768e9',
    blueDark: '#4451b6',

    yellowLighter: '#fff0d6',
    yellowLight: '#ffc866',
    yellow: '#ffa400',
    yellowDark: '#cc8300',

    redLighter: '#ffeff1',
    redLight: '#ffa3ab',
    red: '#ff6673',
    redDark: '#cc525c',

    lagoonLighter: '#e5f1f3',
    lagoonLight: '#66afb8',
    lagoon: '#007989',
    lagoonDark: '#004c56',

    tealLighter: '#eaf3f1',
    tealLight: '#a1d5ca',
    teal: '#44ac95',
    tealDark: '#2d907a',

    chillLighter: '#f2f8f7',
    chillLight: '#d4e8e4',
    chill: '#bcdcd6',
    chillDark: '#9ab5b0',

    white: '#ffffff',
    greyLighter: '#f1f1f1',
    greyLight: '#dedede',
    grey: '#aeaeae',
    greyDark: '#717171',
    greyDarker: '#4a4a4a',
    blackTranslucent: 'rgba(0, 0, 0, 0.1)',
    black: '#000000',
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
    const values = [].concat(value);
    return values
      .map((v) => typeof v === 'string' ? v : `${v * this.pxScale}px`)
      .join(' ');
  },

  pxScale: 8,
};
