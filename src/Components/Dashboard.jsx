// src/components/Dashboard.jsx
import React, { useState } from 'react';
import EventCard from './EventCard';
import Category from './Category';

const Dashboard = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleCategorySelect = (category) => {
    if (category) {
      setFilteredEvents(events.filter((event) => event.category === category));
    } else {
      setFilteredEvents(events);
    }
  };

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