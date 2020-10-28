import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import InternshipService from '../services/InternshipService';

const UpdateInternshipForm = (props) => {
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

  const updatePublished = (status) => {
    var data = {
      id: currentInternship.id,
      title: currentInternship.title,
      description: currentInternship.description,
    };

    InternshipService.update(currentInternship.id, data)
      .then(response => {
        setCurrentInternship({ ...currentInternship, published: status });
        setMessage("update successful");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateInternship = () => {
    InternshipService.update(currentInternship.id, currentInternship)
      .then(response => {
        setMessage("De stage is bijgewerkt!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="col-md-6">
      <Form>
        <h2>Stage wijzigen</h2>
        <Form.Group>
          <Form.Label>Titel</Form.Label>
          <Form.Control
            type="text"
            placeholder="Voer titel in"
            value={currentInternship.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Beschrijving</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Voer beschrijving in"
            value={currentInternship.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={updateInternship}>Sla wijzigingen op</Button>
      </Form>
    </div>
  )
}

export default UpdateInternshipForm;
