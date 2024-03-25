import Bigcar from "../assets/big.png"
import image from "../assets/yellow.png";

const Hero = () => {
  return (
       <div id="hero" className='flex flex-row  justify-between  w-full '>
            
<div className='flex flex-col mt-10 ml-10'>
<p className=" font-bold text-xl">Plan your trip now</p>
<div className="flex flex-row">
    <p className="text-6xl font-extrabold">Save &nbsp;  </p>
<p className="text-6xl font-extrabold text-yellow-500"> big </p>
<p className="text-6xl font-extrabold">&nbsp;  with our </p>
</div>
<p className="text-7xl font-extrabold">  car rental</p>
<p className="mt-3 text-gray-700">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible </p>
<p className=" text-gray-700"> pick-up options and much more.</p>
<button className="m-2 font-bold bg-yellow-500  p-4 border-black">
        <a href="#">Book Ride Now</a>
          
        </button>
</div>
<div >
<img style={{ width: '500px', 
height: '600px' }} src={Bigcar} alt="landingcar" />
</div>


    </div>



   
   
  )
}

export default Hero
