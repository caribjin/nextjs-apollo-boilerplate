import React from 'react';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const AccessDenied: React.FC = () => {
  return (
    <Box w="full" h="calc(100vh - 58px)" display="flex" alignItems="center" justifyContent="center">
      <Stack align="center">
        <Heading>Access Denied</Heading>
        <Text>
          <NextLink href="/api/auth/signin">
            <Link>LOGIN</Link>
          </NextLink>
        </Text>
      </Stack>
    </Box>
  );
};

export default AccessDenied;
