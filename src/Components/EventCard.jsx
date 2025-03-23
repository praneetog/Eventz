// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src={event.image || 'https://via.placeholder.com/400x200'} // Fallback image if none is provided
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-[#210203]">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.date}</p>
        <p className="text-gray-600 mb-2">{event.location}</p>
        <p className="text-lg font-bold mb-4 text-[#210203]">{event.price}</p>
        <button
          className="w-full py-2 rounded-lg transition duration-300 bg-[#210203] text-[#EEF5DB] hover:bg-[#000000]"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;