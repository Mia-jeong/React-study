import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 3:12pm"
          content="Nice Blog!"
          src={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:24pm"
          content="Keep going!"
          src={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          timeAgo="Yesterday at 10:00am"
          content="Awesome!"
          src={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
