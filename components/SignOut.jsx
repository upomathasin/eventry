"use client";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleSignOut = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <div>
      {auth ? (
        <div>
          <span>Welcome {auth?.name}</span>
          <span className="mx-2">||</span>
          <a className=" cursor-pointer" onClick={handleSignOut}>
            Logout
          </a>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
