import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './types';

export const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
