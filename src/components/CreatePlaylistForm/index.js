import React from "react";
import { useState } from "react";
import axios from "axios";

const CreatePlayList = ({ mutate }) => {
  const [form, setForm] = useState({
    name: "",
  });

  const postData = async (form) => {
    await axios.post(" https://youtube.thorsteinsson.is/api/playlists", form);
    await mutate();
    //clear the form
    setForm({ ...form, name: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Add a playlist..."
      />
    </form>
  );
};

export default CreatePlayList;
