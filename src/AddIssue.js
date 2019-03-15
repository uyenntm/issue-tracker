import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description_value: "",
      severity_value: "",
      assigned_value: ""
    };
    this._addIssue = this._addIssue.bind(this);
    this._textChange = this._textChange.bind(this);
  }
  _addIssue(event) {
    let issue = {
      id: 0,
      description: this.state.description_value,
      severity:
        this.state.severity_value === ""
          ? this.props.severity[0]
          : this.state.severity_value,
      assigned: this.state.assigned_value
    };
    //console.log("issue:", issue);
    this.props.addIssue(issue);
  }
  _textChange(event) {
    //console.log(event.target.value);
    switch (event.target.name) {
      case "description":
        this.setState({ description_value: event.target.value });
        break;

      case "severity":
        this.setState({ severity_value: event.target.value });
        break;

      case "assigned":
        this.setState({ assigned_value: event.target.value });
        break;

      default:
    }
    //console.log(this.state);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Add A New Issue:</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Description</label>
              </Col>
              <Col>
                <input
                  name="description"
                  type="text"
                  onChange={this._textChange}
                  placeholder="Describe the issue ..."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Severity</label>
              </Col>
              <Col>
                <select
                  name="severity"
                  placeholder="select severity"
                  onChange={this._textChange}
                >
                  $
                  {this.props.severity.map((item,index) => {
                    
                    return <option value={index} key={index}>{item}</option>;

                  })}
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Assigned to</label>
              </Col>
              <Col>
                <input
                  name="assigned"
                  onChange={this._textChange}
                  type="text"
                  placeholder="Enter responsible ..."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={this._addIssue}>Add</Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default AddIssue;
