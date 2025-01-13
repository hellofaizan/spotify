import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full fixed bottom-0 justify-center z-10 px-2">
      <div className="max-w-[30rem] flex items-center gap-1 p-3 px-5 border bg-white dark:bg-black w-full rounded-t-xl shadow-md text-sm">
        <p>Made by</p>
        <Link
          href={"https://mohammadfaizan.com"}
          target="_blank"
          className="font-semibold font-sans underline"
        >
          Mohammad Faizan
        </Link>
      </div>
    </div>
  );
}
