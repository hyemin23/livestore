import React from "react";

const LiveDetail = () => {
  return (
    <div className="pt-4 px-4">
      <div className="w-full bg-slate-300 rounded-md shadow-sm aspect-square" />
      <h3 className="font-semibold  text-2xl text-gray-800  mt-2">
        Lets potatos
      </h3>
      <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
        {Array.from({
          length: 20,
        })
          .fill(20)
          .map(() => (
            <>
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
            </>
          ))}
      </div>

      <div className="fixed py-2 px-2 w-full bg-white bottom-0 right-0 left-0 ">
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

export default LiveDetail;
