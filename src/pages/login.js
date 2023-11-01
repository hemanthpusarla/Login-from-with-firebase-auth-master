import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../fiebase';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
 const Login = () => {
    //useState for values
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    //destructuring
    const { email, password } = data;
    //setValues event for setting input values ;
    const setValues = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const Navigate = useNavigate()
    //submit handler
    
    const submitHandler = (event) => {
        event.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("logged in")
                  Navigate('/home')
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (
        <div className='formparent'>
            <form onSubmit={submitHandler}>
                <h1>   Log-in </h1>
                <input type='email' placeholder='EMAIL' name='email' value={email} onChange={setValues} className='form-control' />
                <br></br> 
                <input type="password" placeholder='PASSWORD' name="password" value={password} onChange={setValues} className='form-control' />
                <br></br>  
               <center> <input type="submit" value="Log-In" className="btn btn-success" />  
                <p> <Link to="/signup" className='link btn btn-info' >Click here to Create New Account</Link></p></center>
            </form>
           
        </div>
    )
}

export default Login ;