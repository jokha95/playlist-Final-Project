import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { YouTubePlayerContext } from "../../context/YouTubePlayerContext";
import {
  Navbar,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonText
} from "./css";

export default function Header() {
  const {
    videoId,
    videoSearch,
    setVideoSearch,
    setShowVideoOnSearch
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
      <p>Joukha YouTube </p>

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
    </Navbar>
  );
}
