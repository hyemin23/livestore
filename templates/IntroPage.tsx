import AppTitleComponent from "@/components/molecules/AppTitle.components";
import Link from "next/link";
import React from "react";

const IntroPage = () => {
  return (
    <div className="bg-secondary h-screen text-white flex flex-col items-center justify-center">
      <AppTitleComponent />
      <div className="w-full flex  mt-24 px-5 space-x-2">
        <Link href="/login">
          <a className="border border-white w-full h-full text-center py-5 rounded-lg text-lg ">
            <button>로그인</button>
          </a>
        </Link>
        <Link href="/signup">
          <a className="border border-white w-full h-full text-center py-5 rounded-lg text-lg ">
            <button>회원가입</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
