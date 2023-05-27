import "./NavBar.scss";
import { Route, Routes, useNavigate } from "react-router-dom";


function NavBar() {
  const navigate = useNavigate();
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
            <button type="button" className="btn btn-secondary" onClick={() => {

navigate("/LogInPage", {
  state: {
    playPiano: 0,
  },
});
            }
            
              } style={{marginRight:"30px",width:"130px",border:"2px solid white",backgroundColor:"sienna"}}>LogIn</button>
            
            <button type="button" className="btn btn-secondary" onClick={() => {

navigate("/SignUpPage", {
  state: {
    playPiano: 0,
  },
});
            }
            
              } style={{width:"130px",border:"2px solid white",marginRight:"150px",backgroundColor:"sienna"}} >SignUp</button>
            </span>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;