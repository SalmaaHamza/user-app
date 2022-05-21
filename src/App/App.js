import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header';
import HomeModule from '../modules/HomeModule'
import { Provider } from 'react-redux';
import store from "../redux/store";
import FeatureMovie from '../components/FeatureMovie';

function App(){

	return (
		<Provider store={store}>
		<div className="container-fluid movie-app bg-dark">
			<div id="overlay">
					<Header />
			</div>
			<BrowserRouter>
				<Routes>
						<Route path="/" element={<HomeModule />} />
						<Route path="/test" element={<FeatureMovie/>} />
				</Routes>
			</BrowserRouter>

			</div>
		</Provider>
    );

}

export default App;
