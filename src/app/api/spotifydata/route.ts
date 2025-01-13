import getSpotifyMetadata from "@/actions/getSpotify";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = decodeURIComponent(searchParams.get("url") as string);

  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 409 });
  }

  if (!url.startsWith('https://open.spotify.com/track')) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const metadata = await getSpotifyMetadata(url as string);

  if (!metadata) {
    return NextResponse.json(
      { error: "Error fetching Spotify metadata" },
      { status: 401 }
    );
  }

  return NextResponse.json(metadata, { status: 200 });
}
