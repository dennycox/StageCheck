import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

function UpdateInternshipForm({ updateInternship, getInternship }) {
  let { id } = useParams();

  const internship = getInternship(id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  setTitle(internship.title);
  setDescription(internship.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const internship = {
      title: title,
      description: description,
    };
    updateInternship(internship);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="col-md-6">
      <Form onSubmit={handleSubmit}>
        <h2>Stage wijzigen</h2>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control type="text" placeholder="Voer titel in"
            onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Voer beschrijving in"
            onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Sla wijzigingen op</Button>
      </Form>
    </div>
  );
}

export default UpdateInternshipForm;
