//Componentes
import SearchNonProfits from './components/search/SearchNonProfits';
import Login from './pages/login/Login';
import SigninEmployee from './pages/signin-employee/SigninEmployee';
//Global CSS
import './App.css';
//MUI
import { createTheme, ThemeProvider } from '@mui/material/styles';
//React
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
//Firebase
import db from './lib/firebase';
//Signup
import SignupLogic from './pages/SignupLogic';

/* Changing default value for secondary color */
const mainColor = createTheme({
	palette : {
		secondary : {
			main : '#5C7B89'
		}
	}
});

function App() {
	//Pulling non-profits from cloud database and storing it in state that gets passed
	//to SearchNonProfits-page
	const fetchOrgs = async () => {
		const response = db.collection('nonprofits');
		const data = await response.get();
		data.forEach((element) => {
			setOrgs((prevValue) => [
				...prevValue,
				element.data()
			]);
		});
	};
	const [
		orgs,
		setOrgs
	] = useState([]);

	useEffect(() => {
		fetchOrgs();
	}, []);

	return (
		<ThemeProvider theme={mainColor}>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/nonprofits" element={<SearchNonProfits orgs={orgs} />} />
					<Route path="/signin-employee" element={<SigninEmployee />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
