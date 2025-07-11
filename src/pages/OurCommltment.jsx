import React from "react";
import { FaLeaf, FaRecycle, FaUserShield, FaUsers, FaShip, FaEye, FaChartLine, FaHandsHelping } from "react-icons/fa";

const items = [
  { icon: <FaLeaf size={40} className="text-green-600 mb-2" />, title: "Environmental Protection" },
  { icon: <FaRecycle size={40} className="text-green-600 mb-2" />, title: "Hazardous Waste Management" },
  { icon: <FaUserShield size={40} className="text-green-600 mb-2" />, title: "Occupational Health and Safety" },
  { icon: <FaUsers size={40} className="text-green-600 mb-2" />, title: "Workers’ Welfare" },
  { icon: <FaShip size={40} className="text-green-600 mb-2" />, title: "Responsible Ship Recycling" },
  { icon: <FaEye size={40} className="text-green-600 mb-2" />, title: "Transparency" },
  { icon: <FaChartLine size={40} className="text-green-600 mb-2" />, title: "Continual Improvement" },
  { icon: <FaHandsHelping size={40} className="text-green-600 mb-2" />, title: "Social Responsibility" },
];

export default function OurCommitment() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white bg-opacity-90 rounded shadow-md">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-3">
        Our Commitment
      </h2>
      <p className="text-center text-green-700 mb-6 max-w-3xl mx-auto">
        Being the leading ship recycling group in Alang, we strive to protect the health of
        the environment and uplift the standard of living of society through sustainable
        ship recycling practices.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded hover:shadow"
          >
            {item.icon}
            <p className="text-center text-sm font-medium text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
