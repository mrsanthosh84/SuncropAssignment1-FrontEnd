import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo } from "../actions/actionCreator";

class ViewTodoListComponent extends Component {
  state = { editing: false, text: "" };

  componentDidMount = () => this.setState({ text: this.props.name });

  handleDeleteTodo = (e) => {
    e.stopPropagation();
    this.props.deleteTodo();
  };

  render() {
    const { id, name, completed, editTodo } = this.props;

    return (
      <tr key={id}>
        <td
          style={{
            textDecoration: completed === true ? "line-through" : "none",
          }}
        >
          {name}
        </td>

        <td>{completed === false ? "InCompleted" : "Completed"} </td>
        <td>
          <button
            className="btn btn-success"
            onClick={editTodo}
            style={{ marginLeft: "20px" }}
          >
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-success" onClick={this.handleDeleteTodo}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { updateTodo })(ViewTodoListComponent);
