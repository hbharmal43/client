import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthInfo } from '@propelauth/react';

const Home = () => {
  const { user } = useAuthInfo();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      {profileData ? (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Mental Health Status: {profileData.mentalHealthStatus}</p>
          <p>Steps: {profileData.fitnessData.steps}</p>
          <p>Calories Burned: {profileData.fitnessData.caloriesBurned}</p>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}
    </div>
  );
};

export default Home;
