import React from 'react';
import { useGetFavorites } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';

export const Favs = () => {
  const { favs, loading, error } = useGetFavorites();

  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={favs} loading={loading} error={error} />
    </>
  );
};
