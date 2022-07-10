import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "조명원",
    comment: "안녕하세요 조명원 입니다.",
  },
  {
    name: "오아현",
    comment: "안녕하세요 오아현 입니다.",
  },
  {
    name: "오준호",
    comment: "재미있네요.",
  },
];

function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
