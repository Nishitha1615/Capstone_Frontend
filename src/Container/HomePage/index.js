import React from "react";
import Layout from "../../Components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import './style.css'
export default function Home() {
  return (
    <Layout sidebar>
     
      {/* <div class="jumbotron text-center" style={{"margin":"6rem" , "background":"#fff"}}>
        <h1>hi welcome to the Admiin page</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
      </div> */}
    </Layout>
  );
}
