import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StudentsContextProvider } from './providers/StudentsContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentsContextProvider>
        <App />
      </StudentsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
