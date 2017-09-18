import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './components/routes';
import reducer from './reducers';

import { createStore } from 'redux';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//import configureStore from './store/configureStore';
//const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, 
  document.getElementById('root')
);
