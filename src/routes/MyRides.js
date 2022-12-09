import { React, useEffect, useState } from "react";
import "../styles/myRides.css";
import MapTrails from "../components/MapTrails";
import axios from "axios";

let trailsInfo = [];
let username = sessionStorage.getItem("username");

async function getData() {
  await axios
    .post("/getsavedtrails", { username })
    .then((res) => {
      res.data.trailsInfo.forEach((trail) => {
        trailsInfo.push(trail);
      });
    })
    .catch((err) => alert(err.response.request.res));
}

if (username !== "") {
  getData();
}

function MyRides() {
  const [showRides, setShowRides] = useState(false);
  const [trailArray, setTrailArray] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setShowRides(true);
    } else {
      console.log("cannot get data");
    }
    setTrailArray(trailsInfo);
    console.log(trailArray);
  }, [showRides, trailArray]);

  if (showRides) {
    return (
      <div id="savedTrails">
        <h2>Your Saved Rides</h2>
        <div id="savedTrailList">
          {trailsInfo.map((trail) => (
            <MapTrails key={trail.trail_id} props={trail} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Please Login to view saved trails</div>;
  }
}

export default MyRides;
