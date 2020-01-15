import { createGlobalStyle } from 'styled-components';
import {
  fonts,
  breakpoints,
  borderRadius,
  zIndex,
  sizes,
} from './theme/config/global';
import colors from './theme/config/colors';
import animations from './theme/config/animations';
import device from './theme/config/device';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fonts.ABBVoice};
    padding: 3.8rem 0 0 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  colors,
  fonts,
  breakpoints,
  borderRadius,
  zIndex,
  animations,
  sizes,
  device,
};
