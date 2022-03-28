import { Product, User } from "@prisma/client";
import { getProductAPI } from "apis/products";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

interface ProductWithUser extends Product {
  user: User;
}

interface ResponseProductDetailType {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
}

const CommunityPstDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // id가 존재할 때 query 요청을 보냄
  const { data, error, isLoading } = useQuery<
    ResponseProductDetailType,
    AxiosError
  >("getProduct", () => getProductAPI(Number(id)), {
    enabled: !!id,
  });

  console.log("data", data);

  return (
    !error &&
    !isLoading && (
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="flex py-3 obrder-t border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-200" />
            <div>
              <p className="text-sm font-medium text-gray-600">
                {data?.product?.user?.nickname}
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
            <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="select-none">2</span>
            </div>

            {/* 신고버튼 */}

            {/* 댓글 */}
            <div className="px-4 my-5 space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    hyemin
                  </span>
                  <span className="text-xs block text-gray-500">2 시간 전</span>
                  <p className="text-gray-700 mt-2">
                    저 이거 어디서 샀어요...?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    hyemin
                  </span>
                  <span className="text-xs block text-gray-500">2 시간 전</span>
                  <p className="text-gray-700 mt-2">
                    저 이거 어디서 샀어요...?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div>
                  <span className="text-sm block font-medium text-gray-700">
                    hyemin2
                  </span>
                  <span className="text-xs block text-gray-500">2 시간 전</span>
                  <p className="text-gray-700 mt-2">
                    저 이거 어디서 샀어요...?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between space-x-2 space-y-4">
              <textarea className="w-full" />
              <button className="w-full flex-1 border border-primary rounded-md text-primary py-3 focus:outline-none focus:ring-2  transition-colors focus:ring-offset-2 focus:ring-primary font-medium hover:bg-primary hover:text-white">
                댓글달기
              </button>
            </div>

            {/* 유사상품 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">유사 상품</h2>
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
    )
  );
};

export default CommunityPstDetail;
