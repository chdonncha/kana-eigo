import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

export const QuizHeader = () => {
  return (
    <>
      <Row>
        <Col>
          <h3>Translate Katakana to English</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            The purpose of this exercise is to build up confidence in understanding Katakana based on guessing the given
            word through reading the Katakana and making sense of it.
          </p>
          <p>
            Reducing the need to remember words like you would in Hiragana and being able to read based just purely off
            the Katakana alone.
          </p>
          <p>E.g. スーパーマーケット = Sūpāmāketto = supermarket</p>
        </Col>
      </Row>
    </>
  );
};
