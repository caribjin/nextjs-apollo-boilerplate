import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import React from 'react';

const LogoutButton: React.FC = () => {
  const handlerLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    signOut();
  };

  return (
    <Button size="sm" onClick={handlerLogout}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
