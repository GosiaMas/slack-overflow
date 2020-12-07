import React from "react";
import { Link } from "react-router-dom";

const Question = (props) => {
  return (
    <Link to={`/question/${props.id}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px dashed red",
          marginBlock: "1em",
          padding: "1em",
          textDecoration: "none",
          color: "darkgray",
        }}
      >
        <div>
          <h5 style={{ margin: "0" }}>{props.question}</h5>
          <div>{props.author}</div>
        </div>

        {/* <button onClick={() => props.deleteQuestion(props.id)}>Remove</button> */}
      </div>
    </Link>
  );
};

export default Question;
