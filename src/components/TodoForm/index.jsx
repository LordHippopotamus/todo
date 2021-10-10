import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addTodoListItem } = this.props;
    const { name } = this.state;
    addTodoListItem(name);
  }

  render() {
    const { name } = this.state;

    return (
      <Form className="d-flex" onSubmit={this.handleSubmit}>
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

TodoForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  addTodoListItem: PropTypes.func.isRequired,
};
