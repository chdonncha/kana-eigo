import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FooterComponent } from './components/FooterComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './pages/Home';
import { KanaQuiz } from './pages/KanaQuiz';

// TODO: Convert app to use typescript

export const App = () => {
  return (
    <>
      <div className="flex-wrapper">
        <Router>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kanaquiz" element={<KanaQuiz />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <FooterComponent />
      </div>
    </>
  );
};
