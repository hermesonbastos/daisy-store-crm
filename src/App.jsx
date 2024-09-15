import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login/Login.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Products from "./components/pages/Products/Products.jsx";
import Protected from "./utils/Protected.jsx";
import Orders from "./components/pages/Orders/index.jsx";
import CreateProduct from "./components/pages/CreateProduct/index.jsx";
import Details from "./components/pages/OrderDetails/Details.jsx"
import EditProduct from "./components/pages/EditProduct/index.jsx";
import Categories from "./components/pages/Categories/index.jsx";
import EditCategory from "./components/pages/EditCategory/index.jsx";

function App() {
    const { isAuthenticated } = useContext(UserContext);
    const location = useLocation();

    return (
        <>
            {isAuthenticated && location.pathname !== "/" && <Navbar />}
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/orders" element={
                    <Protected>
                        <Orders />
                    </Protected>
                } />

                <Route path="/details" element={
                    <Protected>
                        <Details />
                    </Protected>
                }/>

                <Route
                    path="/products"
                    element={
                        <Protected>
                            <Products />
                        </Protected>
                    }
                >
                    
                </Route>

                <Route
                    path="/products/create"
                    element={
                        <Protected>
                            <CreateProduct />
                        </Protected>
                    }
                />

                <Route
                    path="/products/edit/:id"
                    element={
                        <Protected>
                            <EditProduct />
                        </Protected>
                    }
                />

                <Route
                    path="/categories"
                    element={
                        
                            <Categories />
                        
                    }
                />

                <Route
                    path="/categories/edit"
                    element={
                        
                            <EditCategory />
                        
                    }
                />
            </Routes>
        </>
    );
}

export default App;
