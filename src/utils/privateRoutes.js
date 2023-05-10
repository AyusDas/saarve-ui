import { Route, Navigate, Outlet } from "react-router-dom";
import React, {useContext} from 'react'
import AuthContext from "../context/authContext";

const PrivateRoute = () => {
    console.log("Private Route");
    let {id_token} = useContext(AuthContext)
    return ( id_token ? <Outlet/> : <Navigate to="/landing"/> )
}

export default PrivateRoute;
