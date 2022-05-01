import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import SelectBox from "@/components/atoms/SelectBox";
import TextArea from "@/components/atoms/TextArea";
import PhotoPreviewIcon from "@/components/icons/PhotoPreviewIcon";
import Layout from "@/components/layout";
import { uploadPostsAPI } from "apis/posts";
import { AxiosError } from "axios";
import { UploadPostsMutation } from "interface/posts";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UploadPostsForm } from "src/interface/posts";

const options = ["자유게시판", "매장평가", "구익구직", "헤어모델", "중고장터"];

const Upload = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<any>();

  const mutation = useMutation<
    UploadPostsMutation,
    AxiosError,
    UploadPostsForm
  >("uploadPosts", (data) => uploadPostsAPI(data), {
    onMutate: () => {
      setSubmitting(true);
    },
    onError: (error) => {
      alert(error.response?.data);
    },
    onSuccess: (data: UploadPostsMutation) => {
      if (data?.ok) {
        // 메인으로
        router.push(`/`);
      }
    },

    onSettled: () => {
      setSubmitting(false);
    },
  });

  const onValid = useCallback(
    (data: any) => {
      mutation.mutate(data);
    },
    [submitting]
  );

  return (
    <Layout title="글작성" hasTabBar canGoBack>
      <div className="px-4 py-16">
        <form onSubmit={handleSubmit(onValid)}>
          <div>
            <label className="w-full cursor-pointer hover:border-primary text-gray-600 hover:text-primary flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
              <PhotoPreviewIcon />
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="my-4">
            <SelectBox
              register={register("cateType", { required: true })}
              options={options}
            />
          </div>

          <Input
            register={register("title", { required: true })}
            required
            label="제목"
            name="title"
            type="text"
          />

          {/* 글쓰기 타입 */}
          <TextArea
            register={register("description", {
              required: true,
            })}
            name="description"
            label="내용"
            required
          />

          <Button
            type="submit"
            className="mt-4 w-full py-2 px-4 border-transparent border border-gray-300 text-primary rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none hover:bg-primary hover:text-white"
          >
            작성하기
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Upload;
