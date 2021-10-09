import React from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import TodoForm from '../TodoForm';

export default function App() {
  return (
    <Container className="bg-light p-4 my-5">
      <TodoForm />
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
