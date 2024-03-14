import Booking from "./components/Booking";
import Collection from "./components/Collection";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Vehicles from "./components/Vehicles";
export default function App() {
  return (
    <div className="max-conatiner">
      <div className="  " >
        <Navbar />
      </div>
      <div className=" mt-10 mb-10 " >
        <Hero />
      </div>
      <div className=" mt-10 mb-10 " >
        <Booking />
      </div>
      {/* <Collection/> */}
      <div className=" mt-10 mb-10 " >
        <Faq />
      </div>
      <div className=" mt-10 mb-10 " >
        <Vehicles />
      </div>
    </div>
  );
}
