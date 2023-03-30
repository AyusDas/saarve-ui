import { Route, Navigate, Outlet } from "react-router-dom";
import React, {useContext} from 'react'
import AuthContext from "../context/authContext";

const PrivateRoute = ({children, ...rest}) => {
    console.log("Private Route");
    let {user} = useContext(AuthContext) 
    return ( user ? <Route {...rest}>{children}</Route> : <Navigate to="/landing"/> )
}

export default PrivateRoute;
