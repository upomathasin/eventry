import Loading from "@/components/Loading";
import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Image from "next/image";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header></Header>
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query}></EventList>
      </Suspense>
    </section>
  );
}
