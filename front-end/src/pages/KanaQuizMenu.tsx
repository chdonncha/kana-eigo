import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { KanaQuiz } from './KanaQuiz';
import { KanaQuizCustomiseMenu } from './KanaQuizCustomiseMenu';
import { KanaQuizHeader } from './KanaQuizHeader';

export const KanaQuizMenu = () => {
  const [quickStartQuiz, setQuickStartQuiz] = useState(true);
  const [randomisedQuiz, setRandomisedQuiz] = useState(true);
  const [customisedQuiz, setCustomisedQuiz] = useState(true);

  const getQuickStartQuiz = () => {
    setQuickStartQuiz((current) => !current);
  };

  const getRandomisedQuiz = () => {
    setRandomisedQuiz((current) => !current);
  };

  const getCustomiseQuizMenu = () => {
    setCustomisedQuiz((current) => !current);
  };

  return (
    <>
      <Container fluid="md" className="text-center mt-5">
        {quickStartQuiz && randomisedQuiz && customisedQuiz && (
          <div>
            <Row>
              <Col>
                <KanaQuizHeader />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col></Col>
              <Col>
                <button onClick={getQuickStartQuiz}>Quick Start</button>
              </Col>
              <Col>
                <button onClick={getRandomisedQuiz}>Randomise</button>
              </Col>
              <Col>
                <button onClick={getCustomiseQuizMenu}>Customise</button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        )}
        {!quickStartQuiz && <KanaQuiz />}
        {!randomisedQuiz && <KanaQuiz />}
        {!customisedQuiz && <KanaQuizCustomiseMenu />}
      </Container>
    </>
  );
};
