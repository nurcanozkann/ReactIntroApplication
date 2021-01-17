import React, { Component } from "react";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
      debugger;
    event.preventDefault();
    alertify.success(this.state.email + " added to db!", 3);
    alertify.success(this.state.password + " added to db!", 3);
    alertify.success(this.state.city + " added to db!", 3);
    alertify.success(this.state.description + " added to db!", 3);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="emil">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" onChange={this.handlerChange} />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.handlerChange}>
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Adana</option>
              <option>Diyarbakır</option>
            </Input>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
