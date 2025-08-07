import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../components/Login";
import Logout from "../components/Logout";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../ProtectedRoute";

const AOSProtectedWrapper = () => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
};

const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aos/login" element={<Login />} />

      <Route path="/aos" element={<AOSProtectedWrapper />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
