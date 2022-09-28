import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    let getValue;
    var question = "マクドナルド";
    var randKey = "";

    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('KanaEngData.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                // console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

    if (data.length > 0) {
        // Generate random index based on number of keys
        const randIndex = Math.floor(Math.random() * data.length)

        // Select a key from the array of keys using the random index
        randKey = data[randIndex]

        getValue = JSON.stringify(Object.values(randKey));
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
                        {getValue}
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
                    <button className="mt-3">Submit Answer</button>
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