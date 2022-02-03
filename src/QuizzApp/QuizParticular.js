import { Container, Row, Col, Button } from "react-bootstrap"

const QuizParticular = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row className="shadow p-3 mb-3 bg-body rounded">
                    <Col className="fs-4 text-start ">Quiz1</Col>
                    <Col className="text-end"><Button variant="primary" href="/startquiz">Attempt</Button></Col>
                </Row>
                <Row className="shadow p-3 mb-3 bg-body rounded">
                    <Col className="fs-4 text-start">Quiz2</Col>
                    <Col className="text-end"><Button variant="primary" href="/startquiz">Attempt</Button></Col>
                </Row>
                <Row className="shadow p-3 mb-3 bg-body rounded">
                    <Col className="fs-4 text-start">Quiz3</Col>
                    <Col className="text-end"><Button variant="primary" href="/startquiz">Attempt</Button></Col>
                </Row>
                <Row className="shadow p-3 mb-3 bg-body rounded">
                    <Col className="fs-4 text-start">Quiz4</Col>
                    <Col className="text-end"><Button variant="primary" href="/startquiz">Attempt</Button></Col>
                </Row>
                <Row className="shadow p-3 mb-3 bg-body rounded">
                    <Col className="fs-4 text-start">Quiz5</Col>
                    <Col className="text-end"><Button variant="primary" href="/startquiz">Attempt</Button></Col>
                </Row>
            </Container>
        </>
    )
}

export default QuizParticular
