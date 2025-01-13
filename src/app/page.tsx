import SearchBar from "@/components/search";

export default function Home() {
  return (
    <div className="flex items-center pt-[80px] pb-20 px-2 w-full justify-center">
      <div className="max-w-[30rem] w-full h-full flex flex-col gap-4 items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" className="w-48 h-28"></img>
        <SearchBar />
      </div>
    </div>
  );
}
