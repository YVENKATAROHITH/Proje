import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../feedback.css'

const Feedback = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const fetchSubmittedData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/studentRoute/con');
      setSubmittedData(response.data);
    } catch (error) {
      console.error('Error fetching submitted data:', error);
    }
  };

  useEffect(() => {
    // Fetch submitted data on component mount
    fetchSubmittedData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Submissions</h1>
      </header>
      <main>
       
        <table>
          <thead >
            <tr>
              <th style={{paddingLeft:"80px",border:"black solid 1px"}}>Name</th>
              <th style={{paddingLeft:"80px",border:"black solid 1px"}}>Email</th>
              <th style={{paddingLeft:"100px",border:"black solid 1px"}}>Message</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data) => (
              <tr key={data._id}>
                <td style={{paddingLeft:"0px",border:"black solid 1px"}}>{data.name}</td>
                <td style={{paddingLeft:"80px",border:"black solid 1px"}}>{data.email}</td>
                <td style={{paddingLeft:"100px",border:"black solid 1px"}}>{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Feedback;
