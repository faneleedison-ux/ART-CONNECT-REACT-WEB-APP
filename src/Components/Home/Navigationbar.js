import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: blue; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
   
    &:hover { color: gray; }
  }
  .navbar-brand {
    font-size: 5em;
    color: white;
    &:hover { color: gray; }
  }
  .form-center {
    position: absolute !important;
    left: 70%;
    right: 1%;
    
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">ART CONNECT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search Creative" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/news">News</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/design">Design</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="essay">Research</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="essay">Video</Nav.Link></Nav.Item>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)