import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './TimeMessage.css';

export default class TimeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { finish } = this.props;
    const { date } = this.state;
    const currentMinutes = date.getHours() * 60 + date.getMinutes();
    const todoMinutes = +finish.slice(0, 2) * 60 + +finish.slice(3, 5);
    if (todoMinutes - currentMinutes <= 0) {
      clearInterval(this.timer);
      return (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={<Tooltip>Time&apos;s up</Tooltip>}
        >
          <svg className="me-2 text-danger time-message" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
          </svg>
        </OverlayTrigger>
      );
    }
    if (todoMinutes - currentMinutes <= 5) {
      return (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 250 }}
          overlay={<Tooltip>Less than 5 minutes left</Tooltip>}
        >
          <svg className="me-2 text-warning time-message" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </OverlayTrigger>
      );
    }
    return null;
  }
}

TimeMessage.propTypes = {
  finish: PropTypes.string.isRequired,
};
