import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn } from '@/pages/SignIn';

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
