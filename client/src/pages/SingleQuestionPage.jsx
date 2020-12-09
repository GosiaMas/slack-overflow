import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Question from "../components/Question";

// state = {
//   questionInfo: null,
//   counter: 0
// }
function SingleQuestionPage(props) {
  const [questionInfo, setQuestionInfo] = useState(null);
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  useEffect(() => {
    console.log("mount");
    axios
      .get(`http://localhost:5005/question/${props.match.params.id}`)
      .then((res) => {
        setQuestionInfo(res.data);
      });

    return () => {
      console.log("Peace I'm out");
    };
  }, []);

  useEffect(() => {
    console.log("COUNTER WAS MOUNTED AND/OR UPDATED");
  }, [counter]);

  useEffect(() => {
    console.log("anyting changed");
  });

  function increment() {
    // counter++;
    setCounter(counter + 1);
  }
  function decrement() {
    // counter--;
    setCounter(counter - 1);
  }
  // if (!questionInfo) {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button>{counter}</button>
      <button onClick={decrement}>-</button>
      {questionInfo ? (
        <Question counter={counter} {...questionInfo} />
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
  // }
}

// class SingleQuestionPage extends Component {
//   state = {
//     questionInfo: null,
//     counter: 0,
//   };

//   counter = 0;

//   componentDidMount = () => {
//     axios
//       .get(`http://localhost:5005/question/${this.props.match.params.id}`)
//       .then((res) => {
//         console.log("res:", res);
//         this.setState({
//           questionInfo: res.data,
//         });
//       });
//   };

//   increment = () => {
//     this.counter++;
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };

//   render() {
//     if (!this.state.questionInfo) {
//       return <div>Loading...</div>;
//     }

//     console.log(this.state);
//     return (
//       <div>
//         <button onClick={this.increment}>+</button>
//         <button>{this.counter}</button>
//         <Question {...this.state.questionInfo} />
//       </div>
//     );
//   }
// }

export default SingleQuestionPage;
