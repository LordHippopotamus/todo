import React from 'react';
import PropTypes from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';

export default function TodoListItem(props) {
  const { name } = props;
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      {name}
      <Button variant="outline-success">
        Done
      </Button>
    </ListGroup.Item>
  );
}

TodoListItem.propTypes = {
  name: PropTypes.string,
};

TodoListItem.defaultProps = {
  name: 'Todo item',
};
