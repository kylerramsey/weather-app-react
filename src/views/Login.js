import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
    const { login, logout, user } = useContext(AuthContext);

    return (
        <>
            <div className="app">
                <div className="container">
                    <ul className="login">
                        {user.loggedIn ? (
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        ) : (
                            <li>
                                <button onClick={login}>
                                    Click Here to Sign in with Google
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
