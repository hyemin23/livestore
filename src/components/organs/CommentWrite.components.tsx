import CommentButtonFormComponents from "@/components/molecules/CommentButtonForm.component";
import CommentContentsComponents from "@/components/molecules/CommentContents.components";
import { PostsComments } from "@prisma/client";
import React from "react";
import { CommentsTypes } from "src/pages/community/[id]";

interface CommonType {
  type: string;
}
interface CommentWriteComponentsType extends CommonType {
  comments: CommentsTypes[];
}
interface PostsCommentType extends CommonType {
  postsComments?: PostsComments[];
}
const CommentWriteComponents = ({ postsComments, type }: PostsCommentType) => {
  return (
    <>
      {!!postsComments
        ? postsComments.map((comment: any, index: number) => (
            <CommentContentsComponents comment={comment} key={index} />
          ))
        : null}
      <CommentButtonFormComponents type={type} />
    </>
  );
};

export default CommentWriteComponents;
