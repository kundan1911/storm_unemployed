import {GoogleLogout} from 'react-google-login';

const clientId = "855880973346-tabtrqi4o1ffhqogjj2c62mt7qh16tvn.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        alert("Logout Successful!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;