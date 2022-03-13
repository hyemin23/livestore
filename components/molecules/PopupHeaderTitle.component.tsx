import React from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";

const PopupHeaderTitleComponent = ({
  popupTitle,
  Invisible,
}: {
  popupTitle: string;
  Invisible: () => void;
}) => {
  return (
    <div className="flex">
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={Invisible}
      >
        <LeftArrowIcon />
      </div>
      <div className="flex items-center justify-center w-full">
        <p>{popupTitle}</p>
      </div>
    </div>
  );
};

export default PopupHeaderTitleComponent;
