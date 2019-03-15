import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AddIssue from "./AddIssue";
import ListIssue from "./ListIssue";
//import Ultility from "./ultility/ultiliy";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      severity: ["low", "medium", "high"]
    };

    this._addIssue = this._addIssue.bind(this);
    //console.log("low:", this.state.severity.indexOf("low"));
  }
  _addIssue(issue) {
    issue.id = this.state.issues.length + 1;
    this.setState(preState => {
      return { issues: [...preState.issues, issue] };
    });
    // let result = this.state.issues
    //   .sort(
    //     (a, b) =>
    //       this.state.severity.indexOf(a.severity) >
    //       this.state.severity.indexOf(b.severity)
    //   );
    // console.log("result:", result);
    //let result = this.state.issues.sort(this.compareValues('severity', 'desc'));
    // console.log(
    //   "after:", result
    // );
  }
  
  render() {
    return (
      <div>
        <AddIssue addIssue={this._addIssue} severity={this.state.severity} />
        <ListIssue issues={this.state.issues} severity={this.state.severity} />
      </div>
    );
  }
}

export default App;
