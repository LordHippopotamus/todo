import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name } = this.state;

    return (
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="What needs to be done?"
          className="me-2"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}
