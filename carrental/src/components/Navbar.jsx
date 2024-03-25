import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import yellow from "../assets/yellow.png"

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="flex justify-between z-10 w-full bg-white shadow-lg mb-5 max-container">
      <div className="m-4 flex flex-row">
        <div>
          <img src={yellow} alt="logo" height={190} width={150} />
        </div>
        <div>
          <p className="font-extrabold text-yellow-500 font-mono text-4xl">
            <a href="#">BUTT</a>
          </p>
          <p className="font-bold text-2xl">
            <a href="#">rent a car</a>
          </p>
        </div>
      </div>      

      <div className="mt-8">
        <ul className="flex flex-row font-semibold">
          <li className="m-2">
            <Link to="/" className={`hover:text-yellow-500 ${location.pathname === '/' ? 'text-yellow-500' : ''}`}>Home</Link>
          </li>
          <li className="m-2">
            <Link to="/about" className={`hover:text-yellow-500 ${location.pathname === '/about' ? 'text-yellow-500' : ''}`}>About</Link>
          </li>
          <li className="m-2">
            <a href="#">Blogs</a>
          </li>
        </ul>
      </div>

      <div className="m-4">
       <button className="m-2 font-bold p-4 border-black">
          <a href="#">Sign In</a>
        </button>
        <button className="m-2  font-bold bg-yellow-500 px-7 py-3 border-black">
          <a href="#">Register</a>
        </button>
      </div>
    </div>
  );
}
