import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
            }
        }
    }
    return cookieValue;
}

export const AuthProvider = ({ children }) => {
    
    let [authTokens, setAuthToken] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user,setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const navigate = useNavigate()

    let LoginUser = async(e) => {
        e.preventDefault()

        if(getCookie('csrftoken') == null){
            fetch('http://localhost:8000/cookie/csrf/')
                .then((response) => response.json())
                .then(data => {
                    createCookie("csrftoken", data.csrf_token, 1)
                }
            )
        }

        const csrfToken = getCookie('csrftoken');
        fetch('http://localhost:8000/auth/google/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({"id_token": /*g_response.credential*/''}), 
        })
        .then((response) => console.log(response))
        .catch(error => console.error(error));
    }

    let SignUpUser = async(e) => {
        e.preventDefault()

        let response = await fetch('', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                //"X-CSRFToken": csrfToken,
            },
            body:JSON.stringify({'username':e.target.username.value,
                                 'password':e.target.password.value,
                                 'confirmPassword':e.target.confirmPassword.value,
                                 'email':e.target.email.value})
        })

        let data = await response.json()
        console.log('data:',data)
        console.log('response:',response)

        //change this to 200
        if(response.status === 200) {
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate("/home")
        }
    }

    let logoutUser = () => {
        setAuthToken(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate("/landing")
    }

    let contextData = {
        user:user,
        SignUpUser:SignUpUser,
        logoutUser:logoutUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
