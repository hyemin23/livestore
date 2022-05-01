import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import { Posts } from "@prisma/client";
import { getPostTypeAPI } from "apis/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getMenu } from "src/templates/HomePage";

// 페이지네이션, 검색기능
interface ResponsePostType {
  ok: boolean;
  post: PostsType[];
}

interface PostsType extends Posts {
  _count: {
    postFav: number;
    postsComments: number;
  };
}

const PostsTypeComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const cate = getMenu().find(({ key }) => {
    return key === id ? key : null;
  });

  // 해당 타입에 맞는 게시글들 모두 가져오기
  const { data: postList, isLoading: postLoading } = useQuery<ResponsePostType>(
    "getPost",
    () => getPostTypeAPI(String(id)),
    {
      enabled: !!id,
    }
  );

  return (
    <div>
      {cate?.name}

      {!postLoading &&
        postList?.post.map((data, idx) => {
          return (
            <div key={idx}>
              <Link href={`/posts/${data.id}`}>
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
  );
};

export default PostsTypeComponent;
