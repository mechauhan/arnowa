import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/login.css';
import { login } from '../actions/userAction';

const Login = (props) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();

  const loginfun = (e) => {
    dispatch(login(email, password));
    setemail('');
    setpassword('');
    props.history.push('/dashboard');
  };
  return (
    <>
      <Container className="padding">
        <Row className="center">
          <span className="heading">Log in</span>
        </Row>
        <Row>
          <Form>
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
            <Button onClick={(e) => loginfun(e)} className="btnStyle mt-3">
              Log In
            </Button>
          </Form>
        </Row>
        <Row>
          <Col sm={12} className="signUpContainer">
            {' '}
            <span>Don't have an account ? </span>
            <Link to="/signup"> Sign Up </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
