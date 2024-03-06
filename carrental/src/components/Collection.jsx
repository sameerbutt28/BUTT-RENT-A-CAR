import {  doc, setDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import { useState } from "react";
        

export default function Collection() {
  const [carType, setCarType] = useState("");
  const [carName, setCarName] = useState("");
  const [carModel, setCarModel] = useState("");
     
  const addData = async (e) => {
    e.preventDefault();

    try {
      // Reference to the 'cars' collection with 'carType' as the document ID
      const carDocRef = doc(firestore, "cars", carType);

      // Set data to the specified document
      await setDoc(carDocRef, {
        // carType: carType,
        // carDetails: {
        carName: carName,
        carModel: carModel,
        // }
      });

      console.log("Document written with ID: ", carType);

      // Optionally, you can clear the form after adding data
      setCarType("");
      setCarName("");
      setCarModel("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form
      onSubmit={addData}
      className="mb-10 flex flex-col justify-center items-center gap-2 "
    >
      <input
        type="text"
        placeholder="Enter car type"
        value={carType}
        onChange={(e) => setCarType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter car name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter car model"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
      />
      <button
        type="submit"
        className="m-2 font-bold bg-yellow-500 p-4 border-black"
      >
        Add
      </button>
    </form>
  );
}
