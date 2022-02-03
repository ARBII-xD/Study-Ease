import { Container, Button, Card, Row, Col } from "react-bootstrap"


import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { UserContext } from "../App";
import { Link } from "react-router-dom";





const QuizMain = () => {
    // const {  dispatch } = useContext(UserContext)
    const { logOut, user } = useUserAuth();
    console.log(user)
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();

            // dispatch({ type: "USER", payload: false })

            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <>

            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br />
                {user && user.email}
            </div>


            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
                
            </div>
            <div className="p-4 box mt-3 text-center"> <Link to="/progress">See your Progress...</Link></div>




            <Container fluid className="mt-5">

                <Row>
                    <Col >
                        <Card>
                            <Card.Img variant="top" height={200} src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                            <Card.Body>
                                <Card.Title>Mathematics</Card.Title>
                                <Button variant="primary" href="/quizparticular">View Quizzes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" height={200} src="https://images.unsplash.com/photo-1559757175-0828e13882ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" />
                            <Card.Body>
                                <Card.Title>Biology</Card.Title>
                                <Button variant="primary" href="/quizparticular">View Quizzes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <Container fluid className="mt-2 p-2 bg-danger">
                <Row className="text-start">
                    <Col>Maths</Col>
                    <Col><Button variant="primary" href="/quizparticular">View</Button></Col>
                </Row>
                <Row>
                    <Col>Biology</Col>
                    <Col><Button variant="primary" href="/quizparticular">View</Button></Col>
                </Row>
            </Container> */}
        </>
    )
}

export default QuizMain
