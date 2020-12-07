import { v4 } from "uuid";
import questionsList from "../questions.json";
import axios from "axios";

export function addNewQuestion(question) {
  return axios
    .post("http://localhost:5005/new-question", question)
    .then((response) => response);

  // return new Promise((res) => {
  //   res({
  //     id: v4(),
  //     ...info,
  //   });
  // });
}

export function getAllQuestions() {
  return new Promise((res) => {
    res(
      questionsList.map((el) => {
        return {
          ...el,
          id: v4(),
        };
      })
    );
  });
}
