// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';

import Home from '../pages/user/Home';
import Dashboard from '../pages/admin/Dashboard';
import Login from '../pages/auth/Login';
import NotAuthorized from '../pages/NotAuthorized';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<NotAuthorized />} />

      {/* Public Route */}
      <Route path="/" element={<Home />} />

      {/* Authenticated Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<div>Profile</div>} />
      </Route>

      {/* Role-protected Routes */}
      <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
