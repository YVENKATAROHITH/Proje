import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Loginaduli = () => {
  
  const [password, setPassword] = useState('');
  const [id, setId] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/studentRoute/login-admin', {
        id,
        password,
      });

      const data = response.data;

      if (data.success) {
        // Use navigate to go to the dashboard page if authentication is successful
        navigate('/student-list');
        alert("records found in adminslist")
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
   
    <div className="card" style={{width: '25rem',padding:"50px",margin:"50px",backgroundColor:"aqua"}}>
  
  

<form>
     
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Admin ID</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={id}
        onChange={(e) => setId(e.target.value)}/>
        
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Link to="/Admin">SignUp or Create an Account as Admin</Link>
      
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </form>
      </div>
</center>
    
  );
};

export default Loginaduli;