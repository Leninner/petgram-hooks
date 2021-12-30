import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfFavs = ({ favs, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <ul>
      {favs.map((value) => (
        <PhotoCard key={value.id} {...value} />
      ))}
    </ul>
  );
};
