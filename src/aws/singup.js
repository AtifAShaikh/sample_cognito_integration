import { Auth } from 'aws-amplify';

// creates new user in cognito, exported to and called by pages/Signup
async function signUp(data) {
    try {
        const { user } = await Auth.signUp({
            username: data.uid,
            password: data.password,
            attributes: {
                email: data.email,          // optional
                // 'custom:companyid': '1',   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
        return user;
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export default signUp;