import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";

const Register = ({ register }) => {
  const [formData, updateFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpw: "",
  });
  const { name, email, password, confirmpw } = formData;

  // onChange handler configured to handle change for all fields
  const onChange = (e) =>
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpw) {
      console.log("Password must match");
    } else {
      register({ name, email, password });
      // console.log(formData);
    }
  };
  return (
    <div className='bg-white h-screen'>
      <div className='container mx-auto'>
        <h1 className='text-blue-500 text-5xl pt-4'>Register</h1>
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
                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
              />
            </svg>
          </span>
          <span>Specify your account info</span>
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='mb-4'>
            <input
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
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
          <div className='mb-4'>
            <input
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Confirm Password'
              name='confirmpw'
              value={confirmpw}
              onChange={(e) => onChange(e)}
              minLength='4'
            />
          </div>
          <input
            className='rounded-sm bg-blue-600 px-4 py-3 text-white cursor-pointer'
            type='submit'
            value='Register'
          />
          <p className='pt-2'>
            Already have an account?{" "}
            <Link className='text-blue-500 pl-1' to='/login'>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { register })(Register);
