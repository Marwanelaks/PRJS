import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import RendezVous from './Rendez-Vous';
import AdminLogin from './admin/AdminLogin';
import Admin from './admin/Admin';

import Recudown from './Recudown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}></Route>
    <Route path='/Rendez-Vous' element={<RendezVous/>} />
    <Route path='/admin-login' element={<AdminLogin/>} />
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/télécharger-recu' element={<Recudown/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


