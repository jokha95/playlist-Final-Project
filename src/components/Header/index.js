import React from "react";

import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { YouTubePlayerContext } from "../../context/YouTubePlayerContext";
import {
  Navbar,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonText,
} from "./css";
import CreatePlaylistForm from "../CreatePlaylistForm";
export default function Header() {
  const {
    videoId,
    videoSearch,
    setShowVideoOnSearch,
    setVideoSearch,
  } = useContext(YouTubePlayerContext);
  const [search, setSearch] = useState(videoSearch);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return navigate("/");

    if (videoId) setShowVideoOnSearch(true);

    setVideoSearch(search);
    navigate(`/search?q=${search}`, { replace: true });
  };

  return (
    <Navbar>
      <p>Jokha YouTube </p>

      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="search a video"
        />
        <SearchButton>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </SearchForm>
      <h1>
        <Link to="/playlist">View my playlist</Link>
      </h1>

      <CreatePlaylistForm />
    </Navbar>
  );
}
