import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import Layout from "@/components/layout";
import { Posts, PostsComments, User } from "@prisma/client";
import { getPostSearchAPI } from "apis/posts";
import { cls } from "libs";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import CommentWriteComponents from "../CommentWrite.components";

interface ResponsePostsDeatilType {
  ok: boolean;
  postItems: Posts & {
    postsComments: PostsComments[];
    user: User;
    _count: {
      postFav: number;
      postsComments: number;
    };
  };
}
const PostsDeatilComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useQuery<ResponsePostsDeatilType>(
    "getPostSearch",
    () => getPostSearchAPI(Number(id)),
    {
      enabled: !!id,
    }
  );

  return !isLoading ? (
    <Layout hasTabBar title="자유게시판" canGoBack>
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="flex py-3 obrder-t border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-200" />
            <div>
              <p className="text-sm font-medium text-gray-600">
                {data?.postItems.user.nickname}
              </p>
              <p className="text-sm font-medium text-gray-400">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold text-gray-900">
              {data?.postItems.title}
            </h1>
            <p className="text-base my-6 text-gray-700">
              {data?.postItems.description}
            </p>

            {/* 추천버튼 */}
            <div className="flex space-x-0.5 items-center text-gray-500">
              <button
                className={cls(
                  `p-2 rounded-md flex items-center hover:bg-gray-100 justify-center `
                )}
              >
                <UnLikedIcon />
              </button>
              <span className="select-none text-sm pt-1">
                {data?.postItems._count.postFav}
              </span>

              {/* 댓글 아이콘 */}
              <div className="p-2 flex text-secondary ">
                <CommentIcon />
              </div>
              <span className="select-none text-sm pt-1">
                {data?.postItems._count.postsComments}
              </span>
            </div>

            {/* 신고버튼 */}

            {/* 댓글 */}
            <CommentWriteComponents
              type="post"
              postsComments={data?.postItems.postsComments}
            />

            {/* 유사상품 */}
            {/* <div>
              <h2 className="text-2xl font-bold text-gray-900">다음 게시물</h2>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {data?.relatedProducts.map((product) => (
                  <div key={product.id}>
                    <div className="h-56 w-full mb-4 bg-slate-300" />
                    <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                    <span className="text-sm font-medium text-gray-900">
                      {product.price}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  ) : null;
};

export default PostsDeatilComponent;
