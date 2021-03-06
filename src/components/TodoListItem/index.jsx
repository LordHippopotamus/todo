import React from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion } from 'react-bootstrap';
import './TodoListItem.css';

export default function TodoListItem(props) {
  const {
    name,
    description,
    color,
    id,
    removeTodoListItem,
  } = props;

  return (
    <Accordion.Item
      eventKey={id}
      className={`mb-2 accordion-${color}`}
      style={{ border: `1px solid var(--bs-${color})` }}
    >
      <Accordion.Header>
        <span className="w-100">{name}</span>
      </Accordion.Header>

      <Accordion.Body className="d-flex flex-column align-items-start">
        <p>{description || 'This todo has not description'}</p>
        <Button variant={`outline-${color}`} onClick={() => removeTodoListItem(id)}>
          Done
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
}

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
