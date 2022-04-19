import Button from "@/components/atoms/Button";
import ChatIcon from "@/components/icons/ChatIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import UnLikedIcon from "@/components/icons/UnLikedIcon";
import React from "react";

interface CommunityListComponentType {
  type: string;
  posts: any;
  keyName?: string;
}
const CommunityListComponent = ({
  type,
  posts,
  keyName,
}: CommunityListComponentType) => {
  return (
    <div>
      <div className="flex items-center pt-4 justify-center pb-2">
        <ChatIcon />
        <p className="select-none font-medium px-2">{type}</p>
      </div>

      <div className="flex flex-col divide-y last:divide-y-0">
        {keyName &&
          posts[keyName].map((data: any, idx: number) => {
            return (
              <div key={idx} className="flex justify-between py-2 ">
                <p>{data.title}</p>
                <div className="flex space-x-2">
                  <UnLikedIcon />
                  <span>2</span>
                  <CommentIcon />
                  <span>2</span>
                </div>
              </div>
            );
          })}
      </div>
      <Button className="divide-y-0">더보기</Button>
    </div>
  );
};

export default CommunityListComponent;
