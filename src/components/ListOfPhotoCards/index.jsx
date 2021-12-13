import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '../../hooks/useGetPhotos';

export const ListOfPhotoCards = ({ categoryId }) => {
  // Estamos haciendo uso de useQuery para obtener los datos de la base de datos. useQuery es un hook
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!!</p>;

  return (
    <ul>
      {data.photos.map((value) => (
        <PhotoCard key={value.id} {...value} />
      ))}
    </ul>
  );
};
