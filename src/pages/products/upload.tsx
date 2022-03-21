import Button from "@/components/atoms/Button";
import TextArea from "@/components/atoms/TextArea";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

const Upload: NextPage = (props) => {
  const { register, handleSubmit } = useForm<UploadProductForm>();

  const onValid = () => {};
  return (
    <div className="px-4 py-16">
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <div>
            <label className="w-full cursor-pointer hover:border-primary text-gray-600 hover:text-primary flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="my-5">
          <label
            htmlFor="price"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="flex items-center justify-self-center rounded-md shadow-sm relative">
            <div className="absolute left-0 pl-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm select-none">$</span>
            </div>

            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="appearance-none w-full pl-7 px-3 py-2 border  border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
            />

            <div className="absolute right-0 pr-3 flex items-center text-gray-900">
              <span className="text-gray-500 select-none">원</span>
            </div>
          </div>
        </div>

        <TextArea
          register={register("description", {
            required: true,
          })}
          name="description"
          label="Description"
          required
        />

        <Button className="mt-4 w-full py-2 px-4 border-transparent border border-gray-300 text-primary rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none hover:bg-primary hover:text-white">
          Upload product
        </Button>
      </form>
    </div>
  );
};

export default Upload;
