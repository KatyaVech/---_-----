import React, { useState } from 'react';
import MusicList from '../components/MusicList';
import { searchMusic } from '../services/api';
import './style/SearchMusic.css';

function SearchMusic() {
  const [music, setMusic] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('title');
  const [showMusicList, setShowMusicList] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      try {
        const musicData = await searchMusic(searchQuery, searchBy);
        setMusic(musicData);
        setShowMusicList(true);
        setNoResults(musicData.length === 0);
      } catch (error) {
        setError(error.message);
        setShowMusicList(false);
        setNoResults(false);
      }
    } else {
      setError('Please enter a search query.');
      setShowMusicList(false);
      setNoResults(false);
    }
  };

  return (
    <div className="search-music-container">
      <h1 className="title">Search for Music</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
        <select
          className="search-options"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="genre">Genre</option>
        </select>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {noResults && <p className="no-results-message">No information found for the given query.</p>}
      {showMusicList && !noResults && <MusicList music={music} />}
    </div>
  );
}

export default SearchMusic;
