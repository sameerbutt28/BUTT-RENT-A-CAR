import React from 'react';

function Footer() {
  return (
    <footer className="shadow-lg py-12">
      <div className="container mx-auto flex flex-wrap justify-evenly">
        {/* First Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-3xl font-extrabold mb-4">BUTT 
           <span className='  font-normal'> rent a car</span>
          </h3>
          <p className="text-gray-600">We offer a wide range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
          <p className="mt-4 font-semibold">(123) -456-789</p>
          <p className='font-semibold mt-3'>buttrentacar@gmail.com</p>
          <p className="">Design by Dev. Sameer Ali Butt</p>
        </div>

        {/* Second Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl font-bold mb-4">COMPANY</h3>
          <ul className="text-gray-800">
            <li className='m-3'>New York</li>
            <li className='m-3'>Careers</li>
            <li className='m-3'>Mobile</li>
            <li className='m-3'>Blog</li>
            <li className='m-3'>How we work</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl font-bold mb-4">WORKING HOURS</h3>
          <p className="m-3">Mon - Fri: 9:00AM - 9:00PM</p>
          <p className=' m-3 '>Sat: 9:00AM - 19:00PM</p>
          <p className='m-2'>Sun: Closed</p>
        </div>

        {/* Fourth Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4">
          <h3 className="text-2xl font-bold mb-4">SUBSCRIPTION</h3>
          <form>
            <input type="email" placeholder="Enter Email Address" className="w-full bg-gray-200 rounded px-3 py-2 mb-2 text-gray-700" />
            <button className="m-4font-bold bg-yellow-500 p-2 font-bold w-full border-black">
        <a href="#">Submit</a>
          
        </button>          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
