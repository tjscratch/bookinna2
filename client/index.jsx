import React from 'react';
import { render } from 'react-dom';
import  App  from './components/App.jsx';
import './index.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers/index.jsx'

const store = createStore(allReducers);

render(
    <Provider store={store}>
         <App />
    </Provider>
    , document.getElementById('app')
);
