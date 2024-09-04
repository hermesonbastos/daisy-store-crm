import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log(isAuthenticated)

    return (
        <UserContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
