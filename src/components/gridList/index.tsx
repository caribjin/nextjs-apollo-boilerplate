import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

export const GridList: React.FC = ({ children }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} px={70} py={10}>
      {children}
    </SimpleGrid>
  );
};
