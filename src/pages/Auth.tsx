import React from 'react';
import Button from '../components/common/Button';

const Auth = () => {
  return (
    <div>
      <Button type='button' disabled={false} fullWith={true}>
        로그인
      </Button>
    </div>
  );
};

export default Auth;
