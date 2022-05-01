import Button from "@/components/atoms/Button";
import ChatIcon from "@/components/icons/ChatIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import { getPostsAPI } from "apis/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

interface CommunityListComponentType {
  type: string;
  keyName?: string;
}

interface ResponsePostsType {
  ok: boolean;
  posts: any;
}

const CommunityListComponent = ({
  type,
  keyName,
}: CommunityListComponentType) => {
  const router = useRouter();

  const { data: postsList, isLoading } = useQuery<ResponsePostsType>(
    "getPosts",
    getPostsAPI
  );

  return (
    <div>
      <div className="flex items-center pt-4 justify-center pb-2">
        <ChatIcon />
        <p className="select-none font-medium px-2">{type}</p>
      </div>

      <div className="flex flex-col divide-y last:divide-y-0">
        {keyName &&
          !isLoading &&
          postsList?.posts[keyName]?.map((data: any, idx: number) => {
            return (
              <div key={idx}>
                <Link href={`/posts/${data.id}`} key={idx}>
                  <a href="#" className="flex justify-between py-2">
                    <p>{data.title}</p>
                    <div className="flex space-x-2">
                      <UnLikedIcon />
                      <span>{data._count.postFav}</span>
                      <CommentIcon />
                      <span>{data._count.postsComments}</span>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
      <Button
        onClick={() => router.push(`/posts/type/${type}`)}
        className="divide-y-0"
      >
        더보기
      </Button>
    </div>
  );
};

export default CommunityListComponent;
