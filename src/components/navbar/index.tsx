import React from 'react';
import NextLink from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <NextLink href="/launches">
      <a href="#">Launchs</a>
    </NextLink>
  );
};
