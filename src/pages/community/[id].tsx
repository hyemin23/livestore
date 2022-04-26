import CommentIcon from "@/components/icons/CommentIcon";
import LikedIcon from "@/components/icons/LikedIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import Layout from "@/components/layout";
import { Comments, Product, User } from "@prisma/client";
import { getProductAPI, postLikeAPI } from "apis/products";
import { AxiosError } from "axios";
import { CommonResponseMutation } from "interface/product";
import { cls } from "libs";
import { useRouter } from "next/router";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export interface CommentsTypes extends Comments {
  user: User;
}
interface ProductWithUser extends Product {
  user: User;
  _count: {
    comments: number;
    favs: number;
  };
  comments: CommentsTypes[];
}

interface ResponseProductDetailType {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const CommunityPstDetail = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;

  // id가 존재할 때 query 요청을 보냄
  const { data, error, isLoading } = useQuery<ResponseProductDetailType>(
    "getProduct",
    () => getProductAPI(Number(id)),
    {
      enabled: !!id,
    }
  );

  const likeMutation = useMutation<CommonResponseMutation, AxiosError, number>(
    "postLike",
    (id: number) => postLikeAPI(id),
    {
      // 좋아요 기능에 optimistic update 적용
      // 나중에 비회원들도 생각한 홈페이지를 만들었을 때, 접속중인지 확인도 필요함.
      // 현재는 회원들만 가능한다는 전제하에 사용하기 때문에 따로 로그인 여부를 확인 할 필요가 없음.
      onMutate() {
        queryClient.setQueryData<ResponseProductDetailType>(
          "getProduct",
          (data): any => {
            // 나의 좋아요를 판단하여 해당 게시글에 먼저 index를 올려준다.
            // onMutate이므로 mutate되기 전 상태 따라서 ! 로 반대 상황으로 가정해야함.
            const myLike = !data?.isLiked;
            const myLikeCount = myLike ? 1 : -1;

            // 해당 게시글의 좋아요, 좋아요 수 미리 업데이트
            const newLikedData = {
              ...data,
              isLiked: !data?.isLiked,
              product: {
                ...data?.product,
                _count: {
                  ...data?.product._count,
                  favs: Number(data?.product._count.favs || 0) + myLikeCount,
                },
              },
            };

            return newLikedData;
          }
        );
      },
      onSuccess() {
        queryClient.refetchQueries("getProduct");
      },
    }
  );

  const onFavClick = () => likeMutation.mutate(Number(id));

  return (
    !error &&
    !isLoading && (
      <>
        <Layout title="커뮤니티" canGoBack hasTabBar>
          <div className="px-4 py-10">
            <div className="mb-8">
              <div className="flex py-3 obrder-t border-b items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {data?.product.user.nickname}
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    View profile &rarr;
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold text-gray-900">
                  {data?.product.name}
                </h1>
                <p className="text-base my-6 text-gray-700">
                  {data?.product.description}
                </p>

                {/* 추천버튼 */}
                <div className="flex space-x-0.5 items-center text-gray-500">
                  <button
                    onClick={onFavClick}
                    className={cls(
                      `p-2 rounded-md flex items-center hover:bg-gray-100 justify-center `,
                      !data?.isLiked ? "text-secondary hover:text-primary" : ""
                    )}
                  >
                    {data?.isLiked ? <LikedIcon /> : <UnLikedIcon />}
                  </button>
                  <span className="select-none text-sm pt-1">
                    {data?.product._count.favs}
                  </span>

                  {/* 댓글 아이콘 */}
                  <div className="p-2 flex text-secondary ">
                    <CommentIcon />
                  </div>
                  <span className="select-none text-sm pt-1">
                    {data?.product._count.comments}
                  </span>
                </div>

                {/* 신고버튼 */}

                {/* 댓글 */}
                {/* {data?.product.comments && (
                  <CommentWriteComponents comments={data.product.comments} />
                )} */}

                {/* 유사상품 */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    유사 상품
                  </h2>
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
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  );
};

export default CommunityPstDetail;
