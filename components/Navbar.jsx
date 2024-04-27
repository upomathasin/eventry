import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={138}
              height={138}
              alt="Eventry"
              className="h-[45px]"
            />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
