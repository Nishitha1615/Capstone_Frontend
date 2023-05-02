import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import Input from '../../Components/UI/Input';
import {login} from '../../actions/auth.actions';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function Signin(props) {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const auth=useSelector(state=>state.auth);


  const dispatch=useDispatch();


  const userlogin=(e)=>{
    e.preventDefault();
    const user={
      email,password
    }

    dispatch(login(user))
  }

  if(auth.aunthenticate)
  {
      return <Navigate to={'/'}/>
  }
  return (
    <Layout>
      <Container>
        <Row style={{"margin":"4rem"}}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userlogin}>
            <Input
                Label="Email"
                placeholder="enter your Email"
                value={email}
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />

<Input
                Label="password"
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
  );
}
