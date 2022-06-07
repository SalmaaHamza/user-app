import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import store from "../redux/store";
import  Home  from '../pages/Home'
function App(){

	return (
		<Provider store={store}>
		<div >
			<div id="overlay">
					{/* <Header /> */}
			</div>
			<BrowserRouter>
				<Routes>
						<Route path="/"  element={<Home type=""/>} />
						<Route path="/movies" element=  {<Home type="Movies" />} />
						<Route path="/tvshow" element={<Home type="Tv Shows" />} />
				</Routes>
			</BrowserRouter>

			</div>
		</Provider>
    );

}

export default App;
