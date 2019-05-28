import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import statussMap from "../constants/statuss";
import severityMap from "../constants/severity";
const sortBySeverity = (issueA, issueB) => issueB.severity - issueA.severity;


function ListIssue({ issues }) {
  const orderedIssues = issues.sort(sortBySeverity);
  console.log({ issues });
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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderedIssues.map(({ id, description, severity, assigned, statuss }) => {
              // console.log("severity: ",severityMap[severity]);
              // console.log("severity: ",severityMap[severity]==="High"?"alert-danger":"alert-warning");
              let alertClass = "alert ";
              alertClass +=
                severityMap[severity] === "High"
                  ? "alert-danger"
                  : "alert-warning";
              //console.log(alertClass);
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{description}</td>
                  <td className={alertClass} role="alert">
                    {severityMap[severity]}
                  </td>
                  <td>{assigned}</td>
                  <td>{statussMap[statuss]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default ListIssue;
