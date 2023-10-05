import {GoogleLogin} from 'react-google-login';

const clientId = "855880973346-tabtrqi4o1ffhqogjj2c62mt7qh16tvn.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        alert("Login Success! Current user: ",res.profileObj);
    }

    const onFailure = (res) => {
        alert("Login Failed! res: ",res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;