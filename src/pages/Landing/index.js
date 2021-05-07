import React, {useState, useEffect} from 'react';
import login from '../../aws/login';

export default function Landing(){

    const [signinState, setSigninState] = useState({
        uid: '',
        password: '',
    })

    useEffect(()=>{},[]);

    // connected to login button
    // creates cognito session, stores jwtToken, and send user to success page
    const submitSignin = async (e) => {
        console.log(signinState);
        const user = await login(signinState);
        console.log(user.signInUserSession.idToken.jwtToken);
        let tokenToSet = user.signInUserSession.idToken.jwtToken;
        if(user!==undefined){
            localStorage.setItem('jwtToken', tokenToSet);
            console.log(localStorage.getItem('jwtToken'));
            document.location.replace('/success');
        }
    }

    return(
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mt-3">Sign in</h1>
           
                    <div className="form-group">
                        <label for="exampleInputEmail1">UID</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter User Id" value={setSigninState.uid} onChange={(e)=>{
                            setSigninState({
                                ...signinState,
                                uid: e.target.value,
                            })
                        }}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={setSigninState.password} onChange={(e)=>{
                            setSigninState({
                                ...signinState,
                                password: e.target.value,
                            })
                        }}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        submitSignin();
                    }}>Login</button>

                <button type="submit" className="btn btn-info mt-3" onClick={()=>{
                    document.location.replace('/signup')
                }}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}