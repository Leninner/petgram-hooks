import React from 'react';
import { Link, Image } from './styles';

export const PhotoFav = ({ src, id }) => {
  return (
    <Link>
      <Image src={src} alt={id} />
    </Link>
  );
};
