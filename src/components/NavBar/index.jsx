import React from 'react';
import { Nav, Link } from './Styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const SIZE = '32';

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHome size={SIZE} />
      </Link>
      <Link to='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to='/user'>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};
