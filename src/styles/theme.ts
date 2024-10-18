export type BROJSize = 'xs' | 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';

export type Colors = typeof light;
export type FontPresets = typeof fontPresets;

export type ColorKeys = keyof typeof light;
export type FontPresetKeys = keyof typeof fontPresets;

const light = {
  gray1: '#fff',
  gray2: '#f5f5f5',
  gray3: '#eeeeee',
  gray4: '#e0e0e0',
  gray5: '#b5b5b5',
  gray6: '#ababab',
  gray7: '#8c8c8c',
  gray8: '#7c7c7c',
  gray9: '#3f3f3f',
  gray10: '#1b1b1b',
  primary1: '#fff0e6',
  primary2: '#ffe0cc',
  primary3: '#ffc299',
  primary4: '#ffa366',
  primary5: '#ff8533',
  primary6: '#fa6400',
  primary7: '#cc5200',
  primary8: '#993d00',
  primary9: '#662900',
  primary10: '#331400',
  secondary1: '#e8e8fd',
  secondary2: '#d1d0fb',
  secondary3: '#bab9f8',
  secondary4: '#8c8af4',
  secondary5: '#7573f2',
  secondary6: '#4744ee',
  secondary7: '#1916e9',
  secondary8: '#1411bb',
  secondary9: '#0f0d8c',
  secondary10: '#0a095d',
  warning1: '#fff9e6',
  warning6: '#ffc400',
  critical1: '#fde8e7',
  critical6: '#f14a41',
  success1: '#ebfaee',
  success6: '#34c759',
  information1: '#e6f2ff',
  information6: '#007aff',
};
const dark: Colors = {
  gray1: '#fff',
  gray2: '#f5f5f5',
  gray3: '#eeeeee',
  gray4: '#e0e0e0',
  gray5: '#b5b5b5',
  gray6: '#ababab',
  gray7: '#8c8c8c',
  gray8: '#7c7c7c',
  gray9: '#3f3f3f',
  gray10: '#1b1b1b',
  primary1: '#fff0e6',
  primary2: '#ffe0cc',
  primary3: '#ffc299',
  primary4: '#ffa366',
  primary5: '#ff8533',
  primary6: '#fa6400',
  primary7: '#cc5200',
  primary8: '#993d00',
  primary9: '#662900',
  primary10: '#331400',
  secondary1: '#e8e8fd',
  secondary2: '#d1d0fb',
  secondary3: '#bab9f8',
  secondary4: '#8c8af4',
  secondary5: '#7573f2',
  secondary6: '#4744ee',
  secondary7: '#1916e9',
  secondary8: '#1411bb',
  secondary9: '#0f0d8c',
  secondary10: '#0a095d',
  warning1: '#fff9e6',
  warning6: '#ffc400',
  critical1: '#fde8e7',
  critical6: '#f14a41',
  success1: '#ebfaee',
  success6: '#34c759',
  information1: '#e6f2ff',
  information6: '#007aff',
};

const fontPresets = {
  headline24_2: `
    font-size: 24px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: normal;
  `,
  headline22_2: `
    font-size: 22px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: normal;
  `,
  headline20_2: `
    font-size: 20px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: normal;
  `,
  title2: `
    font-size: 18px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: normal;
  `,
  body1: `
    font-size: 16px;
    font-family: BROJSans-Bold;
    font-weight: 700;
    line-height: 150%;
  `,
  body2: `
    font-size: 16px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: 150%;
  `,
  body3: `
    font-size: 16px;
    font-family: BROJSans-Medium;
    font-weight: 500;
    line-height: 150%;
  `,
  callout1: `
    font-size: 14px;
    font-family: BROJSans-Bold;
    font-weight: 700;
    line-height: 150%;
  `,
  callout2: `
    font-size: 14px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: 150%;
  `,
  callout3: `
    font-size: 14px;
    font-family: BROJSans-Medium;
    font-weight: 500;
    line-height: 150%;
  `,
  footnote1: `
    font-size: 12px;
    font-family: BROJSans-Bold;
    font-weight: 700;
    line-height: 150%;
  `,
  footnote2: `
    font-size: 12px;
    font-family: BROJSans-Semibold;
    font-weight: 600;
    line-height: 150%;
  `,
  footnote3: `
    font-size: 12px;
    font-family: BROJSans-Medium;
    font-weight: 500;
    line-height: 150%;
  `,
  caption10_2: `
    font-size: 10px;
    font-family: BROJSans-Bold;
    font-weight: 700;
    line-height: 150%;
  `,
};

export const theme = {
  color: {
    light,
    dark,
  },
  font: fontPresets,
};
