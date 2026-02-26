import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Enter city name:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={handleInputChange}
        placeholder="e.g. London"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;