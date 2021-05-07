import { Auth } from 'aws-amplify';

// logs out user from cognito, exported to and called by pages/Success
async function logout() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export default logout;