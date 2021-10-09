import React from 'react';
import {
  Container, Form, Button, ListGroup,
} from 'react-bootstrap';

export default function App() {
  return (
    <Container className="bg-light p-4 my-5">
      <Form className="d-flex">
        <Form.Control type="text" placeholder="What needs to be done?" className="me-2" />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      <hr className="my-3" />
      <ListGroup>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          Todo item
          <Button variant="outline-success">
            Done
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          Todo item
          <Button variant="outline-success">
            Done
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          Todo item
          <Button variant="outline-success">
            Done
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
