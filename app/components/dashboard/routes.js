import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import session from '../../store/session';


const ProtectedRoute = ({ component: Component , ...rest }) => {
  return (
    <Route { ...rest } render={
      (props) => ( session.isLoggedIn
        ? <Component { ...props }/>
        : <Redirect to="/login" />
      )
    } />
  );
};

export default ProtectedRoute;