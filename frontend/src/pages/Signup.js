import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { register } from '../actions/userAction';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();

  const saveUser = (e) => {
    dispatch(register(name, email, password));
    setName('');
    setemail('');
    setpassword('');
  };

  return (
    <>
      <Container className="padding">
        <Row className="center">
          <span className="heading">Sign up</span>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="labelStyle">Name</Form.Label>
              <Form.Control
                className="inputStyle"
                type="text"
                placeholder="Prashant"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="labelStyle">Email address</Form.Label>
              <Form.Control
                className="inputStyle"
                type="email"
                placeholder="mike@gmail.com"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="labelStyle">Password</Form.Label>
              <Form.Control
                className="inputStyle"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Button onClick={(e) => saveUser(e)} className="btnStyle mt-3">
              Sign Up
            </Button>
          </Form>
        </Row>
        <Row>
          <Col sm={12} className="signUpContainer">
            <span>Already have an account ? </span>
            <Link to="/"> Log in </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
