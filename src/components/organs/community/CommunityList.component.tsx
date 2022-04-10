import Button from "@/components/atoms/Button";
import ChatIcon from "@/components/icons/ChatIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import React from "react";

interface CommunityListComponentType {
  type: string;
}
const CommunityListComponent = ({ type }: CommunityListComponentType) => {
  return (
    <div>
      <div className="flex items-center pt-4 justify-center pb-2">
        <ChatIcon />
        <p className="select-none font-medium px-2">{type}</p>
      </div>

      <div className="flex flex-col divide-y last:divide-y-0">
        {[
          "고민상담1",
          "뭐가문제죠?",
          "이게요",
          "아니그게 아니고",
          "어이가 없음",
        ].map((data, index) => (
          <div key={index} className="flex justify-between py-2 ">
            <p>{data}</p>
            <div className="flex space-x-2">
              <UnLikedIcon />
              <span>2</span>
              <CommentIcon />
              <span>2</span>
            </div>
          </div>
        ))}
      </div>
      <Button className="divide-y-0">더보기</Button>
    </div>
  );
};

export default CommunityListComponent;
