import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

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
    <div class="row pt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control type="text" placeholder="Voer titel in"
            onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control type="text" placeholder="Voer beschrijving in"
            onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Voeg stage toe</Button>
      </Form>
    </div>
  );
}

export default AddInternshipForm;
