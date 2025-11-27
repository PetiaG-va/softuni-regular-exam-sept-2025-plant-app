export default function Register() {
    return (
        <div id="register-page" className="page">
            <div className="form-container">
                <h2 id="register-title">Регистрация</h2>
                <form id="register-form">
                    <div className="form-group">
                        <label htmlFor="register-name">Име</label>
                        <input type="text" id="register-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-email">Имейл</label>
                        <input type="email" id="register-email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-password">Парола</label>
                        <input type="password" id="register-password" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn" >Регистрирай се</button>
                    </div>
                    <p>Вече имаш акаунт? <a href="#" data-nav="login" >Влез</a></p>
                </form>
            </div>
        </div>
    )
}