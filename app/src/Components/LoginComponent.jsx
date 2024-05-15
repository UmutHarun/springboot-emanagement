import React, { useState } from 'react';
import "../style/LoginComponent.css";
import EmployeeService from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        role: "USER"
    });

    function changeFormHandler(event){
        const {name,value} = event.target;
        setUserDetails(prevstate => ({
            ...prevstate,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        EmployeeService.loginUser(userDetails)
        // .then(res => {
        //     navigate('/employees');
        // });
    };
    
    return (
        <div className='login-form-container'>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            placeholder="Username" 
                            type='text'
                            name="username" 
                            className="form-control" 
                            value={userDetails.username}
                            onChange={changeFormHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control" 
                            placeholder="Password" 
                            type="password"
                            id="password"
                            onChange={changeFormHandler}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
