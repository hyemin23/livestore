import { Product, User } from "@prisma/client";
import { postLikeAPI } from "apis/products";
import { cls } from "libs";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}
const ItemDetail: NextPage<ItemDetailResponse> = ({
  product,
  relatedProducts,
  isLiked,
}) => {
  const router = useRouter();
  const { refetch } = useQuery(
    `fav`,
    () => postLikeAPI(Number(router.query.id)),
    {
      enabled: false,
    }
  );
  const onFavClick = () => {
    console.log("onFavClick");
    refetch();
  };

  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-300" />
        <div className="flex py-3 obrder-t border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-200" />
          <div>
            <p className="text-sm font-medium text-gray-600">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-400">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-3xl mt-3 block text-gray-900">$140</span>
          <p className="text-base my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 border border-primary rounded-md text-primary py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-medium hover:bg-primary hover:text-white">
              Talk to seller
            </button>
            <button
              onClick={() => onFavClick()}
              className={cls(
                `flex items-center p-3  rounded-md justify-center hover:bg-gray-100 `,
                isLiked
                  ? "text-primary hover:text-red-600"
                  : "text-gray-400 hover:text-gray-500"
              )}
            >
              <svg
                className="h-6 w-6 "
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-slate-300" />
              <h3 className=" text-gray-700 -mb-1">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
