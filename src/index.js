import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { loger } from './Middlewares';
import rootReducer from './Reducers/rootReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancer = composeAlt(applyMiddleware(thunk, loger));
const store = createStore( rootReducer , composeEnhancer)


root.render(
  <Provider store={store} >
    <App />
  </Provider>
);