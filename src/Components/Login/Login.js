import React from 'react';
import './Login.css'

const Login = ({status, id}) => {
    

    if (status==='login') {
        return (
            <div>
                <center>
                    <h1>Login</h1>
                    <input type="text" name="" id="" placeholder="username"/> <br/>
                    <input type="password" name="" id="" placeholder="password"/> <br />
                    <input type="submit" value="Login" />
                </center>
            </div>
        );
    }
    
};

export default Login;