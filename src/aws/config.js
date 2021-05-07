import Amplify, {Auth} from 'aws-amplify';

// This function is used to export the Amplify Config function to App.js
function configureAmplify(){
    Amplify.configure({
        Auth:{

            mandatorySignIn:true,
      
            region: 'us-west-1',
      
            userPoolId: 'us-west-1_Oee2tDamy',
      
            userPoolWebClientId: '2866gejfag6ih3q82cleokknsf',
      
            authenticationFlowType:'USER_PASSWORD_AUTH'
      
          }
      });

      console.log(Auth.configure());
}

export default configureAmplify;