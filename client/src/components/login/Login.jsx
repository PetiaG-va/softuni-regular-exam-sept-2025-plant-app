import { Link, useNavigate } from "react-router";

export default function Login({
    onLogin
}) {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            return alert('Email and password are requider!');
        };

        try {
            onLogin(email, password);
            navigate('/');

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div id="login-page" className="page">
            <div className="form-container">
                <h2 id="login-title">Login</h2>
                <form id="login-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="login-email">Email</label>
                        <input type="email" id="login-email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" id="login-password" name="password" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn" >Login</button>
                    </div>
                    <p>You don`t have a registration? <Link to="/register" data-nav="register" >Register</Link></p>
                </form>
            </div>
        </div>
    )
}