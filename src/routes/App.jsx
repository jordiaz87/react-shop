import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaout from "../containers/Layaout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (

        <BrowserRouter>

            <Routes>
               
                    <Route exact path="/" element={ <Home />} />
                    <Route exact path="/login" element={
                        <Login /> } />
                    <Route exact path="/recovery-password" element={ <RecoveryPassword  /> } />
                    <Route path="*" element={ <NotFound />} />
               
            </Routes>
            
        </BrowserRouter>
        
    );
}

export default App; 