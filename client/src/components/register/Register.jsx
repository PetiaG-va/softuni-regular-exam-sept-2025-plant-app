export default function Register() {
    return (
        <main>
            <div className="form-box">
                <h1>Register</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat Password" />
                <button className="btn">Register</button>
            </div>
        </main>
    )
}