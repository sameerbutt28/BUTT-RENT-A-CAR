import React from "react";

const Booking = () => {
  return (
    <div
      className="flex flex-col m-4  p-6"
      style={{ boxShadow: "0px 2.98256px 7.4564px rgba(3, 0.7, 0.7, 0.7)" }}
    >
      <p className="text-2xl font-extrabold mb-1"> Book a car</p>

      <form className="box-form w-full mx-auto bg-white  px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-2">
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="car-type"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-4 h-4 align-middle mr-2"
              >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
              </svg>
              Select Your Car Type <span className="text-red-500">*</span>
            </label>
            <select
              id="car-type"
              name="car_type"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Select your car type</option>
              <option
                value="civic
                           "
              >
                civic
              </option>
              <option
                value="grande
                           "
              >
                grande
              </option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option
                value="audi-etron
                            "
              >
                audi-etron
              </option>
              <option
                value="kia-sportage
                           "
              >
                kia-sportage
              </option>
              <option
                value="revo
                           "
              >
                revo
              </option>
            </select>
          </div>
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pick-up-location"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-4 h-4 align-middle mr-2"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              Pick-up <span className="text-red-500">*</span>
            </label>
            <select
              id="pick-up-location"
              name="pickup_location"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Select pick up location</option>
              <option>Gujar Khan</option>
              <option>Mandra</option>
              <option>Rawat</option>
              <option>Rawalpindi</option>
              <option>Islamabad</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="drop-off-location"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-4 h-4 align-middle mr-2"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              Drop-off <span className="text-red-500">*</span>
            </label>
            <select
              id="drop-off-location"
              name="dropoff_location"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>Select drop off location</option>
              <option>Gujar Khan</option>
              <option>Mandra</option>
              <option>Rawat</option>
              <option>Rawalpindi</option>
              <option>Islamabad</option>
            </select>
          </div>
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pick-time"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-4 h-4 align-middle mr-2"
              >
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 3l0 4"></path>
                <path d="M8 3l0 4"></path>
                <path d="M4 11l16 0"></path>
                <path d="M8 15h2v2h-2z"></path>
              </svg>
              Pick-up <span className="text-red-500">*</span>
            </label>
            <input
              id="pick-time"
              name="pickup_date"
              type="date"
              value=""
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="drop-time"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block w-4 h-4 align-middle mr-2"
              >
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 3l0 4"></path>
                <path d="M8 3l0 4"></path>
                <path d="M4 11l16 0"></path>
                <path d="M8 15h2v2h-2z"></path>
              </svg>
              Drop-off <span className="text-red-500">*</span>
            </label>
            <input
              id="drop-time"
              name="dropoff_date"
              type="date"
              value=""
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
        <button className="m-2 font-bold bg-yellow-500 p-4 border-black">
          <a href="#"> Search </a>
        </button>
      </form>
    </div>
  );
};

export default Booking;
