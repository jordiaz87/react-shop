import React from "react";
import Layaout from "../containers/Layaout";
import Login from "../containers/Login";
import '../styles/global.css';

const App = () => {
    return (
        <Layaout>
            <Login />
        </Layaout>
    );
}

export default App; 