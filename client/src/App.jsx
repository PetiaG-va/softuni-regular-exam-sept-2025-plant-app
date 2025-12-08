import { Route, Routes } from "react-router"
import { useState } from "react"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import Add from "./components/add/Add.jsx"
import Edit from "./components/edit/Edit.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register.jsx"
import Logout from "./components/header/logout/Logout.jsx"

function App() {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [user, setUser] = useState(null);

    const registerHandler = (email, password) => {
        if (registeredUsers.some(user => user.email === email)) {
            throw new Error("Username is taken!");
        }

        const newUser = { email, password };

        setRegisteredUsers(state => [...state, newUser]);

        setUser(newUser);
    };

    const loginHandler = (email, password) => {
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (!user) {
            throw new Error("Invalid email or password!");
        };

        setUser(user);
    };

    return (
        <>
            <div className="app-wrapper">
                <Header user={user} setUser={setUser} />

                <main>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/plants" element={<Catalog />} />
                            <Route path="/plants/:plantId/details" element={<Details />} />
                            <Route path="/add" element={<Add />} />
                            <Route path="/register" element={<Register onRegister={registerHandler} />} />
                            <Route path="/login" element={<Login onLogin={loginHandler} />} />
                            {/* <Add />
                        <Edit /> */}

                        </Routes>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
