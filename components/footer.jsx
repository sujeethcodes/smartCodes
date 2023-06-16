"use client";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div className="flex justify-center items-center text-sm text-white">
        <Link
          target="_blank"
          href="https://github.com/sujeethcodes"
          className="text-zinc-200 flex justify-center items-center">
          Made By <div className="text-lg m-2">🧑‍💻</div>
          SujeethCodes{" "}
        </Link>
        <div className="text-zinc-300 flex justify-center">@ 2023</div>
      </div>
    </>
  );
}

export default Footer;
