import React from 'react';

type Props = {
  statusCode: number;
};

const ErrorPageComponent: React.FC<Props> = ({ statusCode }) => {
  return (
    <div>
      Error code: {statusCode}
      <div />
    </div>
  );
};

export default ErrorPageComponent;
