"use client";

import React, { useState } from "react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";
import Player from "../player";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function SpotifyComponent({
  data,
  url,
}: {
  data: any;
  url: string;
}) {
  const [isDownloading, setIsDownloading] = useState(false);
  const allData = data?.props;
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex items-center overflow-hidden rounded-lg border p-2">
        <Link
          className="flex items-center overflow-hidden"
          href={url}
          target="_blank"
        >
          <div className="items-center justify-center relative flex flex-none">
            <img src={allData?.cover_image} className="h-16 w-16 rounded-md" />
            <IconPlayerPlayFilled
              size={17}
              className="absolute left-[50%] top-[50%] z-10 -ml-2 -mt-2 items-center justify-start rounded-full border-white text-white shadow-2xl drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="flex flex-grow items-center pl-3 font-semibold font-sans">
              <span className="max-w-max flex-1 overflow-x-scroll truncate whitespace-nowrap">
                {allData?.title}
              </span>
            </span>

            <span className="pl-3 text-sm font-semibold font-sans">
              {allData?.artist}
            </span>
          </div>
        </Link>
        <Player url={allData?.preview_url} />
      </div>

      <a href={allData?.preview_url} download target="_blank">
        <Button className="w-full" variant={"outline"}>
          <Download /> Song Ringtone
        </Button>
      </a>
    </div>
  );
}
