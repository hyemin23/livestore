import React from "react";
import LogoutIcon from "../icons/LogoutIcon";
import ProfileIcon from "../icons/ProfileIcon";

const SearchBarComponents = () => {
  return (
    <div className="flex">
      <div className="w-full">
        <input
          className="w-full rounded-lg"
          type="search"
          name="search"
          required
          onChange={() => {}}
          placeholder="찾으시는 내용을 검색해 보세요."
        />
      </div>
      {/* 로그인, 로그아웃 아이콘 */}
      <div className="flex items-center justify-center space-x-3 ml-2">
        <ProfileIcon />
        <LogoutIcon />
      </div>
    </div>
  );
};

export default SearchBarComponents;
