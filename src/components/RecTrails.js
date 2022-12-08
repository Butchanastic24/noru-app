import React, { useEffect, useState } from "react";
import "../styles/home.css";
import StarRating from "./StarRating";
import { AiOutlineHeart } from "react-icons/ai";
import blueSymbol from "../images/blueDiff.png";
import greenSymbol from "../images/greenDif.png";
import blackSymbol from "../images/blackDif.png";
import dbBlackSymbol from "../images/dbBlackDif.png";
import axios from "axios";

//I know this is janky but it kept telling me GET http://localhost:3000/images/{imageURL} 404 (Not Found) and I was about to lose my mind
import cowleysCurse from "../images/cowleysCurse.png";
import cowleysCure from "../images/cowleysCure.png";
import gamble from "../images/gamble.png";
import rose from "../images/rose.png";

function RecTrails({ props }) {
  const [trailImage, setTrailImage] = useState("");

  function getTrailImage(name) {
    switch (name) {
      case "Cowley's Curse":
        setTrailImage(cowleysCurse);
        break;
      case "Cowley's Cure":
        setTrailImage(cowleysCure);
        break;
      case "Gamble":
        setTrailImage(gamble);
        break;
      case "Rose":
        setTrailImage(rose);
        break;
      default:
        setTrailImage(cowleysCurse);
    }
  }

  useEffect(() => {
    getTrailImage(props.name);
  }, [props.name]);

  async function favoriteTrail() {
    let username = sessionStorage.getItem("username");
    let id = props.trail_id;
    if (username !== "") {
      await axios
        .post("/savetrail", { username, id })
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => alert(err.response.request.response));
    } else {
      alert("Please Login to save trails");
    }
  }

  let trailDifficulty = props.difficulty.toUpperCase();
  let difficultyBackground;
  let difficultyName;
  let difficultyShape;

  switch (trailDifficulty) {
    case "BLUE":
      difficultyBackground = "#0066cc";
      difficultyName = "Blue";
      difficultyShape = blueSymbol;
      break;
    case "GREEN":
      difficultyBackground = "#44b414";
      difficultyName = "Green";
      difficultyShape = greenSymbol;
      break;
    case "BLUE-BLACK":
      difficultyBackground = "#0066cc";
      difficultyName = "Blue-Black";
      difficultyShape = blueSymbol;
      break;
    case "BLACK":
      difficultyBackground = "#000000";
      difficultyName = "Black";
      difficultyShape = blackSymbol;
      break;
    case "DOUBLE-BLACK":
      difficultyBackground = "#000000";
      difficultyName = "Double Black";
      difficultyShape = dbBlackSymbol;
      break;
    default:
      difficultyBackground = "#0066cc";
      difficultyName = "Blue";
      difficultyShape = blueSymbol;
      break;
  }

  return (
    <div id="trailCard">
      <div
        id="trailPreview"
        style={{
          backgroundImage: `url(${trailImage})`,
        }}
      >
        <div id="heartTrail" onClick={favoriteTrail}>
          <AiOutlineHeart id="heartSymbol" />
        </div>
        <div
          id="trailDifficulty"
          style={{ backgroundColor: `${difficultyBackground}` }}
        >
          <img
            id="trailDifficultyShape"
            src={difficultyShape}
            alt="Trail Difficulty"
          />
          <div id="trailDifficultyName">{difficultyName}</div>
        </div>
      </div>
      <div id="trailCardInfo">
        <h4>{props.name}</h4>
        <div id="trailCardDetails">
          {props.distance} mi * {props.climb}' up * {props.descent}' down
        </div>
        <div id="ratAndLoc">
          <StarRating />
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default RecTrails;
