import React, { Component } from "react";
import ApiService from "../services/ApiService";
import { editTodo } from "../actions/actionCreator";
import { connect } from "react-redux";

class EditTodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      itemName: "",
      completed: "",
    };
    this.saveItem = this.saveItem.bind(this);
    this.loadItem = this.loadItem.bind(this);
  }

  componentDidMount() {
    this.loadItem();
  }

  loadItem() {
    ApiService.fetchTodoListById(window.localStorage.getItem("id")).then(
      (res) => {
        let todo = res.data.result;

        this.setState({
          id: todo.id,
          itemName: todo.itemName,
          completed: todo.completed,
        });
      }
    );
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });

  saveItem = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.id,
      itemName: this.state.itemName,
      completed: this.state.completed,
    };
    this.props.editTodo(todo);
    this.props.history.push("/")
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Edit Item</h2>
        <form>
          <div className="form-group">
            <label>Item Name:</label>
            <input
              type="text"
              placeholder="Enter the item"
              name="itemName"
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChange}
            />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="completed"
              checked={this.state.completed === true}
              value={this.state.completed}
              onChange={this.onChange}
            />

            <label>Completed</label>
          </div>
          <button className="btn btn-success" onClick={this.saveItem}>
            Edit Item
          </button>
        </form>
      </div>
    );
  }
}


export default connect(null, { editTodo })(EditTodoListComponent);
