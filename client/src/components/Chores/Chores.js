import React from "react";
import "./Chores.css";
import { Container, Row, Col } from "../Grid";

export const Chores = props => (
    <div>
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Ingredients: {props.ingredients}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to recipe!
          </a>
        </Col>
      </Row>
    </Container>
  </li>
  </div>
);

export default Chores;