import React, {useEffect} from 'react';
import './App.css';
import Navigation from "./Navigation";
import AppBody from "./AppBody";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    useEffect(() => {
        document.title = "Litomericko API Client"
    }, []);

    return (
        <Router>
            <Navigation/>
            <AppBody/>
        </Router>
    );
}

export default App;
