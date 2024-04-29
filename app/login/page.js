import LoginForm from "@/components/LoginForm";
import React from "react";
import Link from "next/link";
export default function Loginpage() {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <LoginForm></LoginForm>

        <span className="text-center text-xs text-gray-500">
          Don't have an account?
          <Link
            className="underline hover:text-indigo-600"
            href="/registration"
          >
            Register
          </Link>
        </span>
      </div>
    </section>
  );
}
