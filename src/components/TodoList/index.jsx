import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoListItem from '../TodoListItem';

export default function TodoList() {
  return (
    <ListGroup>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ListGroup>
  );
}
