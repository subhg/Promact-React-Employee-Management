// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'; // Import the Redux store
import { Provider } from 'react-redux'; // Import Provider from react-redux

// Render the app inside the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
