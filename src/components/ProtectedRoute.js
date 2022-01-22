import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    // alert("You have to Sign-In to access this route, redirecting to Sign-In page")
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
