import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, Posts } from '@/pages';

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};
