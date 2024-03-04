import { app, analytics, firestore } from './firebase'; 
import 'firebase/firestore';

export default function Collection() {
  const [carType, setCarType] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');

  const addData = async (e) => {
    e.preventDefault();

    // Access the firestore instance directly
    const firestoreInstance = firestore;

    // Add data to Firestore collection
    try {
        const docRef = firestoreInstance.collection('cars').doc(); // Create a new document reference
        await docRef.set({
          carType,
          carName,
          carModel
        });
      
        console.log("Document written with ID: ", docRef.id);
      
        // Optionally, you can clear the form after adding data
        setCarType('');
        setCarName('');
        setCarModel('');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
  };

  return (
    <form onSubmit={addData} className='mb-10 flex flex-col justify-center items-center gap-2 '>
      <input type="text" placeholder='Enter car type' value={carType} onChange={(e) => setCarType(e.target.value)} />
      <input type="text" placeholder='Enter car name' value={carName} onChange={(e) => setCarName(e.target.value)} />
      <input type="text" placeholder='Enter car model' value={carModel} onChange={(e) => setCarModel(e.target.value)} />
      <button type="submit" className="m-2 font-bold bg-yellow-500 p-4 border-black">
        Add
      </button>
    </form>
  );
};