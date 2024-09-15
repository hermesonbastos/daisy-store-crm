import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VALIDATE_TOKEN } from "../api";
import useFetch from "../hooks/useFetch";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { request } = useFetch();
  const navigate = useNavigate();

  // Função para validar o token
  const validateToken = async (token) => {
    const { url, options } = VALIDATE_TOKEN(token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setIsAuthenticated(true);
      navigate("/orders");
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateToken(token);
    }
  }, []); 

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
