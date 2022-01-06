import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { useParams } from 'react-router-dom';
import { Layout } from '../container/Layout';

export const Detail = () => {
  const { detailId } = useParams();

  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
