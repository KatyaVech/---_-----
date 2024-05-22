import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style/MusicList.css';

function MusicList({ music }) {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    let timer;
    if (downloaded) {
      timer = setTimeout(() => {
        setDownloaded(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [downloaded]);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div className="music-list">
      {music.map((song) => (
        <div key={song.id} className="music-card">
          <img className="music-cover" src={song.image} alt={song.title} />
          <div className="music-info">
            <h2>{song.title}</h2>
            <p>
              <strong>Artist:</strong> {song.artist}
            </p>
            <p>
              <strong>Genre:</strong> {song.genre}
            </p>
            <p>
              <strong>Release Year:</strong> {song.releaseYear}
            </p>
          </div>
          <button className="download-button" onClick={handleDownload} download>
            <img src={process.env.PUBLIC_URL + './images/download.png'} alt="Download" />
          </button>
        </div>
      ))}
      {downloaded && (
        <div className="downloaded-popup">
          <p>Music downloaded</p>
        </div>
      )}
    </div>
  );
}

MusicList.propTypes = {
  music: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MusicList;
