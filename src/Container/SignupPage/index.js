import React, { useState } from 'react'
import Layout from "../../Components/Layout";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from '../../Components/UI/Input';
import { Col, Row } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../actions/useraction';


export default function Signup(props) {

  const [FirstName,setFirstName]=useState('');
  const [LastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const user=useSelector(state=>state.user);
  const dispatch=useDispatch();

  const userSignup=(e)=>{
    e.preventDefault();
    const user={
      FirstName,LastName,email,password
    }
    dispatch(signup(user))
  }

const auth=useSelector(state=>state.auth);
  if(auth.aunthenticate)
  {
      return <Navigate to={'/'}/>
  }

if(user.loading)
{
  return <p>Loading....</p>
}

  return (
    <Layout>
      <Container>
      {user.message}
        <Row style={{"margin":"4rem"}}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
            <Row>
              <Col md={6}>
              <Input
                Label="First Name"
                placeholder="enter your first name"
                value={FirstName}
                type="text"
                onChange={(e)=>setFirstName(e.target.value)}
              />
              </Col>


              <Col md={6}>
              
              <Input
                Label="Last Name"
                placeholder="enter your lastname"
                value={LastName}
                type="text"
                onChange={(e)=>setLastName(e.target.value)}
              />

              </Col>


            </Row>
              
              <Input
                Label="Emal"
                placeholder="enter your Emal"
                value={email}
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
             

              
             <Input
                Label="Password"
                placeholder="enter your password"
                value={password}
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
             
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
