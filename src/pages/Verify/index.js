import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import confirmSignUp from '../../aws/verify';


export default function Verify (){

    const {id} = useParams()

    const [verifyState, setVerifyState] = useState({
        vCode: '',
    })

    useEffect(()=>{},[]);

    // Connected to Verif button
    // verifies user in cognito, and upon verification, sends user back to landing page
    const submitVerify = async (e) => {
        let objToSend = {
            username: id,
            code: verifyState.vCode,
        }
        console.log(objToSend);
        const status = await confirmSignUp(objToSend);
        if(status == "SUCCESS"){
            document.location.replace('/');
        }
    }

    return(
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mt-3">Please Verify Your Registration</h1>
           
                    <div className="form-group">
                        <label for="exampleInputEmail1">Verification Code</label>
                        <input type="text" className="form-control" id="email" placeholder="Verification Code Here" value={setVerifyState.vCode} onChange={(e)=>{
                            setVerifyState({
                                ...verifyState,
                                vCode: e.target.value,
                            })
                        }}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault();
                        submitVerify();
                    }}>Verify</button>
                </div>
            </div>
        </div>
    )
}