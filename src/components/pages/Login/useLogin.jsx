import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { redirect, useNavigate } from "react-router-dom";

const useLogin = () => {

  const { setIsAuthenticated } = useContext(UserContext);

  const navigate = useNavigate();
  
  const login = () => {
    setIsAuthenticated(true);
    navigate("/products")
  }

  const logout = () => {
    setIsAuthenticated(false);
    console.log("logouttt!!!!")
    navigate("/");
  }

  return {
    login,
    logout
  }
}

export default useLogin;