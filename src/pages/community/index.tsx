import ProductsListComponent from "@/components/organs/products/ProductsList.component";
import { Product } from "@prisma/client";
import { getProductsAPI } from "apis/products";
import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";
import Layout from "src/components/layout";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}
// 인기 게시글은 상위 노출, 고정
const Community: NextPage = () => {
  // 초기 상품 가져오기
  // 처음 들어오자마자 상품 조회를 요청해야함.
  const { data, isLoading, error } = useQuery<ProductsResponse>(
    "getProducts",
    getProductsAPI
  );

  return (
    <Layout canGoBack hasTabBar>
      <div className="flex flex-col space-y-5 py-10 ">
        <div className="flex justify-around mb-5">
          <h3 className="cursor-pointer border-b-2 border-primary text-gray-900 text-l pb-3 hover:text-primary transition-colors hover:shadow-xl">
            게시판
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 border-primary text-l hover:text-primary transition-colors hover:shadow-xl">
            같이사요
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 border-primary text-l hover:text-primary transition-colors hover:shadow-xl">
            배송대행 Tip
          </h3>
          <h3 className="cursor-pointer text-gray-900 border-b-2 text-l border-primary hover:text-primary transition-colors hover:shadow-xl">
            사이즈 Tip
          </h3>
        </div>

        {!isLoading &&
          !error &&
          data?.products?.map((product, i: number) => (
            <ProductsListComponent
              key={i}
              id={product.id}
              title={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        <button className="fixed bottom-14 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button className="fixed bottom-32 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
