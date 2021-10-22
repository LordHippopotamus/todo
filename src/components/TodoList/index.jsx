import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';

export default function TodoList(props) {
  const { todos, removeTodoListItem } = props;

  const list = (
    <Accordion>
      {todos.map((el) => (
        <TodoListItem
          name={el.name}
          description={el.description}
          color={el.color}
          finish={el.finish}
          warning={el.warning}
          danger={el.danger}
          key={el.id}
          identifier={el.id}
          removeTodoListItem={removeTodoListItem}
        />
      ))}
    </Accordion>
  );

  const emptyList = <div>Nothing to do</div>;

  return todos.length ? list : emptyList;
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    finish: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired,
    danger: PropTypes.bool.isRequired,
  })).isRequired,
  removeTodoListItem: PropTypes.func.isRequired,
};
