import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'element-theme-default';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './store/reducer'


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>
);
