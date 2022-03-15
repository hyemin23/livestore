import Layout from "src/components/layout";
import React from "react";

const Profile = () => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="relative flex flex-col mt-16 mx-4 rounded-[40px] shadow-[4px_4px_20px_rgba(0,0,0,0.2)] h-full">
        {/* 프로파일 사진 */}
        <div className="relative -top-7 left-0 right-0 flex flex-col items-center justify-center w-full">
          <label
            htmlFor="profile"
            className="relative w-14 h-14 bg-slate-400 rounded-full ring-2 ring-blue-600 ring-offset-2"
          >
            <div className="absolute -right-2 top-0 bg-white rounded-full px-0.5 py-0.5">
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
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input type="file" id="profile" className="hidden" />
            </div>
          </label>
        </div>

        {/* 기타정보 */}
        <div>
          <h2 className="text-center text-xl font-medium text-gray-900 pb-6">
            이앓이<span className="text-gray-700 pl-1">님</span>
          </h2>
          <div className="h-2 w-full bg-gray-300" />
        </div>

        <div className="flex justify-around mt-10 ">
          <button className="flex flex-col justify-center items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-sm font-medium">내가쓴글</span>
          </button>

          <button className="flex flex-col justify-center items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <span className="text-sm font-medium">저장한글</span>
          </button>
        </div>

        <div className="flex flex-col mt-8 border-y divide-y box-border ">
          {/* 건의사항 */}
          <button className="flex flex-col w-full justify-center items-center h-20">
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">건의사항</span>
          </button>

          {/* 로그아웃 */}
          <button className="flex flex-col w-full justify-center items-center h-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-sm">로그아웃</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
