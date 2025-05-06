import React from 'react'
import { Navigate } from 'react-router-dom';

const RequireAdminAuth = ({children}) => {
    const isAuth = localStorage.getItem("isAdminLoggedIn") === "true";
    if(!isAuth) 
        return <Navigate to="/admin/login" replace />;
    return children;
}

export default RequireAdminAuth
