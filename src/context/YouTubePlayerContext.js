import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
  const { pathname, search } = useLocation();
  const q = new URLSearchParams(search).get("q");
  const w = new URLSearchParams(search).get("w");
  const [videoSearch, setVideoSearch] = useState(q || "");
  const [videoId, setVideoId] = useState(w || "");
  const [darkMode, setDarkMode] = useState(true);
  const [showVideoOnSearch, setShowVideoOnSearch] = useState(false);

  return (
    <YouTubePlayerContext.Provider
      value={{
        videoId,
        setVideoId,
        videoSearch,
        setVideoSearch,
        darkMode,
        setDarkMode,
        showVideoOnSearch,
        setShowVideoOnSearch,
        pathname
      }}
    >
      {children}
    </YouTubePlayerContext.Provider>
  );
}
