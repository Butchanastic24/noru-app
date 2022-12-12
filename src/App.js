import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Trails from "./routes/Trails";
import MyRides from "./routes/MyRides";
import Conditions from "./routes/Conditions";
import Login from "./routes/Login";
import Footer from "./components/Footer";
import "./App.css";
import logo from "./images/logo.png";
import axios from "axios";

let trailsInfo = [];

async function getData() {
  await axios
    .get("/trails")
    .then((res) => {
      res.data.trailsInfo.forEach((trail) => {
        trailsInfo.push(trail);
      });
    })
    .catch((err) => alert(err.response.request.response));
}
getData();

function App() {
  const [infoArray, setInfoArray] = useState(trailsInfo);

  const routesClasses = "textLinks grow";
  return (
    <div id="app">
      <nav className="navBar">
        <Link className="navBar" to="/">
          <img id="logo" src={logo} alt="Logo" />
        </Link>
        <div id="links">
          <Link className={routesClasses} to="trails">
            Trails
          </Link>
          <Link className={routesClasses} to="conditions">
            Conditions
          </Link>
          <Link className={routesClasses} to="myRides">
            My Rides
          </Link>
        </div>
        <div id="loginDiv">
          <Link id="loginBtn" to="login">
            Login
          </Link>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home trailsInfo={infoArray} />} />
          <Route path="trails" element={<Trails trailsInfo={infoArray} />} />
          <Route path="conditions" element={<Conditions />} />
          <Route path="myRides" element={<MyRides trailsInfo={infoArray} />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
