import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function RegisterModal(props) {
  const [show, setShow] = useState(false);    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <a href="#home" onClick={handleShow}>Register New User</a>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Username</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>   

          <InputGroup className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          
          <InputGroup className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup> 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default RegisterModal;