import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function KanaQuiz() {
    return (
        <Container fluid="md" className="text-center">
            <Row>
                <Col>
                    <h3>Translate Katakana to English</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default KanaQuiz;