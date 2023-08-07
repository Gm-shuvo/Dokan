import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth/AuthProvider';

// Define a PrivateRoute component that checks if the user is authenticated.
// If authenticated, render the component, otherwise, redirect to the login page.
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const { currentUser } = useAuth();
  console.log("🚀 ~ file: PrivateRoute ~ currentUser:", currentUser)
  
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          // console.log("🚀 ~ file: PrivateRoute.jsx:17 ~ PrivateRoute ~ currentUser:", currentUser)
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
