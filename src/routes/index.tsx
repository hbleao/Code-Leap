import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProtectedRoute } from './protectedRoute';

import { SignIn, Posts } from '@/pages';
import { RootState } from '@/redux/store';

export const ApplicationRoutes = () => {
  const { auth } = useSelector((state: RootState) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route
          path="/posts"
          element={
            <ProtectedRoute user={auth.username}>
              <Posts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
