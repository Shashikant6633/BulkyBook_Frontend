import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
//import Navbar from './navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();


  const adminUsername = 'admin@gmail.com';
  const adminPassword = 'admin';



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (username === adminUsername && password === adminPassword) {
        toast.success('Login successful!');
        setLoginStatus('Login successful!');
        navigate('/admin');
        // After upon successful login
      } else {
        const response = await axios.post('http://localhost:5120/api/User/login', {
          username,
          password,
          phoneNumber,
          confirmPassword,
          name
        });

        // When returns a success message upon successful login
        if (response.data === 'Login successful') {
          toast.success('Login successful!');
          setLoginStatus('Login successful!');
          sessionStorage.setItem('loggedInUser', JSON.stringify({ username }));
          navigate('/user');
          // Further actions upon successful login
        } else {
          setLoginStatus('Invalid credentials');
        }
      }
    } catch (error) {
      toast.error('Login Failed!');
      console.error('Login failed:', error);
      setLoginStatus('Login failed');
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar></Navbar>
      {/* <div className="container pt-5">
                <h1>Log in</h1>
                <h2>Use a local account to log in.</h2> <hr />
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" value={username} className='form-control' onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="email" className="form-label">Username/Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password" className="form-label">Password</label>
                        </div>
                        <br />
                        <button type="submit" className="w-100 btn btn-lg btn btn-primary">Login</button>
                        <a href='/register'>Register Here</a>
                    </form>
                    {/* {loginStatus && <p style={{ color: 'red', fontWeight: 'bold' }}>{loginStatus}</p>} */}
      {/* </section> */}
      {/* </div> */} 

      <form className='container' onSubmit={handleSubmit}>
        <div className="card shadow border-0 mt-4">
          <div className="card-header bg-dark bg-gradient mt-0 py-4">
            <div className="row ">
              <div className="col-12 text-center ">
                <h2 className="py-2 text-light">Log In</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-4 my-3">
          <div className="form-group">
            <div className="row">
              <div className="col-md-12">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

              </div>

              <div className="form-group my-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-dark my-3">Login</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;