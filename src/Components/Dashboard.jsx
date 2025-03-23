// src/components/Dashboard.jsx
import React, { useState } from 'react';
import EventCard from './EventCard';
import Category from './Category';

const Dashboard = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [slideIndex, setSlideIndex] = useState(0); // Track the current slide index

  const handleCategorySelect = (category) => {
    if (category) {
      setFilteredEvents(events.filter((event) => event.category === category));
    } else {
      setFilteredEvents(events);
    }
  };

  // Sliding window logic
  const slideLeft = () => {
    setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const slideRight = () => {
    setSlideIndex((prevIndex) =>
      prevIndex < filteredEvents.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Get the current event to display in the sliding window
  const currentEvent = filteredEvents[slideIndex];

  return (
    <div className="p-4 bg-[#EEF5DB] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#210203]">What event are you looking for...</h1>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search events..."
            className="w-full p-3 border rounded-lg focus:outline-none border-[#210203] text-[#210203]"
          />
          <Category onSelectCategory={handleCategorySelect} />
        </div>

        {/* Trending Events Section */}
        <h2 className="text-xl font-bold mb-4 text-[#210203]">Trending Events</h2>

        {/* Sliding Window Section */}
        <div className="relative mb-8">
          <div className="flex justify-center">
            {currentEvent && (
              <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <p className="text-white text-lg font-bold">{currentEvent.title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Left Navigation Button */}
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#210203] text-[#EEF5DB] p-3 rounded-full shadow-lg hover:bg-[#000000] transition duration-300"
          >
            &lt;
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#210203] text-[#EEF5DB] p-3 rounded-full shadow-lg hover:bg-[#000000] transition duration-300"
          >
            &gt;
          </button>
        </div>

        {/* Gap and Events Heading */}
        <div className="mt-12 mb-6">
          <h2 className="text-xl font-bold text-[#210203]">Events</h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;