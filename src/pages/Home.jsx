import React from 'react'
import Navbar from '../component/Navbar'
import About from './About'
import team from '../assets/team.jpg';

const Home = () => {
  return (
    <div>
      <Navbar/>
     
      <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
    </div>
    {/* Recent Recognition */}
      <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
        {/* Text part */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Recent Recognition</h2>
          <p className="text-gray-600">
            We are always looking for opportunities to leverage the latest technologies and collaborate 
            with organizations to enhance our training programs, bring new career opportunities, and 
            leave a positive impact on the environment through our operations.
          </p>
        </div>
        {/* Card */}
        <div className="md:w-1/2 bg-white shadow-md rounded overflow-hidden max-w-md">
          <img src={team} alt="Team" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold mb-1">MOU signed between Leela Worldwide and Sir Bhavsinhji Polytechnic Institute</h3>
            <p className="text-gray-600 text-sm mb-2">
              With an aim to promote Ship Recycling and Maritime Education, Leela Ship Recycling Pvt. Ltd....
            </p>
            <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800">
              Read More
            </button>
          </div>
        </div>
      </section>
     <About/>
    </div>
  )
}

export default Home
