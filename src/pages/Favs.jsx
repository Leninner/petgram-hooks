import React from 'react';
import { useGetFavorites } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';
import { Layout } from '../container/Layout';

export default () => {
  const { favs, loading, error } = useGetFavorites();

  return (
    <Layout title='Favoritos'>
      <ListOfFavs favs={favs} loading={loading} error={error} />
    </Layout>
  );
};
