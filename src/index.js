import React,  { Component } from 'react';
import { Provider } from 'react-redux';

import rootReducer from './redux/reducers';
import configureStore from './redux/store/configure-store';

import App from './App'

const store = configureStore(rootReducer);


export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
