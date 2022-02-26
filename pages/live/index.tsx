import { NextPage } from "next";
import React from "react";

const Live: NextPage = () => {
  return (
    <div className="py-10  divide-y-2 space-y-4">
      {Array.from(
        {
          length: 20,
        },
        () =>
          Array(20).fill({
            title: "test 영상",
          })
      ).map((data: any, index) => {
        return (
          <div key={index} className="pt-4 px-4">
            <div className="w-full bg-slate-300 rounded-md shadow-sm aspect-square" />
            <h3 className="font-medium text-gray-700 text-lg mt-2">
              {data[index].title}
            </h3>
          </div>
        );
      })}
      <button className="fixed bottom-24 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer border-transparent">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Live;
