import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [idToken, setIdToken] = useState(() => localStorage.getItem('idToken') ? JSON.parse(localStorage.getItem('idToken')) : null )
    const navigate = useNavigate()

    let SignUpUser = async(e) => {
        e.preventDefault()
        let myRequestMethod = 'POST'
        if(idToken) {
            myRequestMethod = 'PUT'
        }
        let response = await fetch('http://13.232.76.12:8000/api/app/profile/', {
            method: myRequestMethod,
            headers:{
                'Content-Type':'application/json',
                'Authorization' : 'Token '+idToken
            },
            body:JSON.stringify({
                'full_name':e.target.full_name.value,
                'email':e.target.email.value,
                //'profile_pic':e.target.profile_pic.value,
                'address':e.target.address.value,
                'city':e.target.city.value,
                'pincode':e.target.pincode.value,
                'gender':e.target.gender.value,
                'age':e.target.age.value,
                'phone':e.target.phone.value 
            })
        })

        let data = await response.json()
        console.log('data:',data)
        console.log('response:',response)

        //change this to 200
        if(response.status === 200) {
            navigate("/home")
        }
    }

    let logoutUser = () => {
        localStorage.removeItem('idTokens')
        navigate("/landing")
    }

    let contextData = {
        SignUpUser:SignUpUser,
        id_token : idToken,
        logoutUser:logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

