import { NextPage } from "next";
import React from "react";
import Layout from "src/components/layout";

// 인기 게시글은 상위 노출, 고정
const Community: NextPage = (props) => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="flex flex-col space-y-5 py-10 ">
        <div className="flex justify-around mb-5">
          <h3 className="cursor-pointer border-b-2 border-primary text-gray-900 text-l pb-3 hover:text-primary transition-colors hover:shadow-xl">
            게시판
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 border-primary text-l hover:text-primary transition-colors hover:shadow-xl">
            같이사요
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 border-primary text-l hover:text-primary transition-colors hover:shadow-xl">
            배송대행 Tip
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 text-l border-primary hover:text-primary transition-colors hover:shadow-xl">
            사이즈 Tip
          </h3>
        </div>

        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex px-4 border-b pb-4 space-x-4 hover:border-b hover:border-primary"
          >
            {/* 썸네일 */}
            <div className="w-20 h-20 bg-gray-400 rounded-md" />

            <div className="flex flex-col space-y-2 w-full">
              <div>
                <h2 className="text-l font-medium text-gray-900">
                  오늘은 이거 샀어요
                </h2>
              </div>

              {/* 태그 넣기 */}
              <div className="flex space-x-1 select-none">
                <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                  독코스
                </span>
                <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                  타미
                </span>
                <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                  폴로
                </span>
              </div>
              <div className="font-medium text-sm">
                <span>오늘은 이런 쇼핑몰에서 이런 옷을 샀습니다 허허허허</span>
              </div>
              <div className="flex justify-end space-x-2 ">
                {/* 댓글 */}
                <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="select-none text-sm">1</span>
                </div>

                {/* 좋아요  */}
                <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="select-none text-sm">2</span>
                </div>

                {/* 조회수 */}
                <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="select-none text-sm">2</span>
                </div>

                {/* 작성자 */}
                <div className="flex space-x-0.5 items-center text-gray-500 self-start cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-sm">hyemin</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="fixed bottom-14 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button className="fixed bottom-32 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
