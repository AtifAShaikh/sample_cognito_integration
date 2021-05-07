import { Auth } from 'aws-amplify';

// verifies user after succesfuly signup, exported to and called by pages/Verify
async function confirmSignUp(data) {
    try {
      const status = await Auth.confirmSignUp(data.username, data.code);
      return status;
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

export default confirmSignUp;