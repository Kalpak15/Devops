// import { StrictMode } from 'react'
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'


import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Adjust extension if needed
import { BrowserRouter } from 'react-router-dom'; // Add this if using routing
createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
    <App />
  </BrowserRouter>
)
