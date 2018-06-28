import React, { Component } from "react";
import { Segment, Form, Grid, Divider, Button } from "semantic-ui-react";

export let arr = [
  { task: "Learn React Basic", id: 1 },
  { task: "Learn React Router", id: 2 },
  { task: "Learn React Redux", id: 3 }
];

class NewTodo extends Component {
  constructor() {
    super();
    this.state = { task: "", id: 3 };
  }

  handleTodo(e) {
    e.preventDefault();
    this.setState({ task: e.target.value, id: this.state.id + 1 });
  }

  handleSubmit() {
    arr.push(this.state);
    console.log(arr); //Test phase :D
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={14} computer={4}>
          <Segment padded="very" align="center">
            <Segment color="violet">
              <h3>Add Todos</h3>
            </Segment>
            <Divider hidden />
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Field>
                <Form.Input
                  placeholder="Title"
                  title="title"
                  name="title"
                  required
                  onChange={this.handleTodo.bind(this)}
                />
              </Form.Field>
              <Form.Field>
                <Form.TextArea
                  title="Description"
                  placeholder="Description"
                  name="description"
                  required
                />
              </Form.Field>
              <Divider hidden />
              <Divider hidden />
              <Button size="large" color="violet" type="submit">
                Add
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewTodo;
