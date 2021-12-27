import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';

export const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pet/:id' element={<Home />} />
      <Route path='/detail/:detailId' element={<Detail />} />
    </Routes>
  );
};
