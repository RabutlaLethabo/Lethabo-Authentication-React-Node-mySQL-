import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignUpValidation from '../SignUpValidation'
import axios from 'axios'

const Sign_Up = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const HandleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = SignUpValidation(values);
        setErrors(validationErrors);
    
        // Only proceed if there are no validation errors
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:3001/sign_up', values)
                .then(res => {
                    navigate('/');
                })
                .catch(error => console.log(error));
        }
    };
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h1 className='text-center d-block'>Sign Up</h1>
                <form action=''onSubmit={HandleSubmit}>
                    {/* NAME */}
                    <div className='mb-3'>
                        <label 
                            htmlFor='name'
                            className='text-start d-block'
                            >
                            <strong>Name</strong>
                        </label>
                        <input 
                            type='text'
                            name='name'
                            onChange={HandleInput}
                            placeholder='Name'
                            className='form-control rounded-0'
                        />
                        {errors.name && <span
                        className='text-danger'
                        > {errors.name}</span>}
                    </div>
                    {/* EMAIL */}
                    <div className='mb-3'>
                        <label 
                            htmlFor='email'
                            className='text-start d-block'
                            >
                            <strong>Email</strong>
                        </label>
                        <input 
                            type='email'
                            name='email'
                            onChange={HandleInput}
                            placeholder='someone@gmail.com'
                            className='form-control rounded-0'
                        />
                        {errors.email && <span
                        className='text-danger'
                        > {errors.email}</span>}
                    </div>
                    {/* PASSWORD */}
                    <div className='mb-3'>
                        <label 
                            htmlFor='password'
                            className='text-start d-block'
                            >
                            <strong>Password</strong>
                        </label>
                        <input 
                            type='password' 
                            name='password'
                            onChange={HandleInput}
                            autoComplete="current-password"
                            className='form-control rounded-0'
                            placeholder='Password'
                        />
                        {errors.password && <span
                        className='text-danger'
                        > {errors.password}</span>}
                    </div>
                    {/* BUTTONS */}
                    <button 
                        type='submit'
                        className='btn btn-success w-100 rounded-0'
                        >
                        <strong>Sign Up</strong>
                    </button>
                    <p>By Signing in you agreeing with our terms and conditions</p>
                    <Link to='/'
                        className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                        >
                        Already Have An Account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Sign_Up;
