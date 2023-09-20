import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

import { FooterComponent } from './components/FooterComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import { KanaQuizMenu } from './pages/KanaQuizMenu';

function App() {
  return (
    <div className='flex-wrapper'>
      <NavbarComponent />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kanaeigo' element={<Home />} />
          <Route path='/kanaquiz' element={<KanaQuizMenu />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;