import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    return (
        <Container fluid="md" className="text-center mt-5">
            <Row>
                <Col>
                    <h3>Translate Katakana to English</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="mt-5">マクドナルド</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className="p-2 bg-light border mt-3"></input>
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