import { Auth } from 'aws-amplify';

// logs in user, exports to and called by pages/Landing
async function login(data) {
    try {
        const user = await Auth.signIn(data.uid, data.password);
        return user;
    } catch (error) {
        console.log('error signing in', error);
    }
}

export default login;