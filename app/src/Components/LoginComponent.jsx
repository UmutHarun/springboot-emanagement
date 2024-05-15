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

    const navigate = useNavigate();

    const handleUserInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevState) => ({...prevState , [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        EmployeeService.loginUser(userDetails).then(res => {
            navigate('/employees');
        });
    };
    
    return (
        <div className='login-form-container'>
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                        type="text"
                        id="username"
                        onChange={handleUserInputChange}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        onChange={handleUserInputChange}
                        required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
