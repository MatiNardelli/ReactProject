import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import "./style.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  //el modo stric solo se activa en desarrollo.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
