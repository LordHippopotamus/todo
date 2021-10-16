import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './TimeMessage.css';

export default function TimeMessage() {
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
