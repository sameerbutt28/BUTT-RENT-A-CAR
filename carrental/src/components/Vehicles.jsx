import { useState } from "react";

const Vehicles = () => {
  const [data, setData] = useState({
    model: "rs",
    mark:"honda",  
    year:"2019",
    doors:"2",
    AC: "yes",
    fuel:"petrol",
    rent:"$35"
  });
  const handlehonda = () => {
    setData({
      model: "rs",
      mark:"honda",
      year:"2019",
      doors:"2",
      AC: "yes",
      fuel:"petrol",
      rent:"$35"
    });
  };
  const handecivic = () => {
    setData({
      model: "turbo",
      mark:"civic",
      year:"2018",
      doors:"4",
      AC: "yes",
      fuel:"petrol",
      rent:"$24"
    });
  };
  const handleaudi = () => {
    setData({
      model: "gt",
      mark:"audi",
      year:"2023",
      doors:"2",
      AC: "no",
      fuel:"electric",
      rent:"$50"
    });
  };
  const handlegtr= () => {
    setData({
      model: "g-28",
      mark:"gtr",
      year:"2015",
      doors:"4",
      AC: "yes",
      fuel:"petrol",
      rent:"$15"
    });
  };
 
  return (
    <div>
      <div className="flex flex-col items-center justify-center m-6 p-2">
        <p className="font-bold text-xl text-center p-2">Vehicle Models</p>
        <p className="text-5xl font-extrabold text-center p-2">
          Our rental fleet{" "}
        </p>
        <p className="text-gray-600 p-3">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-row  justify-evenly ">
        <div className="flex flex-col">
          <button
            onClick={handlehonda}
            className="m-2 font-bold bg-yellow-500 p-4 border-black "
          >
            {" "}
            honda
          </button>
          <button
            onClick={handecivic}
            className="m-2 font-bold bg-yellow-500 p-4 border-black "
          >
            {" "}
            civic
          </button>
          <button             onClick={handleaudi}
 className="m-2 font-bold bg-yellow-500 p-4 border-black">
            {" "}
            audi
          </button>
          <button             onClick={handlegtr}
 className="m-2 font-bold bg-yellow-500 p-4 border-black">
            {" "}
            gtr
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src="" alt="car-img" />
        </div>
        <div>
        <table border="1">
  <thead>
    <tr>
      <th>{data.rent}</th>
      <th>/ rent per day</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Model</td>
      <td>{data.model}</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>{data.mark}</td>
    </tr>
    <tr>
      <td>Year</td>
      <td>{data.year}</td>
    </tr>
    <tr>
      <td>Doors</td>
      <td>{data.doors}</td>
    </tr>
    <tr>
      <td>AC</td>
      <td>{data.AC}</td>
    </tr>
    <tr>
      <td>Fuel</td>
      <td>{data.fuel}</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
