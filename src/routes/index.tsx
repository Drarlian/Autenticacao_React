import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AuthRouter from '../components/AuthRouter';
import Layout from '../components/layout';
import { AuthContext } from '../contexts/Auth';
import Signin from '../pages/Signin';
import Private from '../pages/Private';

const RoutesApp: React.FC = () => {

  const { user } = useContext(AuthContext)

  return (
    <Routes>
        <Route path="/home" element={user?.role ? <AuthRouter><Layout><Home/></Layout></AuthRouter> : <Signin/>}/>
        <Route path="/private" element={user?.role ? <AuthRouter><Layout><Private/></Layout></AuthRouter> : <Signin/>}/>
    </Routes>
  );
}

export default RoutesApp;