import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';
import { NotFound } from '../pages/NotFound';

export const PrivateRoute = ({ isAuth }) => {
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path='/user' element={<User />} />
          <Route path='/favs' element={<Favs />} />
        </>
      ) : (
        <>
          <Route path='/user' element={<NotRegisteredUser />} />
          <Route path='/favs' element={<NotRegisteredUser />} />
        </>
      )}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
