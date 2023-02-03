import React, { useState } from "react";
import "./SearchBar.css";
import icon from "./icon.png";


function SearchBar({onSubmit}) {
  const [term, setTerm] = useState("");

  const handleformSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);

  };

  const handleInputChange = (event) => {
    setTerm(event.target.value);
  };

    return ( 
      <div className="search-bar">
          <h1>Doodle</h1>
        <form onSubmit={handleformSubmit}>
         
          <img className="icon" src={icon} alt="icon" />

          <span class="input">
          <input value={term} placeholder="Search for images" onChange={handleInputChange} /> 
         
          </span>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
  
  export default SearchBar;