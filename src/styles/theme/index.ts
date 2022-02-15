import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import styles from './styles';
import colors from './foundations/colors';
import fontSizes from './foundations/fontSizes';
import textStyles from './foundations/textStyles';
import layerStyles from './foundations/layerStyles';
import semanticTokens from './foundations/semanticTokens';

const overrides = {
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  } as ThemeConfig,
  ...styles,
  ...colors,
  ...fontSizes,
  ...textStyles,
  ...layerStyles,
  ...semanticTokens,
};

const theme = extendTheme(overrides);

export default theme;
