import React, { useState } from "react";

function AddInternshipForm({ addInternship }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const internship = {
      title: title,
      description: description,
    };
    addInternship(internship);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Beschrijving"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button className="grey-button">Voeg stage toe</button>
    </form>
  );
}

export default AddInternshipForm;
