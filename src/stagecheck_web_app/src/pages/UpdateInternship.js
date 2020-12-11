import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import InternshipService from '../services/InternshipService';

const UpdateInternship = (props) => {
  const initialInternshipState = {
    id: null,
    title: "",
    description: "",
  };

  const [currentInternship, setCurrentInternship] = useState(initialInternshipState);
  const [message, setMessage] = useState("");

  const getInternship = id => {
    InternshipService.get(id)
      .then(response => {
        setCurrentInternship(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getInternship(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentInternship({ ...currentInternship, [name]: value });
  };

  const updateInternship = () => {
    InternshipService.update(currentInternship.id, currentInternship)
      .then(response => {
        setMessage("De wijzigingen zijn opgeslagen!");
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
        <h2>Stage wijzigen</h2>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control
            type="text"
            id="title"
            placeholder="Voer titel in"
            value={currentInternship.title}
            onChange={handleInputChange}
            name="title"
            data-testid="update-internship-title-input"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control
            as="textarea"
            id="description"
            rows={3}
            placeholder="Voer beschrijving in"
            value={currentInternship.description}
            onChange={handleInputChange}
            name="description"
            data-testid="update-internship-description-input"
          />
        </Form.Group>
        <Button variant="primary" onClick={updateInternship} data-testid="update-internship-submit">Sla wijzigingen op</Button>
        <p>{message}</p>
      </Form>
    </Container>
  );
}

export default UpdateInternship;
