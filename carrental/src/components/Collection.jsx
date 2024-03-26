import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import { useState, useEffect } from "react";

const Collection = () => {
  const [carType, setCarType] = useState("");
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
  const [cc, setCc] = useState("");
  const [carRent, setCarRent] = useState("");
  const [carSeats, setCarSeats] = useState("");
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carsCollectionRef = collection(firestore, "cars");
        const querySnapshot = await getDocs(carsCollectionRef);
        
        // Iterate over each document in the collection
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        setCarsData(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, []);

  const addData = async (e) => {
    e.preventDefault();
  
    try {
      // Reference to the 'cars' collection
      const carsCollectionRef = collection(firestore, "cars");
  
      // Add a new document with auto-generated ID
      await addDoc(carsCollectionRef, {
        carType: carType,
        carName: carName,
        carModel: carModel,
        carColor: carColor,
        cc: cc,
        carRent: carRent,
        carSeats: carSeats,

      });
   
      console.log("Document added successfully");
  
      // Clear the form after adding data
      setCarType("");
      setCarName("");
      setCarModel("");
      setCarColor("");
      setCc("");
      setCarRent("");
      setCarSeats("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
<form
  onSubmit={addData}
  className="m-10 flex flex-col justify-center items-center gap-4"
>
  <div className="flex flex-wrap justify-between w-full gap-4 m-8">
    <div className="flex flex-col">
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter car type"
        value={carType}
        onChange={(e) => setCarType(e.target.value)}
      />
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter car name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter car model"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
      />
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter car color"
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter your car CC"
        value={cc}
        onChange={(e) => setCc(e.target.value)}
      />
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="Enter your car rent"
        value={carRent}
        onChange={(e) => setCarRent(e.target.value)}
      />
    </div>
    <div className="flex flex-col">
      <input
        className="mt-3 p-2"
        type="text"
        placeholder="No. of seats in car"
        value={carSeats}
        onChange={(e) => setCarSeats(e.target.value)}
      />
    </div>
  </div>
  <button
    type="submit"
    className="m-2  font-bold bg-yellow-500 py-3 px-10 border-black"
  >
    Submit  
  </button>
</form>

      <div>
        <br />
        <br />
        <br />

  <h2 className="text-3xl font-bold text-center  mt-6  text-gray-800">Car Collection</h2>
  <div className="grid grid-cols-1 m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {carsData.map((car) => (  
      <div key={car.id} className="bg-white border m-5 border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-lg transition text-center duration-300">
        <h3 className="text-lg font-semibold mb-2">{car.carName}</h3>
        <p className="text-gray-800"><span className="font-bold">Type:</span> {car.carType}</p>
        <p className="text-gray-800"><span className="font-bold">Model:</span> {car.carModel}</p>
        <p className="text-gray-800"><span className="font-bold">Color:</span> {car.carColor}</p>
        <p className="text-gray-800"><span className="font-bold">Engine:</span> {car.cc + " cc"}</p>
        <p className="text-gray-800"><span className="font-bold">Rent:</span> {car.carRent  + "$"}</p>
        <p className="text-gray-800"><span className="font-bold">No. of seats:</span> {car.carSeats}</p>
        <button className="m-3 font-bold bg-yellow-500  px-5 py-2 border-black">
        <a href="#">Book Now.</a>
          
        </button>
      </div>
    ))}
  </div>
</div>


      <br />
        <br />
        <br />  
        <div className=" bg-zinc-900 flex flex-row justify-evenly mt-10 p-6">
<p className="text-3xl font-bold text-white items-center text-center mt-6   p-3">

Book a car by getting in touch with us
</p>
<div className="flex flex-row justify-evenly m-3 p-4  ">
<p className="text-yellow-500 text-3xl font-bold">
☎️ (123) 456-7869</p>



</div>
      </div>
    </div>
  );
};

export default Collection;
