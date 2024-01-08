import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
 
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [select, setSelect] = useState('');
 
    // validation
    const [validationErrors, setValidationErrors] = useState({});
    const [errors, setErrors] = useState({});
 
    const validateForm = () => {
        const errors = {};
 
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
 
        if (!phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
        }
 
        if (!username) {
            errors.username = 'Email / Username is required';
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
            errors.username = 'Invalid Email';
        }
 
        if (!password) {
            errors.password = 'Password is required';
        }
        else if (password.length < 8) {
            errors.password = 'Password should be at least 8 characters long';
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            errors.password = 'Password should contain at least one uppercase and one lowercase letter';
        }
        
        if(!confirmPassword){
            errors.confirmPassword = 'Required';
        }
        else if(confirmPassword !== password){
                errors.confirmPassword = 'Password does not match'
        }

        if (!select) {
            errors.select = 'Select Role';
        }
 
        return errors;
    };


 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        const errors = validateForm();
 
        if (Object.keys(errors).length === 0) {
            try {
                // Send registration data to the backend
                const response = await axios.post('http://localhost:5120/api/User/register', {
                    username,
                    password,
                    confirmPassword,
                    phoneNumber,
                    name
                });
 
                if (response.status === 200) {
                    toast.success('Registration successful');
                    console.log(response.data);
                    setValidationErrors({});
                }
            } catch (error) {
                console.error('Registration failed:', error);
                toast.error('Registration failed');
            }
        } else {
            setValidationErrors(errors);
        }
    };
 
    return (
        <>
            {/* <Navbar />  */}
            <ToastContainer />
            {/* <div className="container pt-4">
                <h1>Register</h1>
                <h2>Create a new account.</h2>
                <hr />
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                value={name}
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                               
                            />
                            <label htmlFor="name" className="form-label">Name</label>
                            {validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}
                        </div>
                                 <div className="form-floating mb-3">
                                     <input
                                         type="tel"
                                         value={phoneNumber}
                                         className='form-control'
                                         onChange={(e) => setPhoneNumber(e.target.value)}
                                         
                                     />
                                     <label htmlFor="name" className="form-label">Phone Number</label>
                                     {validationErrors.phoneNumber && <span className="text-danger">{validationErrors.phoneNumber}</span>}
                                 </div>
                         <div className="form-floating mb-3">
                             <input
                                 type="text"
                                 value={username}
                                className='form-control'
                                 onChange={(e) => setUsername(e.target.value)}
                             />
                             <label htmlFor="name" className="form-label">Email</label>
                             {validationErrors.username && <span className="text-danger">{validationErrors.username}</span>}
                         </div>
                         <div className="form-floating mb-3">
                             <input
                                 type="password"
                                 value={password}
                                 className='form-control'
                                 onChange={(e) => setPassword(e.target.value)}
                             />
                             <label htmlFor="name" className="form-label">Password</label>
                             {validationErrors.password && <span className="text-danger">{validationErrors.password}</span>}
                         </div>
                         <div className="form-floating mb-3">
                             <input
                                 type="password"
                                 value={confirmPassword}
                                 className='form-control'
                                 onChange={(e) => setConfirmPassword(e.target.value)}
                             />
                             <label htmlFor="name" className="form-label">Password</label>
                             {validationErrors.confirmPassword && <span className="text-danger">{validationErrors.confirmPassword}</span>}
                         </div>
                        <br />
                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">Register</button>
                    </form>
                    <br /><br />
                </section>
            </div> */}
<Navbar></Navbar>
<div className='container'>

            <div class="card shadow border-0 mt-4">
                <div class="card-header bg-dark bg-gradient mt-0 py-4">
                    <div class="row ">
                        <div class="col-12 text-center ">
                            <h2 class="py-2 text-light">Register</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body p-4">
                <div className="row pt-3">
                    <div className="col-md-12"></div>
                    <form className="row" method="post" onSubmit={handleSubmit}>
                        {/* ... other form elements */}
                        <div className="form-floating mb-3 col-md-12">
                            <input
                                type="text"
                                name="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                               // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                               className='form-control'
                                // aria-required="true"
                            />
                            <label htmlFor="email" className="ms-2 text-muted">
                                Email
                            </label>
                            {/* <span className="text-danger">{errors.email}</span> */}
                            {validationErrors.username && <span className="text-danger">{validationErrors.username}</span>}

                        </div>
                        <div className="form-floating mb-3 col-md-6">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              //  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                              className='form-control'
                            />
                            <label htmlFor="name" className="ms-2 text-muted">
                                Name
                            </label>
                            {/* <span className="text-danger">{errors.name}</span> */}
                            {validationErrors.name && <span className="text-danger">{validationErrors.name}</span>}
                        </div>
                        <div className="form-floating mb-3 col-md-6">
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                //className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                className='form-control'
                            />
                            <label htmlFor="phoneNumber" className="ms-2 text-muted">
                                Phone No
                            </label>
                            {/* <span className="text-danger">{errors.phoneNumber}</span> */}
                            {validationErrors.phoneNumber && <span className="text-danger">{validationErrors.phoneNumber}</span>}
                        </div>
                        <div className="form-floating mb-3 col-md-6">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                               // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                               className='form-control'
                            />
                            <label htmlFor="password" className="ms-2 text-muted">
                                Password
                            </label>
                            {/* <span className="text-danger">{errors.password}</span> */}
                            {validationErrors.password && <span className="text-danger">{validationErrors.password}</span>}
                        </div>
                        <div className="form-floating mb-3 col-md-6">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                               // className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                               className='form-control'
                            />
                            <label htmlFor="confirmPassword" className="ms-2 text-muted">
                                Confirm Password
                            </label>
                            {/* <span className="text-danger">{errors.confirmPassword}</span> */}
                            {validationErrors.confirmPassword && <span className="text-danger">{validationErrors.confirmPassword}</span>}
                        </div>
                        {/* <div className="form-floating mb-3 col-md-6"> */}
                            {/* <input
                                type="select"
                                name="select"
                                value={formData.select}
                                onChange={handleInputChange}
                                className={`form-control ${errors.select ? 'is-invalid' : ''}`}
                            /> */}
                            {/* <select  type="select"
                                name="select"
                                value={select}
                                onChange={(e) => setSelect(e.target.value)}
                                // className={`form-control ${errors.select ? 'is-invalid' : ''}`}
                                className='form-control'
                                >
                                    <option>-Select Role-</option>
                                    <option>Admin</option>
                                    <option>Customer</option>
                                </select>
                            <label htmlFor="select" className="ms-2 text-muted">
                                select role
                            </label> */}
                            {/* <span className="text-danger">{errors.select}</span> */}
                            {/* {validationErrors.select && <span className="text-danger">{validationErrors.select}</span>}
                        </div> */}
                        {/* <div className="form-floating mb-3 col-md-6">
                            <select className = {`form-select ${errors.select ? 'is-invalid' : ''}`} name='select' htmlFor="select" value={formData.select}
                                onChange={handleInputChange}>
                                <option>-Select Role-</option>
                                <span className="text-danger">{errors.confirmPassword}</span>
                            </select>
                        </div> */}
                        <div class="col-12">
                            <a href='/'><button id="registerSubmit" type="submit" class="w-100 btn btn-dark mb-3">Register</button></a>
                        </div>
                    </form>
                    {/* ... rest of the component code */}
                </div>
            </div>
        </div>

        </>
    );
};
 
export default Register;