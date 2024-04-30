import PaymentForm from "@/components/PaymentForm";
import React from "react";

export default function Payment({ params: { eventId } }) {
  return <PaymentForm eventId={eventId}></PaymentForm>;
}
