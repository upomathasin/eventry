import React from "react";
import ActionButtons from "../ActionButtons";

export default function HeroSection({ event }) {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="h-[450px] mx-auto"
        />
      </div>
      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{event.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{event.interested_ids.length} Interested</span>
            <span className="mx-1">|</span>
            <span>{event.going_ids.length} Going</span>
          </div>
        </div>

        <div className="w-full flex gap-4 mt-4 flex-1 ">
          <ActionButtons
            eventId={event._id}
            interested_ids={event.interested_ids}
            formDetails={true}
          ></ActionButtons>
        </div>
      </div>
    </div>
  );
}
