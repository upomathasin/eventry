import EventDetails from "@/components/details/EventDetails";
import EventVanue from "@/components/details/EventVanue";
import HeroSection from "@/components/details/HeroSection";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="container">
        <HeroSection></HeroSection>
      </section>

      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails></EventDetails>
          <EventVanue></EventVanue>
        </div>
      </section>
    </main>
  );
}
