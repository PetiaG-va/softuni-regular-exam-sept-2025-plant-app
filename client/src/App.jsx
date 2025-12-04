import { Route, Routes } from "react-router"
import Add from "./components/add/Add.jsx"
import Catalog from "./components/catalog/Catalog.jsx"
import Details from "./components/details/Details.jsx"
import Edit from "./components/edit/Edit.jsx"
import Home from "./components/home/Home.jsx"
import Login from "./components/login/Login.jsx"
import Navigation from "./components/navigation/navigation.jsx"
import Register from "./components/register/Register.jsx"

function App() {
    return (
        <>
            <div className="app-wrapper">
                    <Navigation />

                    <main>
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/plants" element={<Catalog />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/plants/:plantId/details" element={<Details />} />
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
