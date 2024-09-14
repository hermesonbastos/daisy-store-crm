import { useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import { LOGIN } from "../api";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setIsAuthenticated } = useContext(UserContext);
  const { request, loading, error } = useFetch();

  const navigate = useNavigate();

  const login = async (email, password) => {
    const { url, options } = LOGIN(email, password);
    const { response, json } = await request(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      localStorage.setItem("token", json.token);
      navigate("/orders");
    } else {
      setIsAuthenticated(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
