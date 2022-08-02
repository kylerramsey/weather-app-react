// import CityList from '../components/CityList'
// import { useContext } from 'react'
// import CityForm from '../components/CityForm'
// import { DataContext } from '../contexts/DataProvider'

// export default function Favorites() {
//     return (
//         <>
//         <div className='app'>
//             <div className='container'>
//                 <h1>Favorite Cities</h1>
//                 <CityForm />
//                 <CityList />
//             </div>
//         </div>
//         </>
//     )
// }

import { useContext } from "react";
import CityList from "../components/CityList";
import CityForm from "../components/CityForm";
import { DataContext } from "../contexts/DataProvider";
import { Login } from "./Login";
import { AuthProvider } from "../contexts/AuthProvider";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
    const { login, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const navigateWeather = () => {
        // navigate to
        navigate("/weather");
    };

    return (
        <>
            <div className="app">
                <div className="container">
                    <div class="d-flex justify-content-between">
                        {user.loggedIn ? (
                            <button
                                onClick={logout}
                                id="login-btn"
                                className="btn btn-dark rounded-pill d-inline-flex mt-3 mb-4"
                                type="submit"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={login}
                                id="login-btn"
                                className="btn btn-dark rounded-pill d-inline-flex mt-3 mb-4"
                                type="submit"
                            >
                                Login
                            </button>
                        )}
                        <button
                            onClick={navigateWeather}
                            id="weather-btn"
                            className="btn btn-dark rounded-pill d-inline-flex mt-3 mb-4"
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                    <h4>Current User: {user.username}</h4>

                    <h1>Favorite Cities</h1>
                    <CityForm />
                    <CityList />
                </div>
            </div>
        </>
    );
}
