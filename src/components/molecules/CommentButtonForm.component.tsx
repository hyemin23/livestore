import { Comments } from "@prisma/client";
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

const CommentButtonFormComponents = () => {
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

  const onValid = (data: WriteForm) => {
    if (loading) {
      return;
    } else {
      mutation.mutate(data);
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
