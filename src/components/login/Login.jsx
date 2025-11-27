export default function Login() {
    return (
        <div id="login-page" className="page">
            <div className="form-container">
                <h2 id="login-title">Вход</h2>
                <form id="login-form">
                    <div className="form-group">
                        <label htmlFor="login-email">Имейл</label>
                        <input type="email" id="login-email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Парола</label>
                        <input type="password" id="login-password" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn" >Влез</button>
                    </div>
                    <p >Нямаш акаунт? <a href="#" data-nav="register" >Регистрирай се</a></p>
                </form>
            </div>
        </div>
    )
}