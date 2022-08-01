import { useState, useContext } from 'react'
import CityList from './components/CityList'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'
import Favorites from './views/Favorites'
import Weather from './views/Weather'
import City from './components/City'
import CitySingle from './views/CitySingle'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthProvider'

export default function App() {
    const { login, logout, user } = useContext(AuthContext);

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/Favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/Weather">Weather</Link>
                        </li>
                    </ul>
                    <ul>
                        {user.loggedIn ? (
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        ) : (
                            <li>
                                <button onClick={login}>Login</button>
                            </li>
                        )}
                    </ul>
                </nav>

                <h2>Current User: {user.username}</h2>

                <Routes>
                    {/* <Route path="/" element={<Login />} /> */}
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Weather" element={<Weather />} />
                    <Route path="/Weather/:location" element={<Weather />} />
                </Routes>
            </Router>
        </>
    );
}
