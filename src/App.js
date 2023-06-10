import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";

import {BrowserRouter as Router,
Routes,Route, Navigate
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext)
  return (
  <Router>
    <Routes>
      <Route path = "/" element = {user ?<Home/> : <Register/> }/>
      <Route path = "/login" element = {user ? <Navigate to="/"/> : <Login/>}/>
      <Route path = "/register" element = {user ? <Navigate to="/"/> : <Register/>}/>
      <Route path = "/profile/:username" element = {<Profile/>}/>
    </Routes>
  </Router>
  )
}

export default App;
