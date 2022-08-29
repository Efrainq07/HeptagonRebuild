import {createRoot} from 'react-dom/client';
import React,{StrictMode} from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App'

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);