import LogInPage from "./Pages/LogIn"
import HomePage from "./Pages/Home"
import PianoPage from "./Pages/Piano"
import SignUpPage from "./Pages/SignUp"
import Home from "./Pages/HomeLogged"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="LogInPage" element={<LogInPage />} />
      <Route exact path="PianoPage" element={<PianoPage />} />
      <Route exact path="SignUpPage" element={<SignUpPage />} />
      <Route exact path="Home" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
