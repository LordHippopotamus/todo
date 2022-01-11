import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, Row, Col,
} from 'react-bootstrap';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      color: 'dark',
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
    const {
      name, description, color,
    } = this.state;

    addTodoListItem({
      name, description, color,
    });

    this.setState({
      name: '',
      description: '',
      color: 'dark',
    });
  }

  render() {
    const {
      name, description, color,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="What needs to be done?"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Optional todo description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Label column lg={1}>Color:</Form.Label>
          <Col>
            <Form.Select className="w-auto" name="color" value={color} onChange={this.handleChange}>
              <option value="dark">Dark</option>
              <option value="secondary">Gray</option>
              <option value="primary">Blue</option>
              <option value="success">Green</option>
              <option value="danger">Red</option>
            </Form.Select>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  addTodoListItem: PropTypes.func.isRequired,
};
