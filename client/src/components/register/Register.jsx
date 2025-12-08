import { Link, useNavigate } from "react-router"


export default function Register({
    onRegister
}) {
    const navigate = useNavigate();

    const registerSubmit = (formData) => {

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeat-password');

        if (!email || !password) {
            return alert('Email or password are required!');
        };

        if (password !== repeatPassword) {
            return alert('Password does not match!')
        }

        try {
            onRegister(email, password);
            navigate('/');

        } catch (error) {
            return alert(error.message);
        };
    }

    return (
        <div id="register-page" className="page">
            <div className="form-container">
                <h2 id="register-title">Register</h2>
                <form id="register-form" action={registerSubmit}>
                    <div className="form-group">
                        <label htmlFor="register-email">Email</label>
                        <input type="email" id="register-email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-password">Password</label>
                        <input type="password" id="register-password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-repeat-password">Repeat password</label>
                        <input type="password" id="register-repeat-password" name="repeat-password" required />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn" >Register</button>
                    </div>
                    <p>Already registered? <Link to="/login" data-nav="login" >Login</Link></p>
                </form>
            </div>
        </div>
    )
}