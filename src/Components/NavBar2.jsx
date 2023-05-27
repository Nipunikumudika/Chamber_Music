import "./NavBar.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import personicon from "../Images/personicon.png";
function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"black"}}>
        <div className="container-fluid">
          <p className="brand"><stroke>Chamber Music - Online Piano Master</stroke> </p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
            <span>
              <div style={{display:"flex"}}>
              <p className="username"><img className="personicon" src={personicon}></img>&nbsp;&nbsp;{location.state.username}</p>
            <button type="button" onClick={() => navigate("/")} className="btn btn-secondary" style={{marginRight:"30px",width:"130px",border:"2px solid white",backgroundColor:"sienna"}}>Sign Out</button>
              </div>
             
            </span>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;