import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';

import './signup.css';



const SignUpPage = () => {
  const [password, setPassword] = useState('');
  const [errorMessagePass, setErrorMessagePass] = useState<string | null>(null);
  const [errorMessagePassConfirm, setErrorMessagePassConfirm] = useState<string | null>(null);
  const [errorMessageEmail, setErrorMessageEmail] = useState<string | null>(null);

  let valid = true;

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handlePasswordSet = (event: any) => {

  }

  const handleChanges = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (valid) {
      console.log(data)
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
          onChange={(e) => handleChanges(e)} /> <br></br>
        {errorMessagePass && <p className="error">{errorMessagePass}</p>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required
          onChange={(e) => handleChanges(e)} /><br></br>

        <Button type="submit" variant="primary">Sign Up</Button>
        <Button type="reset" variant='danger'>Reset</Button>
      </form>
    </div>
  );
};

export default SignUpPage;
