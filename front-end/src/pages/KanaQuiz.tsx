import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
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
  const [totalAttempts, setTotalAttempts] = useState(() => {
    return 0;
  });
  const inputAnswerElement = document.getElementById('inputAnswer') as HTMLInputElement;

  // TODO: Look into shouldComponentUpdate() to prevent unneeded re-renders
  // TODO: prevent repeated words showing up until reset
  // TODO: make enter key default to submit when typing
  // TODO: prevent alert pushing Button down (have padding there but alert hidden)
  // TODO: add option to play timed version
  // TODO: pick quiz from category e.g. food, directions, locations etc..
  // TODO: add reverse translation quiz
  // TODO: allow user to pick how long they want the quiz to be before starting
  // TODO: score screen with percent, word display and tally on give up or completion
  // TODO: option to pick from 4 premade answers
  // TODO: create a customise menu page to select categories and the total question count
  // TODO: display romaji above each kana character on submit failure or success
  // TODO: display english translation below the Kana on submit failure

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
    setTotalAttempts((prevScore) => prevScore + 1);
  }

  function handleCorrectAnswer() {
    messageHelper(true, false, false);
    setScore((prevScore) => prevScore + 1);
    setTotalAttempts((prevScore) => prevScore + 1);
  }

  function handleInCorrectAnswer() {
    messageHelper(false, true, false);
    setTotalAttempts((prevScore) => prevScore + 1);
  }

  function reset() {
    // set max attempts to trigger Results component to be called
    setTotalAttempts(20);
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
      {totalAttempts !== 20 ? (
        <>
          <div>
            <Row>
              <Col>
                <p>Enter your English translation of the displayed Kana in the Input box below and press Submit</p>
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
              <Col></Col>
              <Col>
                <Button
                  variant="secondary"
                  id="giveUp"
                  className="mt-3"
                  onClick={(event) => {
                    reset();
                  }}
                >
                  Give Up
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  id="submitAnswer"
                  className="mt-3"
                  onClick={(event) => {
                    processAnswer(data);
                  }}
                >
                  Submit Answer
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  id="giveUp"
                  className="mt-3"
                  onClick={(event) => {
                    skipKana(data);
                  }}
                >
                  Skip
                </Button>
              </Col>
              <Col></Col>
            </Row>
            <Row className="mt-3">
              <Col>Current Score: {score}</Col>
            </Row>
            <Row>
              <Col>Questions Left: {totalAttempts} / 20</Col>
            </Row>
          </div>
        </>
      ) : (
        <Results score={score} />
      )}
      <div className="mb-5"></div>
    </Container>
  );
};
