import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="flex justify-center items-center text-sm text-white">
      <Link
        target="_blank"
        href="https://github.com/sujeethcodes"
        className="text-zinc-200 flex justify-center items-center">
        Made By <span className="text-lg m-2">🧑‍💻</span>
        SujeethCodes{" "}
      </Link>
      <p className="text-zinc-300 flex justify-center">@ 2023</p>
    </div>
  );
}

export default Footer;
