import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export const KanaQuizCustomiseMenu = () => {
  // TODO: setup back button to navigate to main quiz menu
  // TODO: style buttons as Back = bootstrap error and Start Quiz as bootstrap = success

  return (
    <div>
      <Row>
        <Col>
          <p>Customise Quiz by picking the number of questions or categories asked</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Question Number</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button>10</button>
        </Col>
        <Col>
          <button>20</button>
        </Col>
        <Col>
          <button>40</button>
        </Col>
        <Col>
          <button>80</button>
        </Col>
        <Col>
          <button>10</button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>Category</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <button>Locations</button>
        </Col>
        <Col>
          <button>Foods</button>
        </Col>
        <Col>
          <button>General Vocab</button>
        </Col>
        <Col>
          <button>Names</button>
        </Col>
        <Col>
          <button>Random</button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col></Col>
        <Col>
          <button>Back</button>
        </Col>
        <Col></Col>
        <Col>
          <button>Start Quiz</button>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};
