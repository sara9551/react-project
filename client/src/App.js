import React, { Component } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Form from "./components/Form";
import API from "./utils/API";
import Calendar from "./components/Calendar";
import { Container, Row, Col} from "./components/Grid";

class App extends Component {
  state = {
    chores: [],
    choreManage: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get chores update the chores state
    event.preventDefault();
    API.getChores(this.state.choreManage)
      .then(res => this.setState({ chores: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Hero />
        <br></br>
        <Container>
        <Row>
            <Col size="md-6">
            <h2> Add new chore </h2>
            <Form
            form onSubmit={this.handleSubmit}
            />
            <br></br>
            <br></br>
            </Col>
            <Col size="md-6">
                <Calendar />
                </Col>
                  </Row>
            </Container>
            <Nav />
                </div>
    );
  }
}

export default App;
