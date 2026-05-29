"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <header
        className="
          fixed
          top-[31px]
          left-1/2
          z-50
          hidden
          h-[47px]
          w-[716.46px]
          -translate-x-1/2
          items-center
          justify-between
          rounded-[12px]
          px-[10px]
          py-[9px]
          md:flex
        "
        style={{
          background: "rgba(47,47,47,0.7)",
          backdropFilter: "blur(15px)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            font-[var(--font-archivo)]
            text-[24px]
            font-medium
            leading-[120%]
            text-white
          "
        >
          N7
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <button className="flex items-center gap-1 font-[var(--font-chivo)] text-[12px] uppercase text-[#E9F4F9]">
            Solutions
            <ChevronDown size={12} />
          </button>

          <button className="flex items-center gap-1 font-[var(--font-chivo)] text-[12px] uppercase text-[#E9F4F9]">
            Resources
            <ChevronDown size={12} />
          </button>

          <Link
            href="/"
            className="font-[var(--font-chivo)] text-[12px] uppercase text-[#E9F4F9]"
          >
            About Us
          </Link>
        </nav>

        {/* Request Demo */}
        <button
          className="
            flex
            h-[29px]
            min-w-[120px]
            items-center
            justify-center
            rounded-[6px]
            border
            border-white/50
            px-5
            font-[var(--font-chivo)]
            text-[12px]
            uppercase
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Request Demo
        </button>
      </header>

      {/* Mobile Navbar */}
      <div className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div
          className="
            flex
            h-[56px]
            items-center
            justify-between
            rounded-xl
            px-4
          "
          style={{
            background: "rgba(47,47,47,0.7)",
            backdropFilter: "blur(15px)",
          }}
        >
          <h1 className="font-[var(--font-archivo)] text-2xl text-white">
            N7
          </h1>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {open && (
          <div
            className="
              mt-2
              rounded-xl
              p-4
            "
            style={{
              background: "rgba(47,47,47,0.9)",
              backdropFilter: "blur(15px)",
            }}
          >
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white">
                Solutions
              </Link>

              <Link href="/" className="text-white">
                Resources
              </Link>

              <Link href="/" className="text-white">
                About Us
              </Link>

              <button
                className="
                  mt-2
                  rounded-lg
                  py-3
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(103.43deg,#00B4FD -1.02%,#003ACE 83.53%)",
                }}
              >
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}