import { Comments, User } from "@prisma/client";
import React from "react";

interface CommentContentsComponents extends Comments {
  user: User;
}
interface CommentContentsType {
  comment: CommentContentsComponents;
}
const CommentContentsComponents = ({ comment }: CommentContentsType) => {
  return (
    <div className="px-4 my-5 space-y-5">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-slate-200" />
        <div>
          <span className="text-sm block font-medium text-gray-700">
            {comment.user.nickname}
          </span>
          <span className="text-xs block text-gray-500">
            {new Date(comment.updatedAt).toLocaleString()}
          </span>
          <p className="text-gray-700 mt-2">{comment.contents}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentContentsComponents;
