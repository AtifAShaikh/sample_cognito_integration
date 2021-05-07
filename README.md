# React Cognito Login
This is a demo project designed as a proof of concept for using React and Cognito to signup, verify, and login user.

## Installation
Install dependencies
```
npm i
```
Start dev server
```
npm run start
```

## Pages
- '/' - Landing page (login located here)
- '/signup' - Sign up page
- '/verify/:id' - Verify user page
- '/success' - Success page

## Flow
Users will click sign up on the landing page. This will take them to the sign up page that will have them enter their information. For testing purposes you can use the same email for multiple test users, just remember that you must have a unique username. Once the signup is accepted the user will be redirected to the verify page which will ask for the verification code they received in an email. After entering this code a succesful verification will send the user back to the landing page. Now the user can login, which will kick them to the success page. This will display the jwtToken that was stored in local storage upon succesful login. There is also a logout button that will destroy the cognito session, clear local storage, and send user back to landing page.

## Documentation Links
[AWS Cognito](https://docs.amplify.aws/lib/auth/start/q/platform/js#re-use-existing-authentication-resource)
