import { React } from "react";
import "../styles/searchBar.css";

function SearchBar() {
  return (
    <div className="searchBarComponent">
      <div id="searchBar">
        <input type="text" placeholder="Trails" />
        <button id="searchBtn">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
