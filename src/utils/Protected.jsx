import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Protected = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);

  if (isAuthenticated === true) {
    return children;
  } else if (isAuthenticated === false) {
    return <Navigate to="/" />;
  } else {
    return <></>;
  }
};

export default Protected;
