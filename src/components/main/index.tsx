import { Box, Container, useTheme } from '@chakra-ui/react';
import { Button } from '@/components';
import React from 'react';

export const Main: React.FC = () => {
  const theme = useTheme();

  return (
    <Box bg="gradient" color="white" textAlign="center" py={10}>
      <h1 color="textColor" style={{ fontSize: theme.fontSizes['5xl'] }}>
        NextJs Apollo Boilerplate
      </h1>
      <Container w="500px" mb="10" fontStyle="italic">
        Next.js and Apollo-Client web application, designed for learning and real-world
        applicability.
      </Container>
      <Button size="md">
        <a href="https://github.com/caribjin/nextjs-apollo-boilerplate" target="_blank">
          GitHub
        </a>
      </Button>
    </Box>
  );
};
