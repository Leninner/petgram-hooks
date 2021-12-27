import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';

export const PrivateRoute = ({ isAuth }) => {
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path='/user' element={<User />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/user' element={<NotRegisteredUser />} />
          <Route path='/favs' element={<NotRegisteredUser />} />
        </Routes>
      )}
    </>
  );
};
