import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <EventCard></EventCard>
      <EventCard></EventCard>
    </div>
  );
}
