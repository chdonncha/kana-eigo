import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    let getValue;
    const [data, setData] = useState([]);
    var [currentKana, setCurrentKana] = useState([]);

    // this.state = {
    //     value: '',
    // };

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
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    // getRandKana(data, setCurrentKana);

    function getRandKana(data) {
        let randKey;

        if (data.length > 0) {
            // Generate random index based on number of keys
            const randIndex = Math.floor(Math.random() * data.length)

            // Select a key from the array of keys using the random index
            randKey = data[randIndex]

            // this.state = {
            //     value: JSON.stringify(Object.values(randKey)),
            // };

            setCurrentKana(JSON.stringify(Object.values(randKey)));

            // return JSON.stringify(Object.values(randKey));
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