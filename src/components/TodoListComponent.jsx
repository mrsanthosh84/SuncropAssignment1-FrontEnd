import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodoComponent from "./AddTodoComponent";
import ViewTodoListComponent from "./ViewTodoListComponent";
import { fetchTodos, deleteTodo, toggleTab } from "../actions/actionCreator";
import { TABS } from "../actions/actionsTypes";

class TodoListComponent extends Component {
  componentDidMount = async () => {
    this.props.fetchTodos();
    try {
      setInterval(async () => {
        this.props.fetchTodos();
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  };

  removeComplete = () => {
    this.props.todos.forEach(({ done, id }) => {
      if (done) this.props.deleteTodo(id);
    });
  };

  editTodoList(id) {
    window.localStorage.setItem("id", id);
    this.props.history.push("/edit-item");
  }

  renderTodos = (todos) => {
    return todos.map((todo) => {
      return (
        <ViewTodoListComponent
          key={todo.id}
          id={todo.id}
          name={todo.itemName}
          completed={todo.completed}
          editTodo={() => this.editTodoList(todo.id)}
          deleteTodo={() => this.props.deleteTodo(todo.id)}
        />
      );
    });
  };

  renderTabs = (currTab) => {
    return TABS.map((tab) => {
      return (
        <button
          key={tab}
          className={tab === currTab ? "button selected" : "button"}
          onClick={() => this.props.toggleTab(tab)}
        >
          {tab}
        </button>
      );
    });
  };

  render() {
    let todos = [];

    if (this.props.currTab === "ALL") {
      todos = this.props.todos;
    } else if (this.props.currTab === "InCompleted") {
      todos = this.props.todos.filter((todo) => !todo.completed);
    } else if (this.props.currTab === "Completed") {
      todos = this.props.todos.filter((todo) => todo.completed);
    }

    return (
      <article>
        <AddTodoComponent />
        {this.props.todos.length ? (
          <div style={{ marginBottom: 20, marginLeft: 10 }}>
            {this.props.todos.filter((todo) => !todo.done).length} todos left
          </div>
        ) : null}

        <div>
          {this.props.todos.length ? this.renderTabs(this.props.currTab) : null}
          {this.props.todos.some((todo) => todo.done) ? (
            <button className="button clear" onClick={this.removeComplete}>
              remove done
            </button>
          ) : null}
        </div>

        <ul style={{ paddingLeft: 10 }} className="list">
          <form className="form">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.renderTodos(todos)}</tbody>
            </table>
          </form>
        </ul>
      </article>
    );
  }
}

const mapStateToProps = ({ todos, currTab }) => {
  return { todos, currTab };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo, toggleTab })(
  TodoListComponent
);
