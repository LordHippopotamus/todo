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
    this.removeTodoListItem = this.removeTodoListItem.bind(this);
  }

  addTodoListItem(parametrs) {
    this.setState((state) => {
      const newTodos = state.todos.slice();
      newTodos.push({ ...parametrs });
      return {
        todos: newTodos,
        id: state.id + 1,
      };
    });
  }

  removeTodoListItem(recivedId) {
    this.setState((state) => ({ todos: state.todos.filter((el) => el.id !== recivedId) }));
  }

  render() {
    const { todos } = this.state;

    return (
      <Container className="bg-light p-4 my-5">
        <TodoForm addTodoListItem={this.addTodoListItem} />
        <hr className="my-3" />
        <TodoList todos={todos} removeTodoListItem={this.removeTodoListItem} />
      </Container>
    );
  }
}
