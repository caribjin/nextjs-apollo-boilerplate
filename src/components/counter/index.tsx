import { counterActions } from '@/redux/actions';
import { RootState } from '@/redux/reducers';
import { useAppDispatch } from '@/redux/store';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <Flex direction="column" justify="center">
      <Heading size="lg" my={3} textAlign="center">
        Counter
      </Heading>
      <Flex justifyContent="center">
        <Button size="sm" onClick={() => dispatch(counterActions.decrease())}>
          -
        </Button>
        <Text mx={10}>{count}</Text>
        <Button size="sm" onClick={() => dispatch(counterActions.increase())}>
          +
        </Button>
      </Flex>
    </Flex>
  );
}
