import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <GoogleOAuthProvider clientId="180598139259-d65lhh7gr2ja5462gjviqfhdnk56aje5.apps.googleusercontent.com">
  <Provider store={store}>
    <App />
  </Provider>
  // </GoogleOAuthProvider>
);
reportWebVitals();