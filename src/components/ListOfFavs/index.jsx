import React from 'react';
import { PhotoFav } from '../PhotoFav';
import { Ul } from './styles.js';

export const ListOfFavs = ({ favs, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <Ul>
      {favs.map((value) => (
        <PhotoFav key={value.id} {...value} />
      ))}
    </Ul>
  );
};
