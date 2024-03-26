import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import { useState, useEffect } from "react";

const Collection = () => {
  const [carType, setCarType] = useState("");
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carColor, setCarColor] = useState("");
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
      });
  
      console.log("Document added successfully");
  
      // Clear the form after adding data
      setCarType("");
      setCarName("");
      setCarModel("");
      setCarColor("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={addData}
        className="mb-10 flex flex-col justify-center items-center gap-2"
      >
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
        <button
          type="submit"
          className="m-2 font-bold bg-yellow-500 py-2 px-7 border-black"
        >
          Submit
        </button>
      </form>
      <div>
        <h2>Car Collection</h2>
        <ul>
          {carsData.map((car) => (  
            <li key={car.id}>
              Type: {car.carType}, Name: {car.carName}, Model: {car.carModel}, Color: {car.carColor}
            </li>
          ))}
        </ul>
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
