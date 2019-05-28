import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddIssue from "./components/AddIssue";
import ListIssue from "./components/ListIssue";
import Toggle from "./Toggle";
//import Ultility from "./ultility/ultiliy";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
    this._addIssue = this._addIssue.bind(this);
  }
  _addIssue(issue) {
    this.setState(preState => {
      return { issues: [...preState.issues, issue] };
    });
  }

  _removeIssue(issueId) {
    // ...
  }

  _markAsCompleted(issueId) {
    // ...
  }
  render() {
    const { issues } = this.state;
    return (
      <div>
        <AddIssue addIssue={this._addIssue} />
        <ListIssue
          issues={issues}
          removeIssue={this._removeIssue}
          markAsCompleted={this._markAsCompleted}
        />
        <Toggle />
      </div>
    );
  }
}

export default App;
