// context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // { id, username, role, etc. }

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    const value = {
        user,
        isAuthenticated: !!user,
        role: user?.role,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
