import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    const [data, setData] = useState([]);
    var [currentKana, setCurrentKana] = useState([]);

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
        let randKey;

        if (data.length > 0) {
            // Generate random index based on number of keys
            const randIndex = Math.floor(Math.random() * data.length)

            // Select a key from the array of keys using the random index
            randKey = data[randIndex]

            // setCurrentKana(JSON.stringify(Object.values(randKey)));

            var kana = (Object.values(randKey));

            kana = kana.map(function (e) {
                return JSON.stringify(e);
            });

            kana = kana.toString();
            kana = kana.replace(/['"]+/g, '');

            setCurrentKana(kana);
        }
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
                        {/*{this.state.value}*/}
                        {/*{getValue}*/}
                        {currentKana}
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className="bg-light border mt-3"></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className="mt-3" onClick={event => getRandKana(data)}>Submit Answer</button>
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