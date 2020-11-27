import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InternshipService from '../services/InternshipService';

const AddInternship = () => {
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

  const saveInternship = async () => {
    var data = {
      title: internship.title,
      description: internship.description
    };

    let apiResponse = await InternshipService.create(data)
    setInternship({
      id: apiResponse.data.id,
      title: apiResponse.data.title,
      description: apiResponse.data.description
    })
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
            data-testid="add-internship-title-input"
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
            data-testid="add-internship-description-input"
          />
        </Form.Group>
        <Button variant="primary" onClick={saveInternship} data-testid="add-internship-submit">Voeg stage toe</Button>
      </Form>
    </Container>
  );
}

export default AddInternship;
