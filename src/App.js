import React, { Component } from "react";
import { Quote } from "./Quote";
import { ButtonsContainer } from "./ButtonsContainer";

const App = () => (
  <div id="quote-box" className="App">
    <ButtonsContainer />
    <Quote />
  </div>
);

export default App;
