import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FooterComponent } from './components/FooterComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import { KanaQuizMenu } from './pages/KanaQuizMenu';

function App() {
  return (
    <>
      <div className="flex-wrapper">
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kanaeigo" element={<Home />} />
            <Route path="/kanaquiz" element={<KanaQuizMenu />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;