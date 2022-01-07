import React from 'react';
import { PhotoFav } from '../PhotoFav';
import { Ul } from './styles.js';
import PropTypes from 'prop-types';

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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
