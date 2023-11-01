import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../fiebase';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    //useState for values
    const [data, setData] = useState({
        email: "",
        password: "" ,
    })
    //destructuring
    const { email, password } = data;
    //setValues event for setting input values ;
    const setValues = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }; 
    const Navigate = useNavigate()
     // onSubmit form event
    const submitHandler = (event) => {
        event.preventDefault();
        //auth keyword
        const auth = getAuth(app)
        createUserWithEmailAndPassword( auth , email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user.email)
                Navigate("/home")
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    };

    return (
        <div className='formparent'>
            <form onSubmit={submitHandler}>
                <h2>Sign Up</h2>
                <input type='email' placeholder='EMAIL' name='email' value={email} onChange={setValues}  className='form-control' />
                <br></br>  <br></br>
                <input type="password" placeholder='PASSWORD' name="password" value={password} onChange={setValues}  className='form-control' />
                <br></br>  <br></br>
                <input type="submit" className='btn btn-success' value="Create Account" />
            </form>
        </div>
    )
}

export default Signup; 