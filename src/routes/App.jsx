import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaout from "../containers/Layaout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import '../styles/global.css';

const App = () => {
    return (

        <BrowserRouter>

            <Routes>
                <Layaout>
                    <Route exact path="/" element={ <Home />} />
                    <Route exact path="/login" element={
                        <Login /> } />
                    <Route exact path="/recovery-password" element={ <RecoveryPassword  /> } />
                    <Route element={ <NotFound />} />
                </Layaout>
            </Routes>
            
        </BrowserRouter>
        
    );
}

export default App; 