import React, {useState, useEffect} from 'react';
import signUp from '../../aws/singup';

export default function Signup(){
    const [signupState, setSignupState] = useState({
        uid: '',
        password: '',
        email: '',
    })

    useEffect(()=>{},[]);

    // connected to Register Button
    // Creates a cognito user and sends a verification code to email and sends to verify page
    const submitSignup = async (e) => {
        console.log(signupState);
        const user = await signUp(signupState);
        if(user.username != undefined){
            document.location.replace(`/verify/${user.username}`);
        }
    }

    return(
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mt-3">Sign Up</h1>
                    <div className="form-group">
                        <label>UID</label>
                        <input type="text" className="form-control" id="uid" placeholder="Enter User Id" value={setSignupState.uid} onChange={(e)=>{
                            setSignupState({
                                ...signupState,
                                uid: e.target.value,
                            })
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" value={setSignupState.uid} onChange={(e)=>{
                            setSignupState({
                                ...signupState,
                                email: e.target.value,
                            })
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={setSignupState.password} onChange={(e)=>{
                            setSignupState({
                                ...signupState,
                                password: e.target.value,
                            })
                        }}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        submitSignup();
                    }}>Register</button>
                </div>
            </div>
        </div>
    )
}