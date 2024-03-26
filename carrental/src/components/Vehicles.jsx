import { useState } from "react";

const Vehicles = () => {
  const [data, setData] = useState({
    model: "Gli",
    mark:"Grande",    
    year:"2019",  
    doors:"2",
    AC: "Yes",   
    fuel:"Petrol",
    rent:"$35"
  });
  const handlegrande = () => {
    setData({
      model: "Gli",
      mark:"Grande",    
      year:"2019",  
      doors:"2",
      AC: "Yes",   
      fuel:"Petrol",
      rent:"$35"
    });
  };
  const handecivic = () => {
    setData({
      model: "Turbo",
      mark:"Civic",
      year:"2018",
      doors:"4",
      AC: "Yes",
      fuel:"Diesel",
      rent:"$24"
    });
  };
  const handleaudi = () => {
    setData({
      model: "Etron-gt",
      mark:"Audi",
      year:"2023",
      doors:"2",
      AC: "Yes",
      fuel:"Electric",
      rent:"$50"
    });
  };
  const handlegtr= () => {
    setData({
      model: "G-28",
      mark:"Gtr",
      year:"2015",
      doors:"4",
      AC: "Yes",
      fuel:"Petrol",
      rent:"$15"
    });
  };
  const handlelexux= () => {
    setData({
      model: "570",
      mark:"Lexus",
      year:"2017",
      doors:"5",
      AC: "Yes",
      fuel:"Petrol",
      rent:"$65"
    });
  };
 
 
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-6 p-2">
        <p className="font-bold text-2xl text-center p-2">Vehicle Models</p>
        <p className="text-3xl font-extrabold text-center p-2">
          Our rental fleet{" "}
        </p>
        <p className="text-gray-600 text-lg p-3">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-row  justify-evenly ">
        <div className="flex flex-col">
          <button
            onClick={handlegrande}
            className="m-2 font-bold bg-gray-200 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-500 active:text-black text-black p-6 border-black"
          >
            Grande
          </button>
          <button
            onClick={handecivic}
            className="m-2 font-bold bg-gray-200 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-500 active:text-black text-black p-6 border-black"
          >
            Civic
          </button>
          <button
            onClick={handleaudi}
            className="m-2 font-bold bg-gray-200 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-500 active:text-black text-black p-6 border-black"
          >
            Audi
          </button>
          <button
            onClick={handlegtr}
            className="m-2 font-bold bg-gray-200 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-500 active:text-black text-black p-6 border-black"
          >
            GTR
          </button>
          <button
            onClick={handlelexux}
            className="m-2 font-bold bg-gray-200 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-500 active:text-black text-black p-6 border-black"
          >
            Lexux 570
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img src="" alt="car-img" />
        </div>
        <div className="p-6 rounded-lg ">
          <table className="w-full border-collapse border border-gray-900 text-lg items-center">
            <thead className="bg-yellow-500 text-black">
              <tr>
                <th className="py-4 px-6 text-center  font-bold text-gray-800">{data.rent}</th>
                <th className="py-4 px-6 text-center  font-bold">/ rent per day</th>
               </tr>
            </thead> 
            <tbody>
              <tr>
                <td className="py-4 px-6 text-center border font-bold">Model</td>
                <td className="py-4 px-6 text-center border font-bold text-gray-500">{data.model}</td>
              </tr>
              <tr className="text-center">
                <td className="py-4 px-6 border font-bold ">Mark</td>
                <td className="py-4 px-6 border font-bold text-gray-500">{data.mark}</td>
              </tr>
              <tr className="text-center">
                <td className="py-4 px-6 border font-bold">Year</td>
                <td className="py-4 px-6 border font-bold text-gray-500">{data.year}</td>
              </tr>
              <tr className="text-center">
                <td className="py-4 px-6 border font-bold">Doors</td>
                <td className="py-4 px-6 border font-bold text-gray-500">{data.doors}</td>
              </tr>
              <tr className="text-center">
                <td className="py-4 px-6 border font-bold">AC</td>
                <td className="py-4 px-6 border font-bold text-gray-500">{data.AC}</td>
              </tr>
              <tr className="text-center">
                <td className="py-4 px-6 border font-bold">Fuel</td>
                <td className="py-4 px-6 border font-bold text-gray-500">{data.fuel}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
      </div>

      <br />
      <br /><br />
      <div className=" bg-zinc-900 flex flex-col justify-center">
<p className="text-5xl font-bold text-white items-center text-center mt-6   p-3">
<span className="text-yellow-500">
  Save big &nbsp; 
</span>
 with our cheap car renting!
</p>
<div className="flex flex-row justify-evenly m-3 p-4  ">
<p className="text-gray-300 text-xl">
Top Airports
</p>
<p className="text-gray-300 text-xl">
Local Suppliers
</p>
<p className="text-yellow-500 font-bold text-xl">
24/7 
</p>
<p className="text-gray-300 text-xl">
Support
</p>


</div>
      </div>
    </div>
  );
};

export default Vehicles;
