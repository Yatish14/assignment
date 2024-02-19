import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [panNumber, setPanNumber] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('File:', file);
    console.log('Username:', username);
    console.log('PAN Number:', panNumber);
  };

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="file">File:</label>
        <input type="file" id="file" name="file" onChange={handleFileChange} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="panNumber">PAN Number:</label>
        <input type="text" id="panNumber" name="panNumber" value={panNumber} onChange={handlePanNumberChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default LoginForm;