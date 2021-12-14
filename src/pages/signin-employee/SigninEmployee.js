import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
//CSS
import './signinEmployee.css';
//Components
import PasswordInput from '../../components/Login-Signup/input-fields/PasswordInput';
import BlankInput from '../../components/Login-Signup/input-fields/BlankInput';
//MUI
import { Button, TextField, Box } from '@mui/material/';
//Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import db from '../../lib/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function SigninEmployee() {
	//Navigation
	const navigate = useNavigate();

	//Firebase state
	const [
		error,
		setError
	] = useState('');
	const [
		companies,
		setCompanies
	] = useState([]);

	/* Values Epost & Password & Name */
	const [
		code,
		setCode
	] = useState();
	const [
		name,
		setName
	] = useState();
	const [
		dataEpost,
		setDataEpost
	] = useState();
	const [
		dataPassword,
		setDataPassword
	] = useState();
	const [
		dataPassword1,
		setDataPassword1
	] = useState();

	/* State for input validation */
	const [
		codeError,
		setCodeError
	] = useState(false);
	const [
		nameError,
		setNameError
	] = useState(false);
	const [
		epostError,
		setEpostError
	] = useState(false);
	const [
		passwordError,
		setPasswordError
	] = useState(false);
	const [
		passwordError1,
		setPasswordError1
	] = useState(false);

	/* State for helperText */
	const [
		codeHelperText,
		setCodeHelperText
	] = useState(' ');
	const [
		nameHelperText,
		setNameHelperText
	] = useState(' ');
	const [
		epostHelperText,
		setEpostHelperText
	] = useState(' ');
	const [
		passwordHelperText,
		setPasswordHelperText
	] = useState(' ');
	const [
		passwordHelperText1,
		setPasswordHelperText1
	] = useState(' ');

	/* Henter data fra child components BlankInput & PasswordInput */
	function childToParentEpost(e) {
		const newData = e.target.value;
		setDataEpost(newData);
	}
	function childToParentPassword(e) {
		const newData = e.target.value;
		setDataPassword(newData);
	}
	function childToParentPassword1(e) {
		const newData = e.target.value;
		setDataPassword1(newData);
	}

	function childToParentName(e) {
		const newData = e.target.value;
		setName(newData);
	}

	/* Input validation function */
	function validateInputs() {
		if (code) {
			setCodeError(false);
			setCodeHelperText(' ');
		}
		else {
			setCodeError(true);
			setCodeHelperText('Enter org code');
		}
		if (name) {
			setNameError(false);
			setNameHelperText(' ');
		}
		else {
			setNameError(true);
			setNameHelperText('Please enter your name');
		}

		if (typeof dataEpost === 'undefined' || !dataEpost.includes('@' && '.')) {
			setEpostError(true);
			setEpostHelperText('Please use valid e-mail');
		}
		else if (dataEpost.includes('@' && '.') && dataEpost.length >= 8) {
			setEpostError(false);
			setEpostHelperText(' ');
		}

		if (typeof dataPassword === 'undefined' || dataPassword.length < 6) {
			setPasswordError(true);
			setPasswordHelperText('6 characters or more');
		}
		else {
			setPasswordError(false);
			setPasswordHelperText(' ');
		}

		if (typeof dataPassword1 === 'undefined' || dataPassword1 !== dataPassword) {
			setPasswordError1(true);
			setPasswordHelperText1('Passwords dont match');
		}
		else {
			setPasswordError1(false);
			setPasswordHelperText1(' ');
		}
	}
	//Fetching companies
	const fetchCompanies = async () => {
		const response = db.collection('companies');
		const data = await response.get();
		data.forEach((element) => {
			setCompanies((prevState) => [
				...prevState,
				element.data()
			]);
		});
	};

	/* HandleLogin function */

	const handleLogin = async () => {
		const auth = getAuth();
		const temp = companies.filter((element) => element.firmakode === code);
		if (temp.length == 1) {
			await createUserWithEmailAndPassword(auth, dataEpost, dataPassword, code)
				.then((userCredential) => {
					const user = userCredential.user;

					alert(user.email + ' created');
					const docRef = addDoc(collection(db, 'users'), {
						navn      : `${name}`,
						epost     : `${dataEpost}`,
						firmakode : `${code}`,
						admin     : `${false}`,
						aktiv     : `${true}`
					});
					setCompanies([]);
					navigate('/nonprofits');
				})
				.catch((error) => {
					setError(error.message);
					alert(error);
				});
		}
		else {
			setError('Finner ikke registrert firma med denne firmakoden. Kontakt ansvarlig i firmaet ditt');
			alert('Finner ikke registrert firma med denne firmakoden. Kontakt ansvarlig i firmaet ditt');
		}
	};

	/* HandleOrgCode function */
	function handleOrgCode(e) {
		const value = e.target.value;
		setCode(value);
	}
	useEffect(() => {
		fetchCompanies();
	}, []);

	return (
		<div className="container-login">
			<div className="container-left">
				<h1 className="header-left">40 curated non-profits, to give you a competetive edge</h1>
			</div>
			<div className="container-right">
				<img className="logo-login" src="./img/MI-logo-black1.png" alt="logo-pic-login" />
				<div className="right-content">
					<div className="right-content-header">
						<h1>Sign up to Meliora Impact</h1>
						<p className="header-p-inline">Already got a account?</p>
						<Link to="/"> Log in</Link>
					</div>

					<div className="right-content-signin">
						<h3>Enter Organization code</h3>
						<div className="org-number">
							<TextField
								className="org-number-item"
								variant="standard"
								error={codeError}
								helperText={codeHelperText}
								onChange={handleOrgCode}
							/>
							<TextField className="org-number-item" variant="standard" error={codeError} />
							<TextField className="org-number-item" variant="standard" error={codeError} />
							<TextField className="org-number-item" variant="standard" error={codeError} />
						</div>

						<BlankInput
							childToParent={childToParentEpost}
							label="Navn"
							error={nameError}
							helperText={nameHelperText}
							childToParent={childToParentName}
						/>
						<BlankInput
							childToParent={childToParentEpost}
							label="E-mail"
							error={epostError}
							helperText={epostHelperText}
						/>
						<PasswordInput
							label="Create password"
							childToParent={childToParentPassword}
							error={passwordError}
							helperText={passwordHelperText}
						/>
						<PasswordInput
							label="Confirm password"
							childToParent={childToParentPassword1}
							error={passwordError1}
							helperText={passwordHelperText1}
						/>
					</div>
					<div className="right-content-button">
						<Button size="large" color="secondary" variant="contained" onClick={handleLogin}>
							Create account
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
