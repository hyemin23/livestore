import CommentIcon from "@/components/icons/CommentIcon";
import CountIcon from "@/components/icons/CountIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import WritePersonIcon from "@/components/icons/WritePersonIcon";
import Link from "next/link";
import React from "react";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  nickname: string;
}

const ProductsListComponent = ({
  id,
  title,
  description,
  nickname,
}: ProductProps) => {
  return (
    <Link href={`/community/${id}`}>
      <a>
        <div className="flex px-4 border-b pb-4 space-x-4 hover:border-b hover:border-primary">
          {/* 썸네일 */}
          <div className="w-20 h-20 bg-gray-400 rounded-md" />

          <div className="flex flex-col space-y-2 w-full">
            <div>
              <h2 className="text-l font-medium text-gray-900">{title}</h2>
            </div>

            {/* 태그 넣기 */}
            <div className="flex space-x-1 select-none">
              <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                독코스
              </span>
              <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                타미
              </span>
              <span className="py-0.5 bg-white border border-primary rounded-full text-xs px-2 before:content-['#']">
                폴로
              </span>
            </div>
            <div className="font-medium text-sm">
              <span>{description}</span>
            </div>
            <div className="flex justify-end space-x-2 ">
              {/* 댓글 */}
              <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                <CommentIcon />
                <span className="select-none text-sm">1</span>
              </div>

              {/* 좋아요  */}
              <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                <UnLikedIcon />
                <span className="select-none text-sm">
                  {/* {products._count.fav} */}
                </span>
              </div>

              {/* 조회수 */}
              <div className="flex space-x-0.5 items-center text-gray-500 cursor-pointer">
                <CountIcon />
                <span className="select-none text-sm">2</span>
              </div>

              {/* 작성자 */}
              <div className="flex space-x-0.5 items-center text-gray-500 self-start cursor-pointer">
                <WritePersonIcon />
                <span className="text-sm">{nickname}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductsListComponent;
