import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function TodoForm() {
  return (
    <Form className="d-flex">
      <Form.Control type="text" placeholder="What needs to be done?" className="me-2" />
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
