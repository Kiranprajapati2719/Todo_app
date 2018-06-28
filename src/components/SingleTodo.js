import React, { Component } from "react";
import { arr } from "./NewTodo";
import { Segment, Grid, Divider, Checkbox } from "semantic-ui-react";

class SingleTodo extends Component {
  constructor() {
    super();
    this.todo = this.todo.bind(this);
  }

  todo = id =>
    arr.filter(el => el.id === +id).map((el, i) => (
      <Segment key={i}>
        <Checkbox label={`${el.task}`} />
      </Segment>
    ));

  render() {
    const { id } = this.props.match.params;
    return (
      <Grid centered>
        <Grid.Column mobile={14} computer={4}>
          <Segment padded="very">
            <Segment color="violet">
              <h3 align="center">Todos</h3>
            </Segment>
            <Divider hidden />
            <Segment.Group>{this.todo(id)}</Segment.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SingleTodo;
