import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function KanaQuiz() {
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

  // TODO: Look into shouldComponentUpdate() to prevent unneeded re-renders
  // TODO: prevent repeated words showing up until reset
  // TODO: make enter key default to submit when typing
  // TODO: prevent alert pushing button down (have padding there but alert hidden)
  // TODO: add option to play timed version
  // TODO: add a "give up" button which will show total score and percent correct

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
  function getRandKana(data) {
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

  function processSubmit(data) {
    let input = document.getElementById('inputAnswer');
    console.log(input.value);

    if (input.value.length > 0) {
      console.log('input detected');
      let inputValue = input.value;
      let eng = getKeyPairValue(Object.keys(randKanaObj));

      if (eng.toLowerCase() === inputValue.toLowerCase()) {
        handleCorrectAnswer();
      } else {
        handleInCorrectAnswer();
      }
      handleShowEmpty(false);
      clearInput();
      getRandKana(data);
    } else {
      console.log('empty input');
      handleShowEmpty(true);
    }
  }

  function getKeyPairValue(objVal) {
    objVal = objVal.map(function (e) {
      return JSON.stringify(e);
    });

    objVal = objVal.toString().replace(/['"]+/g, '');
    return objVal;
  }

  function handleShowEmpty(boolean) {
    setShowEmptyInput(boolean);
    if (boolean === true) {
      setShowIncorrect(false);
      setShowCorrect(false);
    }
  }

  function handleCorrectAnswer() {
    setShowCorrect(true);
    setShowIncorrect(false);
    setScore(prevScore => prevScore + 1);
    setTotalSubmits(prevScore => prevScore + 1);
  }

  function handleInCorrectAnswer() {
    setShowCorrect(false);
    setShowIncorrect(true);
    setTotalSubmits(prevScore => prevScore + 1);
  }

  function reset() {
    setTotalSubmits(0);
    setScore(0);
    setShowCorrect(false);
    setShowIncorrect(false);
    setShowEmptyInput(false);
  }

  function clearInput() {
    document.getElementById('inputAnswer').value = '';
  }

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
                The purpose of this exercise is to build up confidence in
                understanding Katakana based on guessing the given word through
                reading the Katakana and making sense of it.
              </p>
              <p>
                Reducing the need to remember words like you would in Hiragana
                and being able to read based just purely off the Katakana alone.
              </p>
              <p>E.g. スーパーマーケット = Sūpāmāketto = supermarket</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="mt-5">{currentKana}</h3>
            </Col>
          </Row>
          {/* TODO: fix after introducing form, there is a tiny lag for each load of a kana where before there wasn't will forego using a form for the moment */}
          <Row>
            <Col>
              <Alert
                show={showEmptyInput}
                onClose={() => setShowEmptyInput(false)}
                dismissible
                variant="danger"
              >
                Cannot leave input empty
              </Alert>
              <Alert
                show={showCorrect}
                onClose={() => setShowCorrect(false)}
                dismissible
                variant="success"
              >
                Correct!
              </Alert>
              <Alert
                show={showIncorrect}
                onClose={() => setShowIncorrect(false)}
                dismissible
                variant="danger"
              >
                Incorrect Answer!
              </Alert>
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
                onClick={event => {
                  processSubmit(data);
                }}
              >
                Submit Answer
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
        <Row>
          <Col>
            <p>Congratulations You have completed the Quiz</p>
            <p>Your Total Score is: {score} / 20</p>
            <button
              className="mt-3"
              onClick={event => {
                reset();
              }}
            >
              Play Again?
            </button>
          </Col>
        </Row>
      )}
      <div className="mb-5"></div>
    </Container>
  );
}

export default KanaQuiz;
