import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/db/query";

export default async function EventList({ query }) {
  const events = await getAllEvents(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {events &&
        events.map((event) => {
          return (
            <EventCard key={event._id.toString()} event={event}></EventCard>
          );
        })}
    </div>
  );
}
