import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/query";
import React from "react";

export default async function page({ params: { id } }) {
  const event = await getEventById(id);
  console.log(event);
  return (
    <main>
      <section className="container">
        <HeroSection event={event}></HeroSection>
      </section>

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event}></EventDetails>
          <EventVanue location={event.location}></EventVanue>
        </div>
      </section>
    </main>
  );
}
