import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '@/pages/home';

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
