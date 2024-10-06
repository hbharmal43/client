import React, { useState } from 'react';
import axios from 'axios';
import { useAuthInfo } from '@propelauth/react';

const Profile = () => {
  const { user } = useAuthInfo();
  const [formData, setFormData] = useState({
    name: '',
    mentalHealthStatus: '',
    steps: 0,
    caloriesBurned: 0
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/user/profile', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mentalHealthStatus"
          placeholder="Mental Health Status"
          value={formData.mentalHealthStatus}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="steps"
          placeholder="Steps"
          value={formData.steps}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="caloriesBurned"
          placeholder="Calories Burned"
          value={formData.caloriesBurned}
          onChange={handleInputChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
