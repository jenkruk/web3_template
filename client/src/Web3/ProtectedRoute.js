import React, { useContext } from 'react';
import Home from '../pages/Home';
import { Outlet } from "react-router";
import Context from '../Context';

const ProtectedRoute = () => {
  const { user } = useContext(Context);
  
  const useAuth = () => {
    // const user = {currentSupply: true};
    
    return user && user.currentSupply > 0;
  } 
  
  const isAuth = useAuth();
  console.log('user', user);
  console.log('isAuth', isAuth);

  return isAuth ? <Outlet /> : <Home />

};

export default ProtectedRoute;
