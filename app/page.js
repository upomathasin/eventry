import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <Header></Header>
      <EventList></EventList>
    </section>
  );
}
