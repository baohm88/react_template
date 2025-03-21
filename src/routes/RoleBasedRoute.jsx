// routes/RoleBasedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleBasedRoute({ allowedRoles }) {
    const { isAuthenticated, role } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (!allowedRoles.includes(role))
        return <Navigate to="/unauthorized" replace />;

    return <Outlet />;
}
