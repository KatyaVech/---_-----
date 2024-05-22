import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicList from '../components/MusicList';
import './style/Home.css'; 

function Home() {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/music');
        setMusic(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="center-text">The most popular song of this month</h1>
      {error ? <p>Error: {error}</p> : <MusicList music={music} />}
    </div>
  );
}

export default Home;
