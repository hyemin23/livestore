import { Comments, PostsComments } from "@prisma/client";
import { postCommentAPI } from "apis/posts";
import { comCommentAPI } from "apis/products";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";

interface WriteForm {
  contents: string;
}
interface ResponseComment {
  ok: boolean;
  comment: Comments;
}

interface ResponsePostComment {
  ok: boolean;
  comment: PostsComments;
}

const CommentButtonFormComponents = ({ type }: any) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WriteForm>();

  // 상품 댓글
  const mutation = useMutation<ResponseComment, AxiosError, WriteForm>(
    "comComment",
    (data: WriteForm) => comCommentAPI(Number(id), data),
    {
      onMutate() {
        setLoading(true);
      },
      onSuccess() {
        reset();
        setLoading(false);
        queryClient.refetchQueries("getProduct");
      },
    }
  );

  // 게시글 댓글
  const postMutation = useMutation<ResponsePostComment, AxiosError, WriteForm>(
    "postComment",
    (data: WriteForm) => postCommentAPI(Number(id), data),
    {
      onMutate() {
        setLoading(true);
      },
      onSuccess() {
        reset();
        setLoading(false);
        queryClient.refetchQueries("getPosts");
      },
    }
  );

  const onValid = (data: WriteForm) => {
    if (loading) {
      return;
    } else {
      type === "post" ? postMutation.mutate(data) : mutation.mutate(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
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
          <Button>{loading ? "입력중..." : "댓글달기"}</Button>
        </div>
      </div>
      <span>
        {errors.contents?.type === "required" && "내용을 입력해주세요."}
      </span>
    </form>
  );
};

export default CommentButtonFormComponents;
