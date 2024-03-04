import Collection from "./components/Collection"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
export default function App() {
  return (
   <div className="max-conatiner">
    <Navbar/>
    <Landing/>
    <Collection/>
   </div>
  )
}