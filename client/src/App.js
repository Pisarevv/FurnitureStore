import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation'
import Catalog from './components/Catalog/Catalog'

import './assets/App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Logout from './components/Logout/Logout';


function App() {

  const [auth,setAuth] = useLocalStorage('user',{});

  const userLogin = (userData) => {
    setAuth(userData);
  }

  const userLogout = () => {
    setAuth({})
  }


  return (
    <AuthContext.Provider value = {{user: auth, userLogin, userLogout}}>
      <div className="App">
        <Navigation />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<Faq />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
