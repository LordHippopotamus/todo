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
      date: new Date(),
    };

    this.addTodoListItem = this.addTodoListItem.bind(this);
    this.removeTodoListItem = this.removeTodoListItem.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { date, todos } = this.state;
      const newTodos = todos.slice();

      todos.forEach((todo) => {
        const currentMinutes = date.getHours() * 60 + date.getMinutes();
        const todoMinutes = +todo.finish.slice(0, 2) * 60 + +todo.finish.slice(3, 5);
        const index = todos.findIndex((el) => el.id === todo.id);
        if (todoMinutes - currentMinutes < 5) newTodos[index].warning = true;
        if (todoMinutes - currentMinutes < 0) newTodos[index].danger = true;
      });

      this.setState({
        date: new Date(),
        todos: newTodos,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  addTodoListItem(parametrs) {
    this.setState((state) => {
      const newTodos = state.todos.slice();
      newTodos.push({
        id: state.id,
        name: parametrs.name,
        description: parametrs.description,
        color: parametrs.color,
        finish: parametrs.finish,
        warning: false,
        danger: false,
      });
      return {
        todos: newTodos,
        id: state.id + 1,
      };
    });
  }

  removeTodoListItem(recivedId) {
    this.setState((state) => {
      const newTodos = state.todos.slice();
      const index = newTodos.findIndex((el) => el.id === recivedId);
      newTodos.splice(index, 1);
      return { todos: newTodos };
    });
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
