import React from 'react';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      id: 0,
    };

    this.addTodoListItem = this.addTodoListItem.bind(this);
  }

  addTodoListItem(recivedName) {
    this.setState((state) => {
      const newTodos = state.todos.slice();
      newTodos.push({
        id: state.id,
        name: recivedName,
      });
      return {
        todos: newTodos,
        id: state.id + 1,
      };
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <Container className="bg-light p-4 my-5">
        <TodoForm addTodoListItem={this.addTodoListItem} />
        <hr className="my-3" />
        <TodoList todos={todos} />
      </Container>
    );
  }
}
