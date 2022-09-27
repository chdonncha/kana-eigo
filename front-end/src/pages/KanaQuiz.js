import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    var question = "マクドナルド";

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
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[]);

    console.log(data);
    //
    // var randomProperty = function (data) {
    //     console.log(data);
    //     var keys = Object.keys(data);
    //     return data[keys[keys.length * Math.random() << 0]];
    // };

    const dataItemToKeyValues = (data) => {
        const entries = Object.entries(data);
        const listItems = entries.map(([key, value]) => (
            <li>
                {key}: {value}
            </li>
        ));
        return <ul>{listItems}</ul>;
    };

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
                        {
                            data.map((item) => (
                                    <li>{dataItemToKeyValues(item)}</li>
                                ))
                        }
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


export default KanaQuiz;