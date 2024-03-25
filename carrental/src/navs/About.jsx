const About = () => {
    return (
      <div className="flex flex-col  justify-center ">
          <br />
          <br />
          <br />
          <br />
        
        <div className="flex flex-col items-center justify-center m-6 p-2">
          <p className="font-bold text-xl text-center p-2">Plan your trip now</p>
          <p className="text-5xl font-extrabold text-center p-2">
            Quick & easy car rental
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly ">
          <div
            className="flex flex-col justify-center items-center text-center p-2"
            style={{ maxWidth: "400px" }}
          >
            <img src="" alt="img1" className="p-2" />
            <p className=" font-bold text-xl p-2">Select car</p>
            <p className="text-gray-600 p-3">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center p-2"
            style={{ maxWidth: "400px" }}
          >
            <img src="" alt="img2" className="p-2" />
            <p className=" font-bold text-xl p-2">Contact operator</p>
            <p className="text-gray-600 p-3">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center p-2"
            style={{ maxWidth: "400px" }}
          >
            <img src="" alt="img3" className="p-2" />
            <p className=" font-bold text-xl p-2">Let's drive</p>
            <p className="text-gray-600 p-3">
              Whether you're hitting the open road, we've got you covered with our
              wide range of cars
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  