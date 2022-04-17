import Button from "@/components/atoms/Button";
import ChatIcon from "@/components/icons/ChatIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import React from "react";

interface CommunityListComponentType {
  type: string;
  posts: any;
}
const CommunityListComponent = ({
  type,
  posts,
}: CommunityListComponentType) => {
  console.log(posts);

  // 해당 type으로 useQuery 재요청을 해야함.

  return (
    <div>
      <div className="flex items-center pt-4 justify-center pb-2">
        <ChatIcon />
        <p className="select-none font-medium px-2">{type}</p>
      </div>

      <div className="flex flex-col divide-y last:divide-y-0">
        {posts.map((data: any, index: number) => (
          <div key={index} className="flex justify-between py-2 ">
            <p>{data.name}</p>
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
