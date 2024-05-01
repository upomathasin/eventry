"use client";
import React, { useState, useTransition } from "react";
import Link from "next/link";
import useAuth from "@/app/hooks/useAuth";
import { addInterestEvent } from "@/app/actions";
import { useRouter } from "next/navigation";
export default function ActionButtons({
  eventId,
  interested_ids,
  going_ids,
  formDetails,
}) {
  const { auth } = useAuth();
  const isInterested = interested_ids?.find(
    (id) => id.toString() === auth?._id
  );
  const isGoing = going_ids?.find((id) => id.toString() === auth?._id);
  const router = useRouter();
  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isGoing);
  const [isPending, startTranaction] = useTransition();

  const toggleInterested = () => {
    if (auth) {
      addInterestEvent(eventId, auth?._id);
      setInterested(!interested);
    }
  };
  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };
  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button
        className={`w-full ${
          interested && " bg-indigo-600 hover:bg-indigo-800"
        }`}
        onClick={() => startTranaction(() => toggleInterested())}
      >
        Interested
      </button>

      <button
        disabled={auth && going}
        onClick={markGoing}
        className=" text-center rounded p-2 w-full "
      >
        Going
      </button>
    </div>
  );
}
