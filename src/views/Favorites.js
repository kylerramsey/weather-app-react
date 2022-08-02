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

export default function Favorites() {
    const { login, logout, user } = useContext(AuthContext);

    return (
        <>
            <div className="app">
                <div className="container">
                    {user.loggedIn ? (
                        <button
                            onClick={logout}
                            id="submit-btn"
                            className="btn btn-info rounded-pill mt-3 mb-4 btn-lg"
                            type="submit"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={login}
                            id="submit-btn"
                            className="btn btn-info rounded-pill mt-3 mb-4 btn-lg"
                            type="submit"
                        >
                            Login
                        </button>
                    )}
                    <h4>Current User: {user.username}</h4>

                    <h1>Favorite Cities</h1>
                    <CityForm />
                    <CityList />
                </div>
            </div>
        </>
    );
}
