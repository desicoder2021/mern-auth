import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className='container mx-auto'>
      <div className='text-center'>
        <h1 className='text-6xl text-white font-bold tracking-wider pt-48'>
          Professional deveploment
        </h1>
        <p className='text-2xl pt-4 text-white tracking-wide'>
          Learn more, earn more!
        </p>
        <div className='pt-4 space-x-4'>
          <button className='rounded-sm bg-blue-600 px-4 py-3 text-white'>
            <Link to='/register'>Register</Link>
          </button>
          <button className='rounded-sm bg-blue-600 px-4 py-3 text-white'>
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
