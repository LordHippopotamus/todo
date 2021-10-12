import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';

export default function TodoList(props) {
  const { todos, removeTodoListItem } = props;

  if (todos.length) {
    return (
      <Accordion>
        {todos.map((el) => (
          <TodoListItem
            name={el.name}
            key={el.id}
            identifier={el.id}
            removeTodoListItem={removeTodoListItem}
          />
        ))}
      </Accordion>
    );
  }

  return <div>Nothing to do</div>;
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
