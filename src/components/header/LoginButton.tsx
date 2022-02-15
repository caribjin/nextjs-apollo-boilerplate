import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui';

const LoginButton: React.FC = () => {
  const handlerLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    signIn();
  };

  return (
    <Button size="sm" onClick={handlerLogin}>
      LOGIN
    </Button>
  );
};

export default LoginButton;
