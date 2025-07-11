import React from 'react'
import Navbar from '../component/Navbar'
import Ship from '../assets/Ship.png';

const About = () => {
  return (
    <div>
      
      <div className="font-sans text-gray-800">
      {/* About us */}
      <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
        {/* Image */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8">
          <img src={Ship}alt="Ship" className="rounded shadow-md" />
        </div>
        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">About us</h2>
          <h3 className="text-green-700 font-medium mb-2">The Leela Group of Ship Recycling Yards</h3>
          <p className="text-gray-600 mb-2">
            The group is the flagship venture of the Leela Worldwide group established by the visionary Mr. Komalkant F. Sharma in 2008.
            It’s the most prominent green ship recycling group at Alang, home to the world’s most extensive stretch of ship recycling yards.
            Mr. Vishaal Raj Soni heads the Leela Group of Ship Recycling Yards as the CEO.
          </p>
          <ul className="list-disc list-inside mb-3 text-gray-700">
            <li>Leela Ship Recycling Pvt. Ltd. (Yard-2)</li>
            <li>Leela Greenship Recycling Pvt. Ltd. (Yard-35)</li>
            <li>Leela Sustainable Ship Recycling Pvt. Ltd. (Yard-84D)</li>
            <li>Leela Responsible Recycling LLP (Yard-1)</li>
          </ul>
          <button className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800">
            Read More
          </button>
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default About
