import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Products from "./components/pages/Products/Products.jsx";
import Protected from "./utils/Protected.jsx";

function App() {
    const { isAuthenticated } = useContext(UserContext);
    const location = useLocation();

    return (
        <>
            {isAuthenticated && location.pathname !== "/" && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />

                <Route
                    path="/products"
                    element={
                        <Protected>
                            <Products />
                        </Protected>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
