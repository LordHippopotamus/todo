import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ListGroup>
      {todos.map((el) => <TodoListItem name={el.name} key={el.id} />)}
    </ListGroup>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

TodoList.defaultProps = {
  todos: [],
};
