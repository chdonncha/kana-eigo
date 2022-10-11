import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from "./pages/ErrorPage";
import KanaQuiz from "./pages/KanaQuiz";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import React from "react";

function App() {
    return (
        <>
            <div className="flex-wrapper">
                <Router>
                    <NavbarComponent/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/kanaquiz" element={<KanaQuiz/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </Router>
                <FooterComponent/>
            </div>
        </>
    );
}

export default App;