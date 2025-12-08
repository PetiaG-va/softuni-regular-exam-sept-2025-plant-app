import { Link } from "react-router";
import Logout from "./logout/Logout.jsx";

export default function Navigation({
    setUser
}) {
    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="logo" data-nav="home" id="nav-logo">🌱 Plant Care</Link>
                <div className="nav-links">
                    <Link to="/" data-nav="home" className="active">Home</Link>
                    <Link to="/plants" data-nav="catalog">Plants</Link>

                    <div className="user-section" id="auth-section">
                        <Link to="/login" data-nav="login">Login</Link>
                        <Link to="/register" data-nav="register">Register</Link>
                    </div>

                    <Logout setUser={setUser} />
                </div>
            </div>
        </nav>
    )
}