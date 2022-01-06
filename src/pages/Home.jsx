import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useParams } from 'react-router-dom';
import { Layout } from '../container/Layout';

export const Home = () => {
  const { id } = useParams();

  return (
    <Layout title='Home'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
