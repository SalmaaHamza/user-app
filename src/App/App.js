import { React, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from '../components/Header';
import { Provider } from 'react-redux';
import store from "../redux/store";
import FeatureMovie from '../components/FeatureMovie';
import Home from '../pages/Home'
import MovieDetails from '../components/MovieDetails';
import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';


function App() {

	return (
		<Provider store={store}>
			{/*<div className="container-fluid movie-app bg-dark">
 			<div id="overlay">
					<Header />
			</div> */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Welcome/>} />
					<Route path='/signin' element={<SignIn/>} />
					<Route path='/signup' element={<SignUp/>} />
					<Route path="/Home"  element={<Home />} />
					<Route path="/test" element={<FeatureMovie />} />
					<Route path="/movies" element=  {<Home type="Movies" />} />
					<Route path="/series" element={<Home type="Series" />} />
					<Route path="/movie/:id" element={<MovieDetails/>} /> 
				</Routes>
			</BrowserRouter>

			{/* </div> */}
		</Provider>
	);

}

export default App;
