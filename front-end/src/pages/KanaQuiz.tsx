import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import { Results } from './Results';

export const KanaQuiz = () => {
  const [data, setData] = useState([]);
  const [randKanaObj, setRandKanaObj] = useState([]);
  //TODO: Consider creating a service to handle alert messages
  const [currentKana, setCurrentKana] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showEmptyInput, setShowEmptyInput] = useState(false);
  const [score, setScore] = useState(() => {
    return 0;
  });
  const [totalSubmits, setTotalSubmits] = useState(() => {
    return 0;
  });
  const inputAnswerElement = document.getElementById('inputAnswer') as HTMLInputElement;

  // TODO: Look into shouldComponentUpdate() to prevent unneeded re-renders
  // TODO: prevent repeated words showing up until reset
  // TODO: make enter key default to submit when typing
  // TODO: prevent alert pushing button down (have padding there but alert hidden)
  // TODO: add option to play timed version
  // TODO: pick quiz from category e.g. food, directions, locations etc..
  // TODO: add reverse translation quiz
  // TODO: allow user to pick how long they want the quiz to be before starting
  // TODO: score screen with percent, word display and tally on give up or completion
  // TODO: option to pick from 4 premade answers

  const getData = () => {
    fetch('KanaEngData.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (currentKana.length === 0) {
    getRandKana(data, setCurrentKana);
  }

  //TODO: Have Text fade in and out every time an answer is submitted
  function getRandKana(data: any, setCurrentKana: any) {
    let randObj;
    if (data.length > 0) {
      // Generate random index based on number of keys
      const randIndex = Math.floor(Math.random() * data.length);
      // Select a key from the array of keys using the random index
      randObj = data[randIndex];

      console.log(randObj);

      let kana = getKeyPairValue(Object.values(randObj));
      setCurrentKana(kana);
      setRandKanaObj(randObj);
    }
  }

  function getKeyPairValue(objVal: any) {
    objVal = objVal.map(function (e: any) {
      return JSON.stringify(e);
    });

    objVal = objVal.toString().replace(/['"]+/g, '');
    return objVal;
  }

  function checkCorrect() {
    let inputValue = inputAnswerElement.value;
    let eng = getKeyPairValue(Object.keys(randKanaObj));
    return eng.toLowerCase() === inputValue.toLowerCase();
  }

  function processAnswer(data: any) {
    if (inputAnswerElement.value.length > 0) {
      checkCorrect() ? handleCorrectAnswer() : handleInCorrectAnswer();
      messageHelper(null, null, false);
      clearInput();
      getRandKana(data, setCurrentKana);
    } else {
      messageHelper(false, false, true);
    }
  }

  function skipKana(data: any) {
    clearAllMessages();
    getRandKana(data, setCurrentKana);
    setTotalSubmits((prevScore) => prevScore + 1);
  }

  function handleCorrectAnswer() {
    messageHelper(true, false, false);
    setScore((prevScore) => prevScore + 1);
    setTotalSubmits((prevScore) => prevScore + 1);
  }

  function handleInCorrectAnswer() {
    messageHelper(false, true, false);
    setTotalSubmits((prevScore) => prevScore + 1);
  }

  function reset() {
    setTotalSubmits(0);
    setScore(0);
    clearAllMessages();
    getRandKana(data, setCurrentKana);
  }

  function messageHelper(Correct: any, Incorrect: any, EmptyInput: any) {
    if (Correct != null) setShowCorrect(Correct);
    if (Incorrect != null) setShowIncorrect(Incorrect);
    if (EmptyInput != null) setShowEmptyInput(EmptyInput);
  }

  function clearAllMessages() {
    messageHelper(false, false, false);
  }

  function clearInput() {
    (document.getElementById('inputAnswer') as HTMLInputElement).value = '';
  }

  // TODO: research into Render Props and disabling the previous prop without relying on IF's
  return (
    <Container fluid="md" className="text-center mt-5">
      {totalSubmits !== 20 ? (
        <div>
          <Row>
            <Col>
              <h3>Translate Katakana to English</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                The purpose of this exercise is to build up confidence in understanding Katakana based on guessing the
                given word through reading the Katakana and making sense of it.
              </p>
              <p>
                Reducing the need to remember words like you would in Hiragana and being able to read based just purely
                off the Katakana alone.
              </p>
              <p>E.g. スーパーマーケット = Sūpāmāketto = supermarket</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="mt-5">{currentKana}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="alert">
              {!showEmptyInput && !showCorrect && !showIncorrect && (
                <Alert variant="light" style={{ opacity: 0 }}>
                  .
                </Alert>
              )}
              <Alert
                show={showEmptyInput}
                onClose={() => setShowEmptyInput(false)}
                dismissible
                transition={false}
                variant={'danger'}
              >
                Cannot leave input empty
              </Alert>
              <Alert
                show={showCorrect}
                onClose={() => setShowCorrect(false)}
                dismissible
                transition={false}
                variant={'success'}
              >
                Correct!
              </Alert>
              <Alert
                show={showIncorrect}
                onClose={() => setShowIncorrect(false)}
                dismissible
                transition={false}
                variant={'danger'}
              >
                Incorrect Answer!
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                id="inputAnswer"
                type="text"
                name="inputAnswer"
                className="bg-light border mt-3"
                autoComplete="off"
              ></input>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                id="submitAnswer"
                className="mt-3"
                onClick={(event) => {
                  processAnswer(data);
                }}
              >
                Submit Answer
              </button>
              <button
                id="giveUp"
                className="mt-3"
                onClick={(event) => {
                  reset();
                }}
              >
                Give Up
              </button>
              <button
                id="giveUp"
                className="mt-3"
                onClick={(event) => {
                  skipKana(data);
                }}
              >
                Skip
              </button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>Current Score: {score}</Col>
          </Row>
          <Row>
            <Col>Questions Left: {totalSubmits} / 20</Col>
          </Row>
        </div>
      ) : (
        <>
          <Results score={score} />
        </>
      )}
      <div className="mb-5"></div>
    </Container>
  );
};
