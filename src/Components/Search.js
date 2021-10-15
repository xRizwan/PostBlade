import React, { useState } from 'react';

export default function Search({ handleTitleSearch, handleUserNameSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleTitleSubmit = (e) => {
    handleTitleSearch(query);
    setQuery("");
  }

  const handleUserNameSubmit = (e) => {
    handleUserNameSearch(query);
    setQuery("");
  }

  return (
    <div className="search-container">
      <input className="query" type="text" onChange={handleChange} placeholder="Search" value={query} />
      <button className="btn displaced" onClick={handleTitleSubmit}>Search By Title</button>
      <button className="btn displaced" onClick={handleUserNameSubmit}>Search By UserName</button>
    </div>
  )
}