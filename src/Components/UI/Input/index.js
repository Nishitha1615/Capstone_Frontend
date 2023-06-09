import React from "react";
import Form from "react-bootstrap/Form";

export default function Input(props) {
  return (
    <Form.Group className="mb-3" >
      <Form.Label>{props.Label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder}
      value={props.value} 
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">
        {props.message}
      </Form.Text>
    </Form.Group>
  );
}
