import React, { useState } from "react";
import "../styles/login.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userBox, setUserBox] = useState("");
  const [passBox, setPassBox] = useState("");

  function loginUser(username, password) {
    if (username === "") {
      alert("Please enter your email");
    } else if (password === "") {
      alert("Must enter password");
    } else {
      axios
        .post("/login", { username, password })
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("username", res.data.username);
        })
        .catch((err) => alert(err.response.request.response));

      setUserBox("");
      setPassBox("");
    }
  }

  function registerUser(username, password) {
    if (username === "") {
      alert("Please enter your email");
    } else if (password === "") {
      alert("Must enter password");
    } else {
      axios.post("/register", { username, password }).then((response) => {
        console.log(response.data);
      });

      setUserBox("");
      setPassBox("");
    }
  }

  return (
    <div id="mainLoginDiv">
      <div id="loginBox">
        <div id="loginTitle">
          <h3>Login</h3>
          <p>If you're new here please sign up</p>
        </div>
        <div id="userInput">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => {
              setUsername(e.target.value);
              setUserBox(e.target.value);
            }}
            value={userBox}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              setPassBox(e.target.value);
            }}
            value={passBox}
          />
        </div>
        <div id="loginFooter">
          <hr id="divider" />
          <div id="loginBtns">
            <button
              onClick={() => {
                registerUser(username, password);
              }}
            >
              Register
            </button>
            <div id="loginButton">
              <button
                style={{ color: "white" }}
                onClick={() => {
                  loginUser(username, password);
                }}
              >
                Login
              </button>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
