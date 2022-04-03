import CommentButtonFormComponents from "@/components/molecules/CommentButtonForm.component";
import CommentContentsComponents from "@/components/molecules/CommentContents.components";
import React from "react";
import { CommentsTypes } from "src/pages/community/[id]";

interface CommentWriteComponentsType {
  comments: CommentsTypes[];
}
const CommentWriteComponents = ({ comments }: CommentWriteComponentsType) => {
  return (
    <>
      {comments
        ? comments.map((comment: any, index: number) => (
            <CommentContentsComponents comment={comment} key={index} />
          ))
        : null}
      <CommentButtonFormComponents />
    </>
  );
};

export default CommentWriteComponents;
