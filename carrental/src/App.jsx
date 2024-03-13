import Booking from "./components/Booking"
import Collection from "./components/Collection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
export default function App() {
  return (
   <div className="max-conatiner">
    <Navbar/>
    <Hero/>
    <Booking/>
    {/* <Collection/> */}
   </div>
  )
}