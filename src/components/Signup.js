import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
// import { createUserDocument } from "../firebase";
import './Appp.css'
const Signup = () => {
  // const [displayName , setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
       const user = await signUp( email, password);
      navigate("/login");

      // STORING USERS INFO TO THE FIRESTORE DATABASE
      // await createUserDocument(user , {displayName})

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box ">
        <h2 className="mb-3">StudyEase Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicDisplayName">
            <Form.Control
              type="displayName"
              placeholder="Username"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group> */}


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary"  style={{width:'180px'}} type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
