export default function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <a href="/" className="logo" data-nav="home" id="nav-logo">🌱 Plant Care</a>
                <div className="nav-links">
                    <a href="/" data-nav="home" className="active">Home</a>
                    <a href="/plants" data-nav="catalog">Plants</a>

                    <div className="user-section" id="auth-section">
                        <a href="/login" data-nav="login">Login</a>
                        <a href="/register" data-nav="register">Register</a>
                    </div>

                    <div className="user-section" id="user-section" >
                        <span className="user-name" id="user-name"></span>
                        <button className="btn-logout" id="logout-btn">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}