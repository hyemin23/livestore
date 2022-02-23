import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          <p>이거 얼마면 살 수 있냐 ? 할인 가능한가 ㅋ ?</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 flex-row-reverse space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          놉.
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          ok ㅂ2
        </div>
      </div>

      <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <div className="relative flex items-center">
          <input
            type="text"
            className="shadow-sm rounded-full w-full pr-12 focus:ring-primary focus:outline-none focus:border-primary"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-primary rounded-full px-3 text-sm text-white hover:bg-white hover:text-primary hover:border hover:border-primary hover:ring-2 hover:ring-offset-2 hover:ring-primary">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
