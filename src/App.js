import { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./views/Weather";
import Login from "./views/Login";
import Favorites from "./views/Favorites";
// import firebase from './firebase'
// import { AuthContext } from './contexts/AuthProvider'
export default function App() {
    //   const { login, logout, user } = useContext(AuthContext)

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        {/* <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li> */}
                        <li>
                            <Link to="/Weather">Weather</Link>
                        </li>
                    </ul>
                    {/* <ul>
            {
              (user.loggedIn) ?
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
                :
                <li>
                  <button onClick={login}>Login</button>
                </li>
            }
          </ul> */}
                </nav>
                {/* <h2>Current User: {user.username}</h2> */}
                <Routes>
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Weather" element={<Weather />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}
