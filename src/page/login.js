import React, { useState } from 'react'
import './Login.css';  
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../reduc/loginSlice.js';

export const Login = ( ) => {
    
    const [message, setMessage] = useState("");
    const [loginvalue, setLoginValue] = useState({
        username: "", password: ""
    })
    const loginData = useSelector((state) => state.loginInfo.loginData);
    const todoList = useSelector((state) => state.loginInfo.tasks);

    const dispatch = useDispatch();
    console.log("loginData", loginData);
    console.log("todoData", todoList);

    const navigate = useNavigate();
    function handleSubmit(e) {
        // console.log("submit E ", e);
        e.preventDefault();
        console.log("loginvalue", loginvalue);
        

        if (loginvalue.username === loginData.username && loginvalue.password ===loginData.password) {
            console.log("login successfull");
            navigate("/profile")
            dispatch(setLogin(loginvalue))
            // setIsAuthenticated(true)
        } else {
            console.log("login failure");
            setMessage("Invalid crediential");

        }

    }
    const handleChange = (e) => {
        // console.log("submit",e.target.value);
        const { name, value } = e.target;
        setLoginValue((previous) => {
            return {
                ...previous, [name]: value
            }
        })
    }
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-12">
                    <div className="card shadow-lg">
                        <div className="card-header text-center bg-secondary text-white">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name='username'
                                        value={loginvalue.username}
                                        placeholder="Enter username"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name='password'
                                        value={loginvalue.password}
                                        placeholder="Enter password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100">Login</button>
                            </form>
                            {message && (
                                <div className="mt-3 alert alert-info" role="alert">
                                    {message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
