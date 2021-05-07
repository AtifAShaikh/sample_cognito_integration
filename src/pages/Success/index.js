import React, {useState, useEffect} from 'react';
import logout from '../../aws/logout';

export default function Success(){

    // connected to Logout Button
    // destroys cognito session, clears local storage, sends user back to login
    const logoutUser = async () => {
        await logout();
        localStorage.clear();
        document.location.replace('/');
    }

    return(
        <div>
            <h1>
                Success
            </h1>
            <h4>Token</h4>
            <p>{localStorage.getItem('jwtToken')}</p>
            <button type="button" className="btn btn-danger" onClick={()=>{
                logoutUser();
            }}>Log Out</button>
        </div>
     
    );
}