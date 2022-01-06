import React from 'react';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NotRegisteredUser } from '../pages/NotRegisteredUser';
import { NotFound } from '../pages/NotFound';
import { User } from '../pages/User';
import { Favs } from '../pages/Favs';
import { Routes, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuth }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />

        {isAuth ? (
          <>
            <Route path='/user' element={<User />} />
            <Route path='/favs' element={<Favs />} />
          </>
        ) : (
          <>
            <Route path='/user' element={<NotRegisteredUser isAuth={isAuth} />} />
            <Route path='/favs' element={<NotRegisteredUser isAuth={isAuth} />} />
          </>
        )}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
