import { useQuery } from '@apollo/client';
import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import { GridList } from '@/components/gridList';
import { Spinner } from '@/components/ui';
import { QUERY_GET_LAUNCHES } from '@/services/graphql/launches';
import React from 'react';
import Launche from './Launche';
import { LaunchesPast, LaunchesPastVariables } from '@/types/launche';

const LaunchesPageComponent: React.FC = () => {
  const { data, loading, error } = useQuery<LaunchesPast, LaunchesPastVariables>(
    QUERY_GET_LAUNCHES,
    {
      variables: { limit: 20 },
    },
  );

  if (loading)
    return (
      <Center h="calc(100vh - 58px)">
        <Spinner />
      </Center>
    );
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data || !data.launchesPast) return <p>Not found</p>;

  return (
    <Box w="full" py={10}>
      <VStack>
        <Heading size="md" color="gray.500" mb={3}>
          Past SpaceX Launches
        </Heading>
        <GridList>
          {data.launchesPast.map(launche => {
            if (!launche) return;
            return <Launche key={launche.id} launche={launche} />;
          })}
        </GridList>
      </VStack>
    </Box>
  );
};

export default LaunchesPageComponent;
