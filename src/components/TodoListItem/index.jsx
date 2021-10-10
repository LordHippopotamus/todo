import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';

export default function TodoListItem(props) {
  const { name, identifier, removeTodoListItem } = props;
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      {name}
      <Button variant="outline-success" onClick={() => removeTodoListItem(identifier)}>
        Done
      </Button>
    </ListGroup.Item>
  );
}

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  identifier: PropTypes.number.isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
