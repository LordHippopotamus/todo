import React from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion } from 'react-bootstrap';

export default function TodoListItem(props) {
  const {
    name,
    description,
    identifier,
    removeTodoListItem,
  } = props;
  return (
    <Accordion.Item eventKey={identifier}>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body className="d-flex flex-column align-items-start">
        <p>{description || 'This todo has not description'}</p>
        <Button variant="outline-success" onClick={() => removeTodoListItem(identifier)}>
          Done
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  identifier: PropTypes.number.isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
