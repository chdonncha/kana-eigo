import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { KanaQuizHeader } from './KanaQuizHeader';

export const KanaQuizMenu = () => {
  return (
    <>
      <Container fluid="md" className="text-center mt-5">
        <div>
          <Row>
            <Col>
              <KanaQuizHeader />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col></Col>
            <Col>
              <button>Quick Start</button>
            </Col>
            <Col>
              <button>Randomise</button>
            </Col>
            <Col>
              <button>Customise</button>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
