import React from 'react';
import { useParams } from "react-router";
import User from './Login';


const Create = ({status}) => {
    const {id:eid} = useParams();

    function Person(){
        <User></User>
    }

    return (
        <div>
            <center>
                <h1>Signup</h1>
                    <input type="text" name="" id="" placeholder="username"/> <br />
                    <input type="text" name="" id="" placeholder="email"/> <br />
                    <input type="text" name="" id="" placeholder="phone"/> <br />
                    <input type="text" name="" id="" placeholder="password"/> <br />
                    <input type="submit" value="submit"/>
            </center>
            
        </div>
    );
};

export default Create;