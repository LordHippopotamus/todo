import React from 'react';
import { Container } from 'react-bootstrap';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container className="bg-light p-4 my-5">
        <TodoForm />
        <hr className="my-3" />
        <TodoList />
      </Container>
    );
  }
}
