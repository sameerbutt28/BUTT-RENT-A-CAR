import image from "../assets/yellow.png";
export default function App() {
  return (
    <div className="flex justify-between z-10 w-full  bg-white  shadow-lg  mb-5 max-container" >
      <div className="m-4 flex flex-row ">
        <div>
          <img src={image} alt="logo" height={400} width={130} />
        </div>
        <div>
          <p className="font-extrabold text-yellow-500 font-mono text-4xl" 
           style={{
            // fontFamily: ['Black Ops One', 'cursive'] 
          }}
        >
            <a href="#">BUTT</a>
          </p>
          <p className="font-bold text-2xl">
            <a href="#">rent a car</a>
          </p>
        </div>
      </div>

      <div className="mt-8 ">
        <ul className="flex flex-row  font-semibold">
          <li className="m-2">
            <a href="#"> Home </a>
          </li>
          <li className="m-2">
            <a href="#"> About </a>
          </li>
          <li className="m-2">
            <a href="#"> Blogs </a>
          </li>
        </ul>
      </div>

      <div className="m-4">
        <button className="m-2 font-bold p-4 border-black">
          <a href="#">Sign In</a>
        </button>
        <button className="m-2  font-bold bg-yellow-500 px-7 py-3 border-black">
          <a href="#">Register</a>
        </button>
      </div>
    </div>
  );
}
