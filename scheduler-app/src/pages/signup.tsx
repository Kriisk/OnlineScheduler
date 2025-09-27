import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';

import './signup.css';



const SignUpPage = () => {
  const [errorMessagePass, setErrorMessagePass] = useState<string | null>(null);
  const [errorMessagePassConfirm, setErrorMessagePassConfirm] = useState<string | null>(null);
  const [errorMessageEmail, setErrorMessageEmail] = useState<string | null>(null);

  let valid = false; //set to false after testing

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChanges = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (valid) {
      console.log(data)
    }
  }

  const handlePassword = (e: any) => {
    setErrorMessagePass(null);
    const pwd = e.target.value;
    setData({ ...data, [e.target.name]: pwd });
  }

  const handlePasswordError = (event: any) => {
    let item = event.target.value;
    if (item === "") {
      setErrorMessagePass("Please enter a password");
      valid = false;
    }
    if (validator.isStrongPassword(item, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 0
    }) === false && item.length > 0) {
      setErrorMessagePass("Password not strong enough, must include: 8 characters, 1 uppercase, 1 number.");
      valid = false;
    }
    if (validator.isStrongPassword(item, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 0
    }) && item.length > 0) {
      setErrorMessagePass(null);
      valid = true;
    }
  }

  const handlePassConfirm = (e: any) => {
    setErrorMessagePassConfirm(null);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handlePassConfirmError = (e: any) => {
    if (data.password !== e.target.value) {
      setErrorMessagePassConfirm("Passwords do not match");
      valid = false;
    }
    if (data.password === e.target.value) {
      setErrorMessagePassConfirm(null);
      valid = true;
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder='John' required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder='Smith' required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder='JohnSmith@example.com' required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required
          onChange={(e) => handlePassword(e)}
          onBlur={handlePasswordError} /> <br></br>
        {errorMessagePass && (<Alert variant='danger'>{errorMessagePass}</Alert>)}


        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required
          onChange={(e) => handlePassConfirm(e)}
          onBlur={(e) => handlePassConfirmError(e)} /><br></br>
        {errorMessagePassConfirm && (<Alert variant='danger'>{errorMessagePassConfirm}</Alert>)}

        <Button type="submit" variant="primary">Sign Up</Button>
        <Button type="reset" variant='danger'>Reset</Button>
      </form>
    </div>
  );
};

export default SignUpPage;
