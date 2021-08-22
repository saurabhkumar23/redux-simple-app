import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import store from './store'
import {Provider} from 'react-redux' 
import Balls from './Balls'


function App() {

	return (
        <Provider store = {store}>
            <Balls/>
        </Provider>
	);
}

export default App;
