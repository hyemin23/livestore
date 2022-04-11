import SettingIcon from "@/components/icons/SettingIcon";
import SettingPlusIcon from "@/components/icons/SettingPlusIcon";
import ProductsListComponent from "@/components/organs/products/ProductsList.component";
import { Product } from "@prisma/client";
import { getProductsAPI } from "apis/products";
import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";
import Layout from "src/components/layout";

interface CommunityResponseType extends Product {
  user: { nickname: string };
  _count: {
    comments: number;
    favs: number;
  };
}
interface ProductsResponse {
  ok: boolean;
  products: CommunityResponseType[];
}

// 인기 게시글은 상위 노출, 고정
const Community: NextPage = () => {
  // 초기 상품 가져오기
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
              nickname={product.user.nickname}
              favCount={product._count.favs}
              commentCount={product._count.comments}
            />
          ))}
        <button className="fixed bottom-14 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <SettingIcon />
        </button>
        <button className="fixed bottom-32 right-5 bg-white rounded-full p-4 text-primary border border-primary shadow-xl hover:bg-primary hover:text-white transition-colors cursor-pointer">
          <SettingPlusIcon />
        </button>
      </div>
    </Layout>
  );
};

export default Community;
