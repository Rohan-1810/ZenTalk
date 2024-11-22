import React from 'react'
import { Navbar, Nav, Container,Carousel, NavDropdown, Button,  Card } from "react-bootstrap";
import "./styles/Home.css"

function Navbar1() {
    return (
        
    <div>
    <Navbar expand="lg" className="bg-body-tertiary" >
            <Container className='nav1'>
            
          <Navbar.Brand href="/" className="logo" >Zentalk</Navbar.Brand>

          {/* Toggle for small screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Rightmost Dropdowns */}
            <Nav className="ms-auto nav2">
              <NavDropdown title="We Help With" id="we-help-with-dropdown" className="drop">
                <NavDropdown.Item href="#action/3.1">Relationship Counselling</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Stress Anxiety Depression</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Confidence</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Trauma</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Managing Workplace</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Life-Style Issues</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">LGBTQ+</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Women Centric Challenges</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Parenting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">ADHD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.11">Psychiatric Suport</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link  className="drop" href="/quiz">Menty Quiz</Nav.Link>
              <NavDropdown title="Self Help" id="self-help-dropdown" className="drop">
              <NavDropdown.Item href="/schemes">Government Schemes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Activities</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Yogic Exercises</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wellness Stories</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Articles</NavDropdown.Item>
                
              </NavDropdown>
              {/* <NavDropdown title="Menty Quiz" id="menty-quiz-dropdown" className="drop">
                <NavDropdown.Item href="#action/3.1">Am I Sad or Depressed?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Are you in an unhealthy relationship?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Am I Anxious?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Am I Stressed?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Happiness Scale</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Parenting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Breakup</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">How am I Sleeping?</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Alcohol/Drug Addiction Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Workplace Stress Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Health Anxiety</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            {/* Sign In Button */}
            <Button variant="outline-primary" href="/user/login" className="ms-3">
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navbar1;
