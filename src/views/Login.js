import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
    const { login, logout, user } = useContext(AuthContext);

    return (
        <>
            <div className="app">
                <div className="container mt-30 text-center">
                    <section>
                        <h2 className="login">Welcome to Kyler's Forecast</h2>
                        <p className="login">
                            Click below to sign in with Google
                            <br />
                            <span className="line">
                            <button onClick={login} id="submit-btn" className="btn btn-info rounded-pill d-inline-flex mt-4 btn-lg" type="submit">Login</button>
                            </span>
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}

{
    /* <ul className="login">
    {user.loggedIn ? (
        <li>
            <button onClick={logout}>Logout</button>
        </li>
    ) : (
        <li>
            <button onClick={login}>Click Here to Sign in with Google</button>
        </li>
    )}
</ul>; */
}
