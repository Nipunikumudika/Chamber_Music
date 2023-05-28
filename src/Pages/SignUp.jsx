import "./LogIn.css";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpg";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Welcome() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCreateUser = async (event) => {
    const postURL = "http://localhost:5000/users";
    event.preventDefault();
    try {
      const submitData = {
        username: username,
        password: password,
      };

      const response = await axios.post(postURL, submitData);
      console.log(response);
      alert("user added successfully");
      setUsername("");
      setPassword("");
      let playPiano = location.state.playPiano;
      if (playPiano == "1") {
        navigate("/PianoPage");
      } else {
        navigate("/Home", {
          state: {
            username: response.data.username,
            userid: response.data._id,
          },
        });
      }
    } catch (error) {
      alert("Try using different username");
    }
  };

  return (
    <div>
      <center>
        <div className="login">
          <h1 className="login-text">SignUp</h1>

          <form onSubmit={handleCreateUser} style={{ margin: "auto" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 25, fontWeight: "bold" }}>Username</div>
              <span style={{ display: "inline-block", width: 50 }}></span>
              <input
                style={{ fontSize: 15 }}
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(inputUsername) => {
                  setUsername(inputUsername.target.value);
                }}
              />
            </div>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 25, fontWeight: "bold" }}>Password</div>
              <span style={{ display: "inline-block", width: 57 }}></span>
              <input
                style={{ fontSize: 15 }}
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(inputPassword) => {
                  setPassword(inputPassword.target.value);
                }}
              />
            </div>

            <br />
            <br />

            <button
              className="loginbtn"
              type="submit"
              style={{ fontSize: 20, fontWeight: "bold" }}
            >
              SignUp
            </button>
          </form>
          <br />
        </div>
      </center>

      <div className="wrapper">
        <div style={{ backgroundImage: `url(${img1})` }}></div>
        <div style={{ backgroundImage: `url(${img2})` }}></div>
        <div style={{ backgroundImage: `url(${img3})` }}></div>
        <div style={{ backgroundImage: `url(${img4})` }}></div>
        <div style={{ backgroundImage: `url(${img5})` }}></div>
      </div>
    </div>
  );
}

export default Welcome;
