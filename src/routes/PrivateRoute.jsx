import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('../pages/Home'));
const Detail = React.lazy(() => import('../pages/Detail'));
const NotRegisteredUser = React.lazy(() => import('../pages/NotRegisteredUser'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const User = React.lazy(() => import('../pages/User'));
const Favs = React.lazy(() => import('../pages/Favs'));

export const PrivateRoute = ({ isAuth }) => {
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
