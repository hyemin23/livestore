import SettingIcon from "@/components/icons/SettingIcon";
import SettingPlusIcon from "@/components/icons/SettingPlusIcon";
import SearchBarComponents from "@/components/molecules/SearchBar.components";
import CommunityListComponent from "@/components/organs/community/CommunityList.component";
import { getPostsAPI } from "apis/posts";
import { cls } from "libs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";

const getMenu = () => [
  { name: "홈", key: "home" },
  { name: "자유게시판", key: "free" },
  { name: "일일알바", key: "job" },
  { name: "구인구직", key: "recurit" },
];

const HomePage = () => {
  const router = useRouter();
  const {
    data: postsList,
    isLoading,
    error,
  } = useQuery("getPosts", getPostsAPI);

  const [activeBar, setActiveBar] = useState<number>(0);

  const provideMenu = () =>
    getMenu().map((data, index: number) => getActiveMenu(data.name, index));

  const getActiveMenu = (name: string, index: number) => {
    return (
      <li
        key={index}
        className={cls(
          `cursor-pointer w-full hover:text-primary transition-colors hover:shadow-xl  text-base `,
          index === activeBar ? `border-b-2 border-primary` : ""
        )}
        onClick={() => setActiveBar(index)}
      >
        {name}
      </li>
    );
  };

  return (
    <div className="py-10 px-2">
      {/* Logo */}
      <SearchBarComponents />

      {/* slide 광고 영역 */}
      <div className="py-10 px-2">
        <p className="font-bold text-xl tracking-wider">뷰티인 커뮤니티</p>

        <p className="font-normal text-sm tracking-wide leading-8">뷰티용</p>
      </div>

      <div>
        {/* 게시판 종류 */}
        <div>
          <ul className="flex justify-around items-center text-center py-2">
            {provideMenu()}
          </ul>
        </div>

        {/* 게시판 별 종류 */}
        {!isLoading && !error && (
          <div className="py-3">
            <div className="flex flex-col divide-y">
              {activeBar === 0 ? (
                getMenu()
                  .slice(1)
                  .map((data, index: number) => (
                    <CommunityListComponent
                      posts={postsList.posts}
                      keyName={data.key}
                      key={index}
                      type={getMenu()[index].name}
                    />
                  ))
              ) : (
                <CommunityListComponent
                  key={activeBar}
                  posts={postsList.posts}
                  type={getMenu()[activeBar].name}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* 글 작성 아이콘 */}
      <button
        className="fixed bottom-14 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer"
        onClick={() => router.push("/posts/upload")}
      >
        <SettingIcon />
      </button>

      {/* 설정 아이콘 */}
      <button className="fixed bottom-32 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
        <SettingPlusIcon />
      </button>
    </div>
  );
};

export default HomePage;
