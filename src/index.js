import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './components/MyApp'
import {Provider} from 'react-redux'
import {createStore} from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);


ReactDOM.render(<Provider store={store}>
    <MyApp/>
</Provider>, document.getElementById('root'));
