import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Theme } from './Theme';
import { ThemeProvider } from '@mui/material';
import { AppProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </AppProvider>
  
  </React.StrictMode>
);

