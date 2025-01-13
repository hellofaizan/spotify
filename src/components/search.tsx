"use client";

import { linkSchema } from "@/schemas";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Divide, Search } from "lucide-react";
import Spotifydata from "./spotify/spotifydata";

type formValues = z.infer<typeof linkSchema>;

export default function SearchBar() {
  const [url, setUrl] = useState<string>();

  const { handleSubmit, register } = useForm<formValues>({
    resolver: zodResolver(linkSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: formValues) => {
    setUrl(data.link);
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <form className="flex gap-2 w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="url"
          placeholder="spotify song link here.."
          className="h-12 rounded-lg border p-2 px-3 focus:border-muted-foreground focus:outline-none flex-1"
          {...register("link")}
        />

        <Button
          className="flex gap-1 flex-none rounded-lg h-full"
          type="submit"
          variant={"outline"}
        >
          <Search />
        </Button>
      </form>

      {url && <Spotifydata url={url} />}
    </div>
  );
}
