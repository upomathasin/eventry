import React from "react";
import Link from "next/link";
export default function ActionButtons({ formDetails }) {
  return (
    <div className={`w-full flex gap-4 mt-4 ${formDetails && "flex-1"}`}>
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      <Link
        href="/payment"
        className=" text-center rounded p-2 w-full bg-green-600 hover:bg-green-700"
      >
        Going
      </Link>
    </div>
  );
}
