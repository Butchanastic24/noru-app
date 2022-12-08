import { React } from "react";
import "../styles/trails.css";
import StarRating from "./StarRating";
import blueSymbol from "../images/blueDiff.png";
import greenSymbol from "../images/greenDif.png";
import blackSymbol from "../images/blackDif.png";
import dbBlackSymbol from "../images/dbBlackDif.png";

function MapTrails({ props }) {
  let trailDifficulty = props.difficulty.toUpperCase();
  let difficultyShape;

  switch (trailDifficulty) {
    case "BLUE":
      difficultyShape = blueSymbol;
      break;
    case "GREEN":
      difficultyShape = greenSymbol;
      break;
    case "BLUE-BLACK":
      difficultyShape = blueSymbol;
      break;
    case "BLACK":
      difficultyShape = blackSymbol;
      break;
    case "DOUBLE-BLACK":
      difficultyShape = dbBlackSymbol;
      break;
    default:
      difficultyShape = blueSymbol;
      break;
  }

  return (
    <div id="mapTrailNames">
      <div id="bannerTitle">
        <div>{props.name}</div>
        <img id="mapTrailSymbol" src={difficultyShape} alt="Difficult Rating" />
      </div>
      <div id="trailDistances">
        <div>
          {props.distance} mi * {props.climb}' up * {props.descent}' down
        </div>
      </div>
      <div id="ratAndLoc">
        <StarRating />
        <div>{props.location}</div>
      </div>
    </div>
  );
}

export default MapTrails;
