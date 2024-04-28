import React from "react";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
export default function EventCard({ event }) {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event.imageUrl}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />
      <div className="p-3">
        <Link
          href={`details/${event._id.toString()}`}
          className="font-bold text-lg"
        >
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event.interested_ids.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{event.going_ids.length} Going</span>
        </div>
        <ActionButtons></ActionButtons>
      </div>
    </div>
  );
}
