import 'styled-components';
import { Colors, FontPresets } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;
    font: FontPresets;
  }
}
