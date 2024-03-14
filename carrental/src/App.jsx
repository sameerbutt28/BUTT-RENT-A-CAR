import Booking from "./components/Booking"
import Collection from "./components/Collection"
import Faq from "./components/Faq"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Vehicles from "./components/Vehicles"
export default function App() {
  return (
   <div className="max-conatiner">
    <Navbar/>
    <Hero/>  
    <Booking/>
    {/* <Collection/> */}
    <Faq/>

  <Vehicles/>
   </div>
  )
}