import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {clear} from "@testing-library/user-event/dist/clear";

function KanaQuiz() {
    const [data, setData] = useState([]);
    const [randKanaObj, setRandKanaObj] = useState([]);
    const [currentKana, setCurrentKana] = useState([]);
    const [score, setScore] = useState(() => {
        return 0;
    });

    // TODO: implement scoring
    // increment score on success

    // setCount(setCurrentScore -> setCurrentScore + 1)

    const getData = () => {
        fetch('KanaEngData.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    if (currentKana.length === 0) {
        getRandKana(data, setCurrentKana);
    }

    function getRandKana(data) {
        let randObj;
        if (data.length > 0) {

            // Generate random index based on number of keys
            const randIndex = Math.floor(Math.random() * data.length)

            // Select a key from the array of keys using the random index
            randObj = data[randIndex]

            console.log(randObj);

            // setCurrentKana(JSON.stringify(Object.values(randKey)));
            let kana = (Object.values(randObj));

            kana = kana.map(function (e) {
                return JSON.stringify(e);
            });

            kana = kana.toString();
            kana = kana.replace(/['"]+/g, '');

            setCurrentKana(kana);
            setRandKanaObj(randObj);
        }
    }

    function processScore() {
        // TODO: set to ignore word casing
        // TODO: fix that words with space don't work on scoring

        console.log(randKanaObj);
        let input = document.getElementById("answer")
        let value = input.value
        let eng = Object.keys(randKanaObj);

        eng = eng.map(function (e) {
            return JSON.stringify(e);
        });

        eng = eng.toString();
        eng = eng.replace(/['"]+/g, '');

        if (eng === value) {
            setScore(prevScore => prevScore + 1)
        }

        clearInput();
    }

    function clearInput() {
        document.getElementById("answer").value = "";
    }

    return (
        <Container fluid="md" className="text-center mt-5">
            <Row>
                <Col>
                    <h3>Translate Katakana to English</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        The purpose of this exercise is to build up confidence in understanding Katakana
                        based on guessing the given word through reading the Katakana and making sense of it.
                    </p>
                    <p>
                        Reducing the need to remember words like you would in Hiragana and being able to
                        read based just purely off the Katakana alone.
                    </p>
                    <p>
                        E.g. スーパーマーケット = Sūpāmāketto = supermarket
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="mt-5">
                        {currentKana}
                    </h3>
                </Col>
            </Row>
            {/* TODO: fix after introducing form, there is a tiny lag for each load of a kana where before there wasn't will forego using a form for the moment */}
            <Row>
                <Col>
                    <input id="answer" type="text" name="answer" className="bg-light border mt-3"></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className="mt-3" onClick={event => {
                        processScore();
                        getRandKana(data);
                    }}>Submit Answer
                    </button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    Current Score: {score}
                </Col>
            </Row>
            <div className='mb-5'></div>
        </Container>
    )
}

// may be implemented at a later date

// const dataItemToKeyValues = (data) => {
//     const entries = Object.entries(data);
//     const listItems = entries.map(([key, value]) => (
//         <li>
//             {key}: {value}
//         </li>
//     ));
//     return <ul>{listItems}</ul>;
// };
//
// const value = data.map((item) => (
//     dataItemToKeyValues(item)
// ))

export default KanaQuiz;