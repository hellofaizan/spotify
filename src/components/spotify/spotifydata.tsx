import React, { useEffect, useState } from "react";
import axios from "axios";
import SpotifyComponent from "./spotifycomponent";

export default function Spotifydata({ url }: { url: string }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `/api/spotifydata?url=${encodeURIComponent(url)}`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="w-full">
      {data && <SpotifyComponent data={data} url={url} />}
    </div>
  );
}
