import TextArea from "@/components/atoms/TextArea";
import { postCommentAPI } from "apis/posts";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

interface WriteForm {
  contents: string;
}

const CommentWriteComponents: React.FC = () => {
  const { register, handleSubmit } = useForm<WriteForm>();
  const mutation = useMutation("postComment", (data: WriteForm) =>
    postCommentAPI(data)
  );

  const onValid = (data: WriteForm) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="px-4 my-5 space-y-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div>
            <span className="text-sm block font-medium text-gray-700">
              hyemin
            </span>
            <span className="text-xs block text-gray-500">2 시간 전</span>
            <p className="text-gray-700 mt-2">저 이거 어디서 샀어요...?</p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full items-center justify-center space-x-2 ">
        <div className="flex flex-1 h-14">
          <TextArea
            register={register("contents", {
              required: true,
              minLength: 1,
            })}
            placeholder="댓글을 입력해보세요."
          />
        </div>
        <div className="flex-2 h-14">
          <button className="border px-2 h-full border-primary rounded-md text-primary py-3 focus:outline-none focus:ring-2  transition-colors focus:ring-offset-2 focus:ring-primary font-medium hover:bg-primary hover:text-white">
            댓글달기
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentWriteComponents;
