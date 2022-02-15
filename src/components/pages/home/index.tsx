import { Main } from '@/components';
import Counter from '@/components/counter';
import { Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

type indexProps = {};

const HomePageComponent: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" minH="calc(100vh - 122px)">
      <Main />
      <Counter />
      <Spacer />
    </Flex>
  );
};

export default HomePageComponent;
