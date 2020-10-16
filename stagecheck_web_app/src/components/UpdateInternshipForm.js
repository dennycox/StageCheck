import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import {
  useParams
} from 'react-router-dom';

const InternshipsUrl = "https://localhost:44330/api/Internships/";

function UpdateInternshipForm() {
  var { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(InternshipsUrl + id).then(res => {
      const internship = res.data;
      setTitle(internship.title);
      setDescription(internship.description);
    })
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const internship = {
      title: title,
      description: description,
    };

    axios.put(InternshipsUrl + id, internship);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="col-md-6">
      <Form onSubmit={handleSubmit}>
        <h2>Stage wijzigen</h2>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control type="text" placeholder="Voer titel in" value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Voer beschrijving in" value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Sla wijzigingen op</Button>
      </Form>
    </div>
  );
}

export default UpdateInternshipForm;
