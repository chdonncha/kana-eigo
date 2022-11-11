import React, { useEffect, useState } from 'react';

import { Button, Col, Row } from 'react-bootstrap';

import { KanaQuizMenu } from './KanaQuizMenu';

export const KanaQuizCustomiseMenu = () => {
  // TODO: setup back Button to navigate to main quiz menu
  // TODO: style Buttons as Back = bootstrap error and Start Quiz as bootstrap = success
  // TODO: instead of having so many <Col>'s to pad things out try using the react padding and margins instead

  const [backToKanaQuiz, setBackToKanaQuiz] = useState(true);

  const getKanaQuizMenu = () => {
    setBackToKanaQuiz((current) => !current);
  };

  return (
    <>
      {backToKanaQuiz && (
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
              <Button variant="secondary">10</Button>
            </Col>
            <Col>
              <Button variant="secondary">20</Button>
            </Col>
            <Col>
              <Button variant="secondary">40</Button>
            </Col>
            <Col>
              <Button variant="secondary">80</Button>
            </Col>
            <Col>
              <Button variant="secondary">10</Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p>Category</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary">Locations</Button>
            </Col>
            <Col>
              <Button variant="secondary">Foods</Button>
            </Col>
            <Col>
              <Button variant="secondary">General Vocab</Button>
            </Col>
            <Col>
              <Button variant="secondary">Names</Button>
            </Col>
            <Col>
              <Button variant="secondary">Random</Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button variant="danger" onClick={getKanaQuizMenu}>
                Back
              </Button>
            </Col>
            <Col>
              <Button variant="primary">Start Quiz</Button>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      )}
      {!backToKanaQuiz && <KanaQuizMenu />}
    </>
  );
};
