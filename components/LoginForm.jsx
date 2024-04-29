"use client";
import { performLogin } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const found = await performLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError(" Information is invalid");
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <div>
      <div className="my-2 text-red-500">{error}</div>

      <form className="login-form" onSubmit={handleLogin}>
        <div>
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
