import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider  router={router}/>
      <App />
    
  </>
);
                