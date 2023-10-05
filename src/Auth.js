import LoginButton from "./Login.js";
import LogoutButton from "./Logout.js";
import {useEffect} from "react";
import { gapi } from 'gapi-script';

const clientId = "855880973346-tabtrqi4o1ffhqogjj2c62mt7qh16tvn.apps.googleusercontent.com";

function Auth() {
    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load('client:auth2',start);
    });

    return(
        <div className="auth">
            <LoginButton/>
            {/* <LogoutButton/> */}
        </div>
    )
}

export default Auth;