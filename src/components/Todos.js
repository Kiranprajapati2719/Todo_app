import React, { Component } from "react";
import { Segment, Grid, Divider, Checkbox } from "semantic-ui-react";
import { arr } from "./NewTodo";

class Todos extends Component {
  constructor() {
    super();
    this.state = { completed: false };
    this.toggle = () => this.setState({ completed: !this.state.completed });
  }

  showTodos = arr.map((el, i) => {
    return (
      <Segment key={i}>
        <Checkbox label={el.task} onChange={this.toggle} />
      </Segment>
    );
  });

  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={14} computer={4}>
          <Segment padded="very">
            <Segment color="violet">
              <h3 align="center">Todos</h3>
            </Segment>
            <Divider hidden />
            <Segment.Group>{this.showTodos}</Segment.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Todos;
