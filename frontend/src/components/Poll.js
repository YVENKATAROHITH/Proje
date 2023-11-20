// Poll.js

import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Poll = () => {
  const navigate = useNavigate();
  const [hasVoted, setHasVoted] = useState(false);

  const hangleLogout=()=>{
    navigate('/login')
   }
   
  
  const tdpimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57mvgkILtDe8znmdpv19L6wJQ5vOGPeEy-g&usqp=CAU"
  const janaimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp_2RMy0dilKUHKdsB_BVC-ren8Ynf-RGQQ&usqp=CAU"
  const ysrimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce6lH3G45yX-rT0zEPk2Lz3hPbDjEYyAsbg&usqp=CAU"
  const [selectedOption, setSelectedOption] = useState('');

  const handleVote = async () => {
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }

    try {
      if (hasVoted) {
        alert('You have already voted!');
      } else {
        await axios.post('http://localhost:4000/studentRoute/vote', { option: selectedOption });

        // Update the local state to indicate that the user has voted
        setHasVoted(true);

        alert('Vote submitted!');
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  // Fetch the user's vote status when the component mounts
  useEffect(() => {
    const checkVoteStatus = async () => {
      try {
        const response = await axios.get('http://localhost:4000/studentRoute/checkVoteStatus');
        setHasVoted(response.data.hasVoted);
      } catch (error) {
        console.error('Error checking vote status:', error);
      }
    };

    checkVoteStatus();
  }, []);

  return (
    
    <div>
       <ul className="nav justify-content-end">
        <li className="nav-item">
        <button type="button" onClick={hangleLogout} class="btn btn-danger">Log Out</button>
        </li>
       
      </ul>
      <h1>WELCOME TO ONLINE VOTING PORTAL</h1>
      <div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <div className="card" style={{width: '18rem'}}>
        <img src={ysrimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">YSRCP</h5>
        
          <button type="button" class="btn btn-success" onClick={() => setSelectedOption('YSRCP')}>Vote</button>
        </div>
      </div>
    </div>
    <div class="col">
    
    <div className="card" style={{width: '18rem'}}>
        <img src={tdpimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">TDP</h5>
        
          <button type="button" class="btn btn-success" onClick={() => setSelectedOption('TDP')}>Vote</button>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card" style={{width: '18rem'}}>
        <img src={janaimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JANASENA</h5>
        
          <button type="button" class="btn btn-success" onClick={() => setSelectedOption('JANASENA')}>Vote</button>
        </div>
      </div>
     
      </div>
    </div>
  </div>
</div>
     
      
      <br />
      <center>
      <button className="btn btn-primary" onClick={handleVote} disabled={hasVoted}>
          {hasVoted ? 'Already Voted' : 'Submit your Vote'}  </button></center>
    </div>
  );
};

export default Poll;
