import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreator";

class AddTodoComponent extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    const text = this.state.text;
    if (text !== "") {
      e.preventDefault();
      this.props.addTodo(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          id="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add your item here, then please Enter"
        />
      </form>
    );
  }
}


export default connect(null, { addTodo })(AddTodoComponent);
