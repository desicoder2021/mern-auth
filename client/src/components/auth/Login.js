import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, updateFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  // onChange handler configured to handle change for all fields
  const onChange = (e) =>
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("awesome");
    login({ email, password });
  };

  // redirect when logged in
  if (isAuthenticated) {
    return <Navigate to='/welcome' />;
  }

  return (
    <div className='bg-white h-screen'>
      <div className='container mx-auto'>
        <h1 className='text-blue-500 text-5xl pt-4'>Login</h1>
        <p className='py-4 text-gray-700 text-lg flex space-x-1'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
              />
            </svg>
          </span>
          <span>Log in to your account</span>
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-4'>
            <input
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='4'
            />
          </div>
          <input
            className='rounded-sm bg-blue-600 px-4 py-3 text-white cursor-pointer'
            type='submit'
            value='Login'
          />
          <p className='pt-2'>
            Not registered yet?{" "}
            <Link className='text-blue-500 pl-1' to='/register'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
