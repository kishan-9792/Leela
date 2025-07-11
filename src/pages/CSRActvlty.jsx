import React from "react";

const data = [
  {
    title: "Leela Games 2022",
    description:
      "Under the guidance of Leela Worldwide Chairman and Managing Director (Mr. Komalkant F. Sharma), Mr. Vishaal Raj Soni (CEO) with the help of Mr. Prabha...",
    image: "https://leelagreenship.com/wp-content/uploads/2023/09/leelagames.png",
  },
  {
    title: "Soft Skill Development Training",
    description:
      "Conducted by the certified trainer Mr. Mansur Modan, Founder – Corner India and ISTD Bhavnagar Secretary, Leela Group of Ship Recycling Yards condu...",
    image:
      "https://leelagreenship.com/wp-content/uploads/2023/09/softskill.png",
  },
  {
    title: "Train The Trainer Program",
    description:
      "At Leela Worldwide, ensuring the safety of our workers is our topmost priority. We firmly believe in enhancing the knowledge and skills of our employ...",
    image: "https://leelagreenship.com/wp-content/uploads/2023/06/trainthetrainer.png",
  },
  {
    title: "Celebrating World Environment Day",
    description:
      "As a part of World Environment Day celebration, Leela Group of Ship Recycling Yards distributed 1000 jute bags to replace single use plastic, collect...",
    image: "https://leelagreenship.com/wp-content/uploads/2023/06/worldenviornmentday.png",
  },
];

export default function CorporateSustainability() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-900">
        Corporate Sustainability
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* First two cards full width */}
        {data.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow hover:shadow-md overflow-hidden flex flex-col"
          >
            <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">{item.description}</p>
              <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90 self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
        {/* Last two cards smaller */}
        {data.slice(2).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow hover:shadow-md overflow-hidden flex flex-col"
          >
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">{item.description}</p>
              <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90 self-start">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
