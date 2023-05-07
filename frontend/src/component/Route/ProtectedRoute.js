import React from "react";

const ProtectedRoute = ({ isAuthenticated, user, adminComponent, userComponent }) => {
  if (isAuthenticated && user.role === 'admin') {
    return adminComponent;
  } else {
    return userComponent;
  }
};

export default ProtectedRoute;