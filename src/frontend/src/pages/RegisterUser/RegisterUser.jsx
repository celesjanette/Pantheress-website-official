import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/api/authentication/register`, formData);
      setMessage('User registered successfully!');
      console.log('Response:', response.data);
    } catch (error) {
      setMessage('Error registering user.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;
