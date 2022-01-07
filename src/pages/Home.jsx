import React, { useContext } from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useParams } from 'react-router-dom';
import { Layout } from '../container/Layout';

const HomePage = () => {
  const { id } = useParams();

  return (
    <Layout title='Home'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};

const Home = React.memo(HomePage, (prevProps, currentProps) => {
  return prevProps.categoryId === currentProps.categoryId;
});

export default Home;
