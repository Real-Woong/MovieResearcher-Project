import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import GlobalStyle from './components/GlobalStyle.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GlobalStyle />  
      <App />  
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}