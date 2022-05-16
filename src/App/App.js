import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header';
import HomeModule from '../modules/HomeModule'
// import store from "./redux/store";

function App(){

    return (
		<div className="App">
			<div id="overlay">
					<Header />
			</div>
					<BrowserRouter>
						<Routes>
              				<Route path="/" element={<HomeModule/>} />
						</Routes>
					</BrowserRouter>

			</div>
    );

}

export default App;
