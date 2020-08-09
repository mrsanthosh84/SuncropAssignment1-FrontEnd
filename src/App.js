import React, { Component } from "react";
import TodoListComponent from "./components/TodoListComponent";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditTodoListComponent from "./components/EditTodoListComponent";

class App extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <h1>
            Todo<span>list</span> Application
          </h1>
          <h2>
            A simple todolist app built with React, Redux, SpringBoot with
            RESTAPI
          </h2>
        </header>
        <br />
        <Router>
          <div className="col-md-6">
            <Switch>
              <Route path="/" exact component={TodoListComponent} />
              <Route path="/edit-item" component={EditTodoListComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
