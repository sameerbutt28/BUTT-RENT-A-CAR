import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from "./components/Booking";
import Collection from "./components/Collection";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Vehicles from "./components/Vehicles";
import Footer from "./components/Footer";
import AboutPage from "./navs/About";

export default function App() {
  return (
    <Router>
      <div className="max-container">
        <div>
          <Navbar />
          
          
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <div className="mt-10 mb-10">
                <Hero />
              </div>
              <div className="mt-10 mb-10">
                <Booking />
              </div>
              <div className="mt-10 mb-10">
                <Faq />
              </div>
              <div className="mt-10 mb-10">
                <Vehicles />
              </div>
              <div className="mt-10 mb-10">
                <Questions />
              </div>
            </>
          } />
         
          <Route path="/about" element={<AboutPage />} />
          {/* Add more Route components for other pages if needed */}
        </Routes>
        <div className="mt-20 ">
          <br />
          <br />
          <br />
         

          <Footer />
        </div>
      </div>
    </Router>
  );
}
