import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { keyword } = useParams();
  const [searchQuery, setSearchQuery] = useState(keyword);
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search query input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle the search button click
  const handleSearchButtonClick = () => {
    // You can implement the search logic here, e.g., make an API request
    // For this example, we'll just set the search results to a predefined array
    const results = ["Result 1", "Result 2", "Result 3"]; // Replace with actual search results
    setSearchResults(results);
  };

  return (
    <div className="search-page">
      <h1>Search Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </div>
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
