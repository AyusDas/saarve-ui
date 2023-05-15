import React from 'react';
import SignUp from './pages/signUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './utils/privateRoutes';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import NotifyPage from './pages/NotifyPage';
import MenuPage from './pages/MenuPage';
import Search from './pages/search';
import DoctorBooking from './pages/DoctorBooking';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes> 
                    <Route element={<PrivateRoute/>}>
                        <Route exact path="/home" Component={HomePage}/>
                        <Route exact path="/search" Component={Search}/>
                        <Route exact path="/doctors" Component={DoctorPage}/>
                        <Route exact path="/doctorbooking" Component={DoctorBooking}/>
                        <Route exact path="/notifications" Component={NotifyPage}/>
                        <Route exact path="/Menu" Component={MenuPage}/>
                        <Route path="/" Component={SignUp} />
                    </Route>
                    <Route exact path="/landing" Component={Landing} />
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default App;
