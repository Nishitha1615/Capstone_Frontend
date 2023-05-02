import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import  './style.css'
export default function Layout(props) {
  return (
    <>
        <Header/>
        {
          props.sidebar ?
          <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
          <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/category'}>Category</NavLink></li>
          <li><NavLink to={'/products'}>Products</NavLink></li>
          <li><NavLink to={'/order'}>Order</NavLink></li>
          </ul>
          </Col>
          <Col md={10} style={{marginLeft:"auto"}}> {props.children}</Col>
        </Row>
      </Container>
      :
      props.children
        } 
       
       
      
    </>
  )
}
