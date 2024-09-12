// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../LoginValidation';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const HandleInput = (e) => {
        setValues(prev => {
            const newValues = { ...prev, [e.target.name]: e.target.value };
            console.log('Updated values:', newValues);
            return newValues;
        });
    };
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation(values);
        console.log('Validation errors:', validationErrors);
    
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:3001/login', values)
            .then(res => {
                console.log('Response from server:', res.data);
                if (res.data === "Success") {
                    navigate('/dashboard');
                } else {
                    alert('Incorrect details/user does not exist');
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                alert('An error occurred during login');
            });
        }
    };
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h1 className='text-center d-block'>Log In</h1>
                <form onSubmit={HandleSubmit}>
                    <div className='mb-3'>
                        {/* <label htmlFor='email' className='text-start d-block'>
                            <strong>Email</strong>
                        </label> */}
                        <input 
                            type='email'
                            placeholder='someone@gmail.com'
                            name='email'
                            onChange={HandleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        {/* <label htmlFor='password' className='text-start d-block'>
                            <strong>Password</strong>
                        </label> */}
                        <input 
                            type='password'
                            name='password'
                            onChange={HandleInput}
                            className='form-control rounded-0'
                            placeholder='Password'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                    <strong>Log in</strong>
                    </button>
                                <p>By logging in you agree with our terms and conditions</p>
                    <Link to='/sign_up' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
