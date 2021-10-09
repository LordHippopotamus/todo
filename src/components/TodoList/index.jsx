import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function TodoList() {
  return (
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
  );
}
