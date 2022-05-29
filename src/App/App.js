import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header';
import Home2 from '../components/home/Home';
import { Provider } from 'react-redux';
import store from "../redux/store";
import FeatureMovie from '../components/FeatureMovie';
import  Home  from '../pages/Home'
import MovieDetails from '../components/MovieDetails';
function App(){

	return (
		<Provider store={store}>
		<div >
			<div id="overlay">
					{/* <Header /> */}
			</div>
			<BrowserRouter>
				<Routes>
						<Route path="/"  element={<Home />} />
						<Route path="/test" element={<Home2 />} />
						<Route path="/movies" element=  {<Home type="Movies" />} />
						<Route path="/series" element={<Home type="Series" />} />
						<Route path="/movie/:id" element={<MovieDetails />} />
						<Route path="/movie/:id" element={<MovieDetails/>} />

				</Routes>
			</BrowserRouter>

			</div>
		</Provider>
    );

}

export default App;
