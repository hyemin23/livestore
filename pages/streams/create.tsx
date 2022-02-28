import { NextPage } from "next";
import React from "react";

const Create: NextPage = () => {
  return (
    <div className="px-4 space-y-5 py-10">
      <div className="my-5">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          제목
        </label>
        <div className="flex items-center justify-self-center rounded-md shadow-sm relative">
          <input
            id="price"
            type="text"
            placeholder="방송 제목을 입력해주세요."
            className="appearance-none w-full pl-3 px-3 py-2 border  border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="desc"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          설명
        </label>
        <div>
          <textarea
            id="desc"
            rows={4}
            className="mt-1 shadow-sm w-full focus:ring-primary rounded-md border-gray-300 focus:border-primary"
          />
        </div>
      </div>
      <button className="mt-4 w-full py-2 px-4 border-transparent border border-gray-300 text-primary rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none hover:bg-primary hover:text-white">
        Upload product
      </button>
    </div>
  );
};

export default Create;
