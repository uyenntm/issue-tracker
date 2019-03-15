import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

export default class ListIssue extends Component {
  constructor(props) {
    super(props);
  }
  compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }
  render() {
    // console.log(this.props.issues);
    // console.log(this.props.issues.length);
    //Sort by Severity
    let result = this.props.issues.sort(this.compareValues('severity', 'desc'));
    // console.log(
    //   "after:", result
    // );
    return (
      <div>
        <Container>
          <h1>List Issues</h1>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {result.map(issue => {
                return (
                  <tr key={issue.id}>
                    <td>{issue.id}</td>
                    <td>{issue.description}</td>
                    <td>{this.props.severity[issue.severity]}</td>
                    <td>{issue.assigned}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
