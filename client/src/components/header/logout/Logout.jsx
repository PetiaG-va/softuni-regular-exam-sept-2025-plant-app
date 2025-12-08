import { Navigate } from "react-router";

export default function Logout({
    setUser,
}) {
    const logoutHandler = () => {
		setUser(null);
	};

    return (
        <div className="user-section" id="user-section">
            <span className="user-name" id="user-name"></span>
            <button className="btn-logout" id="logout-btn" onClick={logoutHandler}>Logout</button>
        </div>
    )
}