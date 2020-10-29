import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';

const AddInternshipForm = () => {
  const initialInternshipState = {
    id: null,
    title: "",
    description: ""
  };
  const [internship, setInternship] = useState(initialInternshipState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInternship({ ...internship, [name]: value });
  };

  const saveInternship = () => {
    var data = {
      title: internship.title,
      description: internship.description
    };

    InternshipService.create(data)
      .then(response => {
        setInternship({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container className="pt-3">
      <Link to={"/internships"}>
        <Button variant="primary">Terug</Button>
      </Link>
      <Form>
        <h2>Stage toevoegen</h2>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control
            type="text"
            id="title"
            placeholder="Voer titel in"
            value={internship.title}
            onChange={handleInputChange}
            name="title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control
            as="textarea"
            id="description"
            rows={3}
            placeholder="Voer beschrijving in"
            value={internship.description}
            onChange={handleInputChange}
            name="description"
          />
        </Form.Group>
        <Button variant="primary" onClick={saveInternship}>Voeg stage toe</Button>
      </Form>
    </Container>
  );
}

export default AddInternshipForm;
