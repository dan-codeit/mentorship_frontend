
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, isAuthorized } from "./auth";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }


  if (!isAuthorized(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />; 
  }

  return <Outlet />;
};

export default ProtectedRoute;
