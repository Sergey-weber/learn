import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Chat from 'chat/Chat';

import {
  Container, Row, Col, FormInput, Button
} from 'shards-react';

import "./index.css";

const App = () => (
  <Container>
    <p></p>
    <h1>Chat!</h1>
    <Chat />
  </Container>
)

ReactDOM.render(<App />, document.getElementById("app"));
