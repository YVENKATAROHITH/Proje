import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Loginp = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/studentRoute/login', {
        identifier,  // Send either name or email based on user input
        password,
      });

      const data = response.data;

      if (data.success) {
        // Use navigate to go to the dashboard page if authentication is successful
        navigate('/inside');
      } else {
        // Display an error message or handle authentication failure
        alert('Authentication failed:', data.message);
      }
    } catch (error) {
      alert('Error during login:', error);
    }
  };

  return (
    <center>
      <div className="card" style={{ width: '25rem', padding: '50px', margin: '50px', backgroundColor: 'aqua' }}>
        <form>
          <div className="mb-3">
            <label htmlFor="identifier" className="form-label">
              Username or Email
            </label>
            <input
              type="text"
              className="form-control"
              id="identifier"
              aria-describedby="emailHelp"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/create-student">SignUp or Create an Account </Link>
          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </center>
  );
};

export default Loginp;
