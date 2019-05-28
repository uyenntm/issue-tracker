import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import uuidv4 from "uuid/v4";
import severity from "../constants/severity";
const severityList = Object.entries(severity);

class AddIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      severity: "1",
      assigned: "",
      statuss:"1"// New
    };
    this._addIssue = this._addIssue.bind(this);
    this._textChange = this._textChange.bind(this);
    //console.log(Object.entries(severity));
  }

  _resetForm() {
    this.setState({
      description: "",
      severity: "1",
      assigned: "",
      statuss:"1"
    });
  }
  _addIssue() {
    const { description, severity, assigned, statuss } = this.state;
    this.props.addIssue({
      id: uuidv4(),
      description,
      severity,
      assigned,
      statuss
    });
    this._resetForm();
  }
  _textChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { description, severity, assigned, statuss } = this.state;
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
                  value={description}
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
                  value={severity}
                >
                  {severityList.map(([key, value]) => {
                    return (
                      <option value={key} key={key}>
                        {value}
                      </option>
                    );
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
                  value={assigned}
                  onChange={this._textChange}
                  type="text"
                  placeholder="Enter responsible ..."
                />
                <input
                  name="statuss"
                  value={statuss}
                  onChange={this._textChange}
                  type="hidden"
                  
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
