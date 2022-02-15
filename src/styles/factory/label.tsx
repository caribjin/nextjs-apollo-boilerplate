import { Box, chakra } from '@chakra-ui/react';

export const Label = chakra(Box, {
  baseStyle: {
    color: 'gray.500',
    fontWeight: 'bold',
    letterSpacing: 'width',
    fontSize: 'xs',
  },
});
