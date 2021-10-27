import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import '../css/dashboard.css';
import { Bar, Pie } from 'react-chartjs-2';
const Dashboard = () => {
  const data = {
    labels: ['India', 'Oman', 'Us'],
    datasets: [
      {
        data: [121, 191, 31],
        backgroundColor: ['#ffd51a', '#8bb5f6', '#ff7e2f'],
        borderColor: ['#ffd51a', '#96bcf3', '#fa6400'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Container className="background" fluid={true}>
        <Row>
          <Col sm={12} className="welcomeStyle">
            <span className="message">Welcome </span>
            <span className="nameStyle">Prashant</span>
          </Col>
          <Col sm={6} className="welcomeStyle">
            <Bar data={data}></Bar>
          </Col>
          <Col sm={6} className="welcomeStyle">
            <Pie data={data}></Pie>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
