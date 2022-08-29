import {createRoot} from 'react-dom/client';
import React,{StrictMode} from 'react';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <ChakraProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </ChakraProvider>
    </StrictMode>
);