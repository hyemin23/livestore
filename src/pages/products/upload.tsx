import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import { uploadAPI } from "apis/products";
import { AxiosError } from "axios";
import { UploadProductMutation } from "interface/product";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UploadProductForm } from "src/interface/product";

const Upload: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<UploadProductForm>();

  const mutation = useMutation<
    UploadProductMutation,
    AxiosError,
    UploadProductForm
  >("uploadProducts", (data) => uploadAPI(data), {
    onMutate: () => {
      setSubmitting(true);
    },
    onError: (error) => {
      alert(error.response?.data);
    },
    onSuccess: (data: UploadProductMutation) => {
      console.log(data);

      if (data?.ok) {
        router.push(`/products/${data.product.id}`);
      }
    },
    onSettled: () => {
      setSubmitting(false);
    },
  });

  const onValid = useCallback(
    (data: UploadProductForm) => {
      mutation.mutate(data);
    },
    [submitting]
  );

  return (
    <div className="px-4 py-16">
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label className="w-full cursor-pointer hover:border-primary text-gray-600 hover:text-primary flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
            <input type="file" className="hidden" />
          </label>
        </div>

        <Input
          register={register("name", { required: true })}
          required
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("price", { required: true })}
          required
          label="가격"
          name="price"
          type="text"
          kind="price"
        />
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
          {mutation.isLoading ? "업로드 중" : "업로드"}
        </Button>
      </form>
    </div>
  );
};

export default Upload;
