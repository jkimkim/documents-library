import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function PrivateRoute({ element: Component, ...rest }) {
  const { currentUser } = useAuth();

  // If user is logged in, show the component, otherwise redirect to login page
  return (
    <Route
      {...rest}
      element={currentUser ? <Component /> : <Navigate to="/" replace />}
    />
  );
}

export default PrivateRoute;
