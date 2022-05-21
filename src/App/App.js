import {React,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from "../redux/store";
import FeatureMovie from '../components/FeatureMovie';
import  Home  from '../pages/Home'

function App(){

	return (
		<Provider store={store}>
		<div className="container-fluid movie-app bg-dark">
			<div id="overlay">
					<Header />
			</div>
			<BrowserRouter>
				<Routes>
						<Route path="/"  element={<Home />} />
						<Route path="/test" element={<FeatureMovie />} />
						<Route path="/movies" element=  {<Home type="Movies" />} />
						<Route path="/series"   element={<Home type="Series" />} />
				</Routes>
			</BrowserRouter>

			</div>
		</Provider>
    );

}

export default App;
