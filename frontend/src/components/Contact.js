import React, { useState } from 'react';
import '../contact.css';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/studentRoute/contact', formData);
      console.log(response.data);

      // Display an alert on successful form submission
      alert('Request submitted');

      // Clear the form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Optionally, you can force a refresh of the page
      // window.location.reload();

    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Us</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
