import React from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion } from 'react-bootstrap';
import TimeMessage from '../TimeMessage';
import './TodoListItem.css';

export default function TodoListItem(props) {
  const {
    name,
    description,
    color,
    finish,
    identifier,
    removeTodoListItem,
  } = props;

  return (
    <Accordion.Item
      eventKey={identifier}
      className={`mb-2 accordion-${color}`}
      style={{ border: `1px solid var(--bs-${color})` }}
    >
      <Accordion.Header>
        <span className="w-100">{name}</span>
        <TimeMessage />
      </Accordion.Header>

      <Accordion.Body className="d-flex flex-column align-items-start">
        <p>{description || 'This todo has not description'}</p>
        <p>
          Finish in:
          {` ${finish}`}
        </p>
        <Button variant={`outline-${color}`} onClick={() => removeTodoListItem(identifier)}>
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
  finish: PropTypes.string.isRequired,
  identifier: PropTypes.number.isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
