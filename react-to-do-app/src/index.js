import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Integrate the Redux to react */}
    <Provider store={store}>
       <App />
    </Provider>
  
  </React.StrictMode>
);

reportWebVitals();
