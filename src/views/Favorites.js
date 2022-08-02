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
                    <h2>Current User: {user.username}</h2>

                    <h1>Favorite Cities</h1>
                    <CityForm />
                    <CityList />
                </div>
            </div>
        </>
    );
}
