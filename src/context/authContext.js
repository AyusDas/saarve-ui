import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [idToken, setIdToken] = useState(() => localStorage.getItem('idToken') ? JSON.parse(localStorage.getItem('idToken')) : null )
    const navigate = useNavigate()

    let SignUpUser = async(e) => {
        e.preventDefault()
        
        let response = await fetch('http://ec2-15-206-70-160.ap-south-1.compute.amazonaws.com:8000/api/core/profile/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization' : 'Token token_value'
            },
            body:JSON.stringify({
                'full_name':e.target.full_name.value,
                'email':e.target.email.value,
                'profile_pic':e.target.profile_pic.value,
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
        logoutUser:logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
