import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./landing.css"

const Landing = () => {

    const navigate = useNavigate()
    
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

    if(getCookie('csrftoken') == null){
        fetch('http://ec2-15-206-70-160.ap-south-1.compute.amazonaws.com:8000/api/core/cookie/csrf/')
            .then((response) => response.json())
            .then(data => {
                createCookie("csrftoken", data.csrf_token, 1)
            }
        )
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

    async function onSignIn(g_response) {
        const csrfToken = getCookie('csrftoken');
        let response = await fetch('http://ec2-15-206-70-160.ap-south-1.compute.amazonaws.com:8000/api/core/auth/google/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken
            },
            body: JSON.stringify({"id_token": g_response.credential, "usertype" : "user"}), 
        })

        let data = await response.json()
        console.log("response : ", response)
        console.log("data : ", data)
        
        if( response.status === 200 ) {
            localStorage.setItem('idToken', JSON.stringify(data))
            navigate("/signup")
        }
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id : "769529200021-oelo810eeb0i86j1l0jaoat87bsb5a0g.apps.googleusercontent.com",
            callback : onSignIn,
            context : "signup",
            ux_mode : "popup",
            auto_select : "true",
            itp_support : "true"
        })

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { 
                theme : "outline", 
                size : 'large', 
                shape : 'pill', 
                type : "standard", 
                text : "continue_with", 
                logo_alignment : "left" 
            }
        )
    },[])

    return (
        <div className='mybg w-screen h-screen'>
            <div id='signInDiv' className='absolute top-1/2 right-1/2 translate-x-1/2'></div>
        </div>
    )
}

export default Landing;

