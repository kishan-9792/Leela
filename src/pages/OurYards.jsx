import { useState } from "react";
import yard from '../assets/yard.jpg';
import chairman from '../assets/chairman.png';


const tabs = [
  "Yard 2",
  "Yard 35",
  "Yard 84-D",
  "Yard 1"
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Yard 2");

  return (
    <div className="font-sans text-gray-800 p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-blue-900">Our Yards</h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center border-b border-gray-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base border border-b-0 transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "Yard 2" && (
        <div className="space-y-4 animate-fadeIn">
          <img
            src={yard} alt="Yard 2"
            className="w-full rounded shadow"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-green-700">
            Yard 2 - Leela Ship Recycling Pvt. Ltd.
          </h2>
          <p>
            One of the first yards in Alang to have a concrete floor, to receive
            HKC SOC from Class NK and get certified in ISO 30000:2009 standard.
            Yard 2 commenced its operations in 2008.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-1">
            <li>ISO 30000:2009</li>
            <li>ISO 9001:2015</li>
            <li>ISO 14001:2015</li>
            <li>ISO 45001:2018</li>
            <li>ISO 50001:2018</li>
          </ul>
          <p className="text-sm">
            Yard 2 has also obtained an independent verifier certificate for
            EUSRR compliance from IR Class.
          </p>
          <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90 transition">
            Read More
          </button>
        </div>
      )}

      {/* Chairman Section */}
      <div className="mt-12 animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2 text-blue-900">Chairman's Desk</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={chairman}
            alt="Chairman"
            className="w-28 h-28 object-cover rounded-full shadow"
          />
          <div>
            <h3 className="font-semibold text-lg text-blue-800">KOMALKANT F. SHARMA</h3>
            <p className="text-sm text-gray-600 mb-2">Chairman & Managing Director</p>
            <blockquote className="italic text-gray-700">
              “Business does not proceed in a straight line. The best of plans meticulously plotted to the last detail, can be put to the test by unexpected events.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
