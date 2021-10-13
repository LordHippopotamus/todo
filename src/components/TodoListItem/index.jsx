import React from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion } from 'react-bootstrap';
import './TodoListItem.css';

export default function TodoListItem(props) {
  const {
    name,
    description,
    color,
    identifier,
    removeTodoListItem,
  } = props;
  return (
    <Accordion.Item eventKey={identifier}>
      <Accordion.Header>
        <span className="w-100">{name}</span>
        <div className="todo-list-item-color ms-auto me-2" style={{ backgroundColor: color }} />
      </Accordion.Header>
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
  color: PropTypes.string.isRequired,
  identifier: PropTypes.number.isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
