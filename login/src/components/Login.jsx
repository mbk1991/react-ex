import styled from 'styled-components'

const LoginForm = styled.div``;
const LoginLabel = styled.h2``;

const uri = window.location.href;
let parsing  = uri.split("code=")[1]?.split("&state=");
let authCode;
let provider;
if(parsing){
    authCode = parsing[0];
    provider = parsing[1];
    if (authCode) {
        login(provider);
    }
}

async function login(provider) {
    let url = 'http://192.168.219.101:8001/api/auth/login';
    let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "auth_code": authCode,
            "provider": provider,
        })
    };
    let response = await fetch(url, options);
    let responseOK = response && response.ok;
    if (responseOK) {
        let data = await response.json();
        console.log("data",data);
    }
}


export default function Login() {
    return (
        <>
            <LoginLabel>
                My Hot spot
            </LoginLabel>
            <LoginForm>
                <form action="http://192.168.219.101:8001/api/auth/kakao" method="get">
                    <input type="submit" id='kakao_login' value="kakaoLogin" />
                </form>
                <form action="http://localhost:8001/api/auth/google" method="get">
                    <input type="submit" id='kakao_login' value="googleLogin" />
                </form>
            </LoginForm>
        </>
    )
}