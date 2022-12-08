import { React, useState, useEffect } from "react";
import "../styles/home.css";
import RecTrails from "../components/RecTrails";
import SearchBar from "../components/SearchBar";

function Home({ trailsInfo }) {
  const [trailArray, setTrailArray] = useState([]);

  useEffect(() => {
    setTrailArray(trailsInfo);
    console.log(trailArray);
  }, [trailArray, trailsInfo]);

  return (
    <div className="homeComponent">
      <div id="banner">
        <div id="searchBar">
          <SearchBar />
          <button id="searchBtn">Search</button>
        </div>
      </div>
      <div id="trailList">
        <h2 id="recTrailTitle">Top Rated Trails</h2>
        <div id="trailCardList">
          {trailArray.map((trail) => (
            <RecTrails key={trail.trail_id} props={trail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
