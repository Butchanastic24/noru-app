import { React } from "react";
import "../styles/searchBar.css";

function SearchBar() {
  return (
    <div className="searchBarComponent">
      <input type="text" placeholder="Trails" />
    </div>
  );
}

export default SearchBar;
