import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './signup.css';



const SignUpPage = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required
          onChange={(e) => handleChanges(e)} /><br></br>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required
          onChange={(e) => handleChanges(e)} /><br></br>

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
