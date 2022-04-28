import React from "react";
import { useContext } from "react";
import { YouTubePlayerContext } from "../../context/YouTubePlayerContext";
import axios from "axios";
import useSWR from "swr";
import { VideoPlayerWrapper, YouTubeVideoWrapper } from "./css";

export default function VideoPlayerRoute() {
  const { videoId } = useContext(YouTubePlayerContext);
  const fetcher = (url) =>
    axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": true,
      },
    });

  const { data, error } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  if (error || !data) return;

  return (
    <VideoPlayerWrapper>
      <YouTubeVideoWrapper></YouTubeVideoWrapper>
      <br />
      <h1> Add to playList++ </h1>
      <br />
      <br /> <br />
    </VideoPlayerWrapper>
  );
}
