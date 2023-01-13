import React from 'react';
import '../css/dashlogin.css'
import log from '../images/log.jpg';

const DashLogin = () => {
    return ( 
        <div className="login_wrapper">
            
            <div className="inner_wrapper">
                
                <form method="">
                    <h4>Welcome again !</h4>
                    <p>Welcome back! Please enter your details</p>
                    <label>Email</label>
                    <input type="text" placeholder="Enter email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter password"/>
                    <span><input type="checkbox"/><a>Remember for 30 days</a><a>Forgot password?</a></span>
                    <input type="button" value="Sign in"/>
                    <input type="button" value="Sign in"/>

                    <span><a>Don't have a account?</a></span>
                    
                </form>
                <img src={log} alt='login' className='log'/>
            </div>
        </div>
     );
}
 
export default DashLogin;