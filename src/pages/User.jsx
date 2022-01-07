import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../container/Layout';

export default () => {
  const { deactivateAuth } = useContext(Context);

  return (
    <Layout title='Usuario'>
      <SubmitButton onClick={deactivateAuth}>Log Out</SubmitButton>
    </Layout>
  );
};
