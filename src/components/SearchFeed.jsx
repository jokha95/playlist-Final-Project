import React from "react";
import { Box } from "@mui/material";
import VideoItem from "./Item";
import { useStateContext } from "../contexts/StateContextProvider";

const SearchFeed = () => {
  const { data } = useStateContext();
  document.title = "JOUKHA YOUTUBE";

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 1,
        mt: 10,
      }}
    >
      {data.length !== 0 &&
        data.map((video) => (
          <VideoItem
            key={video.id.videoId}
            video={video}
            id={video.id.videoId}
          />
        ))}
    </Box>
  );
};

export default SearchFeed;
