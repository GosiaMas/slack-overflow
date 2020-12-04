import logo from "./logo.svg";
import React from "react";
import questions from "./questions.json";
import Question from "./components/Question";
import { addNewQuestion, getAllQuestions } from "./services/questions";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleQuestionPage from "./pages/SingleQuestionPage";

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 auto", maxWidth: "768px" }} className="App">
        <h3 style={{ textAlign: "center" }}>Slack overflow</h3>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/question/:id" component={SingleQuestionPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
