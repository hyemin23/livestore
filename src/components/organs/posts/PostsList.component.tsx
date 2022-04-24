import Button from "@/components/atoms/Button";
import ChatIcon from "@/components/icons/ChatIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import { Posts } from "@prisma/client";
import { getPostsAPI, getPostTypeAPI } from "apis/posts";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

interface CommunityListComponentType {
  type: string;
  keyName?: string;
  activeType?: number;
}

interface ResponsePostsType {
  ok: boolean;
  posts: any;
}
interface ResponsePostType {
  ok: boolean;
  post: Posts[];
}
const CommunityListComponent = ({
  type,
  keyName,
  activeType,
}: CommunityListComponentType) => {
  const { data: postsList, isLoading } = useQuery<ResponsePostsType>(
    "getPosts",
    getPostsAPI,
    {
      enabled: !activeType,
    }
  );

  const { data: postList, isLoading: postLoading } = useQuery<ResponsePostType>(
    "getPost",
    () => getPostTypeAPI(Number(activeType)),
    {
      enabled: !!activeType,
    }
  );
  return (
    <div>
      <div className="flex items-center pt-4 justify-center pb-2">
        <ChatIcon />
        <p className="select-none font-medium px-2">{type}</p>
      </div>

      <div className="flex flex-col divide-y last:divide-y-0">
        {keyName && !isLoading && !activeType
          ? postsList?.posts[keyName]?.map((data: any, idx: number) => {
              return (
                <div key={idx}>
                  <Link href={`/posts/${data.id}`} key={idx}>
                    <a href="#" className="flex justify-between py-2">
                      <p>{data.title}</p>
                      <div className="flex space-x-2">
                        <UnLikedIcon />
                        <span>2</span>
                        <CommentIcon />
                        <span>2</span>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })
          : !postLoading &&
            postList?.post.map((data, idx) => {
              return (
                <div key={idx}>
                  <Link href={`/posts/${data.id}`}>
                    <a href="#" className="flex justify-between py-2">
                      <p>{data.title}</p>
                      <div className="flex space-x-2">
                        <UnLikedIcon />
                        <span>2</span>
                        <CommentIcon />
                        <span>2</span>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
      </div>
      <Button className="divide-y-0">더보기</Button>
    </div>
  );
};

export default CommunityListComponent;
