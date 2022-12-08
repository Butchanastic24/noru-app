import { React } from "react";
import "../styles/trails.css";
import map from "../images/VVMap.png";
import MapTrails from "../components/MapTrails";
import FilterBar from "../components/FilterBar";

function Trails({ trailsInfo }) {
  return (
    <div id="trailsComponent">
      <div id="areaNav">
        <h3>Utah</h3>
        <div>Areas > Utah > View Sub Areas</div>
      </div>
      <div id="trailMapDiv">
        <FilterBar />
        <div>
          <img src={map} alt="Valley Vista Map" id="ggMap" />
        </div>
        <div id="trailNameList">
          {trailsInfo.map((trail) => (
            <MapTrails key={trail.trailID} props={trail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trails;
