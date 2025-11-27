export default function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <a href="/" className="logo" data-nav="home" id="nav-logo">🌱 Plant Care</a>
                <div className="nav-links">
                    <a href="/" data-nav="home" className="active">Начало</a>
                    <a href="/plants" data-nav="catalog">Каталог</a>

                    <div className="user-section" id="auth-section">
                        <a href="/login" data-nav="login">Вход</a>
                        <a href="/register" data-nav="register">Регистрация</a>
                    </div>

                    <div className="user-section" id="user-section" >
                        <span className="user-name" id="user-name"></span>
                        <button className="btn-logout" id="logout-btn">Изход</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}