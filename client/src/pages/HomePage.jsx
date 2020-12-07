import React from "react";
import Question from "../components/Question";
import { addNewQuestion, getAllQuestions } from "../services/questions";
import axios from "axios";

// goals for now: add a new question with the right data
// filter in real time by either author or content
// remove question from list

class HomePage extends React.Component {
  state = {
    questions: [],
    search: "",
    question: "",
    topic: "",
    author: "",
    tags: "",
  };

  componentDidMount = () => {
    // getAllQuestions().then((questions) => {
    //   this.setState({ questions });
    // });

    axios.get("http://localhost:5005").then((responseBack) => {
      // console.log("responseBack:", responseBack);
      this.setState({ questions: responseBack.data });
    });
  };

  handleChange = (event) => {
    console.log(event.target.name, ": ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  deleteQuestion = (id) => {
    const arrayWithoutId = this.state.questions.filter((el) => el.id !== id);

    this.setState({
      questions: arrayWithoutId,
    });
  };

  render() {
    const filteredQuestions = this.state.questions.filter((el) => {
      return (
        el.question.toLowerCase().includes(this.state.search.toLowerCase()) ||
        el.author.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });

    return (
      <>
        <div>
          <input
            style={{ width: "100%" }}
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>
        {filteredQuestions.map((el, i) => (
          <Question
            id={i}
            deleteQuestion={this.deleteQuestion}
            key={el.id}
            {...el}
          />
        ))}
      </>
    );
  }
}

export default HomePage;
