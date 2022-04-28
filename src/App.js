import React from "react";
import { YouTubePlayerProvider } from "./context/YouTubePlayerContext";
import ThemeProvider from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import DiscriptionlStyle from "./DiscriptionlStyle";
import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import SearchResults from "./detailsveed/Results";
import VideoInfo from "./detailsveed/InfoVeed";
import PlayList from "./components/PlayList";

function App() {
  return (
    <YouTubePlayerProvider>
      <ThemeProvider>
        <DiscriptionlStyle />
        <Header />
        <VideoPlayer />
        <Routes>
          <Route path="/search" element={<SearchResults />} />
          <Route path="/video" element={<VideoInfo />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </ThemeProvider>
    </YouTubePlayerProvider>
  );
}

export default App;
