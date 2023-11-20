import React, { useState } from 'react';
import axios from 'axios';
import '../signupst.css';
import { useNavigate } from 'react-router-dom';


export default function SignupAdmin() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const hannav = ()=>{
    nav("/loginadli")
  }
  const hafeed=()=>{
    nav("/feedback")
  }

  const handleClick = () => {
    // Create an object with the data
    const data = {
      id: id,
      email: email,
      password: password,
    };

    // Use Axios to send a POST request to your backend
    axios.post('http://localhost:4000/studentRoute/Admin', data)
      .then(response => {
        console.log(response.data);  // Log the response from the backend
        if (response.status === 200) {
          alert("Record added successfully");
          // Clear the input fields after successful submission
          setId('');
          setEmail('');
          setPassword('');
        } else {
          Promise.reject();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='signup'>
<ul className="nav justify-content-end">
<li className="nav-item">
<button type="button" onClick={hannav} class="btn btn-danger">Admin List</button>
</li>

</ul>
<ul className="nav justify-content-end">
<li className="nav-item">
<button type="button" onClick={hafeed} class="btn btn-danger">Feedback</button>
</li>

</ul>

<center>

    
    <div className="card" style={{width: '30rem'}}>
    
    <div className="card-body">
    <form>
     
     <div className="mb-3">
       <label htmlFor="exampleInputEmail1" className="form-label">Admin ID</label>
       <input onChange={(event) => setId(event.target.value)} className="form-control my-3" placeholder="Enter your Employee id" />
    
     
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
       <input onChange={(event) => setEmail(event.target.value)} className="form-control my-3" placeholder="Enter your email" />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
       <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control my-3" placeholder="Enter your Password" />
     </div>
     
     <button onClick={handleClick} className="btn btn-primary" type="button">SignUp</button>
   </form>
    </div>
  </div>
  </center>
</div>
   
  );
}

