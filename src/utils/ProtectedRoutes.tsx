import { Outlet, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoutes = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/auth" />
    );
};

export default ProtectedRoutes;
